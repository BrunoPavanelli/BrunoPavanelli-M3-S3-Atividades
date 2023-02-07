import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: #222;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`