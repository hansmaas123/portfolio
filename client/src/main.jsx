import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from "./routes";
import ProjectDetail from './routes/ProjectDetail';
import About from './routes/about';
import Contact from './routes/contact';
import Root from "./routes/root";


const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "/project/:id",
                element: <ProjectDetail />,
                loader: ProjectDetail.loader
            },
            {
                path: "/about/:colorIdentifier",
                element: <About />,
                loader: About.loader,
            },
            {
                path: "/contact/:colorIdentifier",
                element: <Contact />,
                loader: Contact.loader,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
