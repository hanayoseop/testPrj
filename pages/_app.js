import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-styles";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    typography: {
        // 여기에도 폰트 추가해야 mui 태그도 폰트가 바뀜
        fontFamily: "GmarketSansTTFMedium",
    },
});

const App = (props) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
