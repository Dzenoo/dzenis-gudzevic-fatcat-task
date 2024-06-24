import React from 'react';
import { useMutation } from 'react-query';
import CreateForm from './CreateForm';
import { z } from 'zod';

const validationSchema = z.object({
    title: z
        .string()
        .min(1, 'Title must be defined')
        .max(50, 'Title must not exceed 50 characters'),
    body: z
        .string()
        .min(1, 'Body must be defined')
        .max(200, 'Body must not exceed 200 characters'),
});

type FormInputs = {
    title: string;
    body: string;
};

const useCreatePost = () => {
    return useMutation((newPost: FormInputs) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then((res) => res.json());
    });
};

const FormPage = () => {
    return (
        <CreateForm<FormInputs>
            useMutation={useCreatePost}
            validationSchema={validationSchema}
            successMessage="Successfully created post"
            renderForm={({ register, errors }) => (
                <>
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-black"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            {...register('title')}
                            className={`p-5 mt-1 block w-full shadow-sm sm:text-sm border border-gray10 rounded-md ${
                                errors.title ? 'border-red' : ''
                            }`}
                        />
                        {errors.title && (
                            <p className="text-red text-sm">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="body"
                            className="block text-sm font-medium text-black"
                        >
                            Body
                        </label>
                        <textarea
                            id="body"
                            {...register('body')}
                            className={`p-5 mt-1 block w-full shadow-sm sm:text-sm border border-gray10 rounded-md ${
                                errors.body ? 'border-red' : ''
                            }`}
                        />
                        {errors.body && (
                            <p className="text-red text-sm">
                                {errors.body.message}
                            </p>
                        )}
                    </div>
                </>
            )}
        />
    );
};

export default FormPage;
