import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
export const queryClient = new QueryClient();

export const QueryContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
