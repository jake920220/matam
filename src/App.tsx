import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import route from "./routes";

const App = (): JSX.Element => {
    return <ThemeProvider theme={theme}>{route()}</ThemeProvider>;
};

export default App;
