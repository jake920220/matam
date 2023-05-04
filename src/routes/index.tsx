import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Intro from "./Intro";
import Calculator from "./Calculator";
import CalcIntro from "./CalcIntro";
import CalcSimple from "./CalcSimple";
import CalcComplex from "./CalcComplex";
import Scanner from "./Scanner";
import ErrorPage from "./Error";
import Login from "./Login";
import Community from "./Community";
import NoIndicator from "./NoIndicator";

import { ROUTES } from "../constants";

const route = (): JSX.Element => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Intro />,
                },
                {
                    path: ROUTES.CALCULATOR.path,
                    element: <Calculator />,
                    children: [
                        {
                            index: true,
                            element: <CalcIntro />,
                        },
                        {
                            path: ROUTES.CALC_SIMPLE.path,
                            element: <CalcSimple />,
                        },
                        {
                            path: ROUTES.CALC_COMPLEX.path,
                            element: <CalcComplex />,
                        },
                    ],
                },
                {
                    path: ROUTES.SCANNER.path,
                    element: <Scanner />,
                },
                {
                    path: ROUTES.COMMUNITY.path,
                    element: <Community />,
                },
                {
                    path: ROUTES.FOR_NO_INDICATOR.path,
                    element: <NoIndicator />,
                },
            ],
        },
        // {
        //     path: ROUTES.LOGIN,
        //     element: <Login />,
        // },
    ]);

    return <RouterProvider router={router} />;
};

export default route;
