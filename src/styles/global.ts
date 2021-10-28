import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #46295A;
        color: #46295A;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    h1,h2 {
        color: #fff;
    }
    button {
        cursor: pointer;
    }
`

export default GlobalStyle