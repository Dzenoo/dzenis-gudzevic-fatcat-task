import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryContextProvider } from './providers/QueryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <QueryContextProvider>
            <App />
        </QueryContextProvider>
    </React.StrictMode>
);
