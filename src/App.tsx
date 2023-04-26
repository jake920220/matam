import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <h1>Hello world</h1>
        </ThemeProvider>
    );
};

export default App;
