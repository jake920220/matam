import React from "react";
import { ThemeProvider } from "styled-components";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import theme from "./styles/theme";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Scanner from "./pages/Scanner";

const App = (): JSX.Element => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Home />}>
                <Route path={"/calculator"} element={<Calculator />} />
                <Route path={"/scanner"} element={<Scanner />} />
            </Route>
        )
    );
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
