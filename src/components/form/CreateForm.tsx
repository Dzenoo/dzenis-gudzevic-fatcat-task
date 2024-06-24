import React from 'react';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    UseFormRegister,
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from 'react-query';
import { FadeLoader } from 'react-spinners';
import Button from '@homework-task/components/Button';

type CreateFormProps<TFormInputs extends FieldValues> = {
    useMutation: () => UseMutationResult<any, any, TFormInputs>;
    validationSchema: ZodSchema<TFormInputs>;
    renderForm: (params: {
        register: UseFormRegister<TFormInputs>;
        errors: ReturnType<typeof useForm<TFormInputs>>['formState']['errors'];
    }) => React.ReactNode;
    successMessage: string;
};

const CreateForm = <TFormInputs extends FieldValues>({
    useMutation,
    validationSchema,
    renderForm,
    successMessage,
}: CreateFormProps<TFormInputs>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TFormInputs>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation();

    const onSubmit: SubmitHandler<TFormInputs> = async (data) => {
        await mutation.mutateAsync(data);
        reset();
        alert(successMessage);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 space-y-4 max-w-xl m-auto bg-white shadow-md"
        >
            <h1 className="text-xl font-bold">Create Post</h1>
            {renderForm({ register, errors })}
            <Button type="submit">Submit</Button>
            {mutation.isLoading && (
                <div className="pt-10">
                    <FadeLoader />
                </div>
            )}
            {mutation.isError && <p>Error submitting the form</p>}
        </form>
    );
};

export default CreateForm;
