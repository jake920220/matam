import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Calculator from "./Calculator";
import Scanner from "./Scanner";
import ErrorPage from "./Error";

const route = (): JSX.Element => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
        },
        {
            path: "calculator",
            element: <Calculator />,
        },
        {
            path: "scanner",
            element: <Scanner />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default route;
