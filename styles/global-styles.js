import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansTTFBold';
        font-weight: normal;
        font-style: normal;
        src: url('../styles/fonts/GmarketSansTTFBold.ttf') format('ttf');
    }

    @font-face {
        font-family: 'GmarketSansTTFLight';
        font-weight: normal;
        font-style: normal;
        src: url('../styles/fonts/GmarketSansTTFLight.ttf') format('ttf');
    }

    @font-face {
        font-family: 'GmarketSansTTFMedium';
        font-weight: normal;
        font-style: normal;
        src: url('../styles/fonts/GmarketSansTTFMedium.ttf') format('ttf');
    }


    html,
    body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: GmarketSansTTFMedium, -apple-system, sans-serif !important;
    }

    .txt-c {
    text-align: center;
    }
    .txt-r {
    text-align: right;
    }
    .txt-l {
    text-align: left;
    }
    p {
    margin: 0;
    }
`;
