import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import route from "./routes";

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme["light"]}>
            <GlobalStyle />
            {route()}
        </ThemeProvider>
    );
};

export default App;
