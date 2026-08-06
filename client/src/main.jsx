import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from "./routes";
import Root from "./routes/root";
import ErrorPage from './routes/errorPage';

// The landing route (Index) stays in the initial bundle; the other routes are
// code-split so the homepage doesn't download their JS up front.
const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "/project/:id",
                lazy: async () => {
                    const { default: Component } = await import('./routes/projectDetail')
                    return { Component, loader: Component.loader }
                }
            },
            {
                path: "/about/:colorIdentifier",
                lazy: async () => {
                    const { default: Component } = await import('./routes/about')
                    return { Component }
                }
            },
            {
                path: "/contact/:colorIdentifier",
                lazy: async () => {
                    const { default: Component } = await import('./routes/contact')
                    return { Component }
                }
            },
            // Themed like the rest of the site when reached from a page, but
            // also reachable bare — a policy has to work as a plain URL.
            {
                path: "/privacy/:colorIdentifier?",
                lazy: async () => {
                    const { default: Component } = await import('./routes/privacy')
                    return { Component }
                }
            },
        ]
    }
], {
    basename: "/hansmaas"
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
