import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: #333;
        color: rgba(239,250,250);
        height: 100vh;
    }
    a {
        color: rgba(239,250,250);
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 2rem;
    }
`;

export default GlobalStyle;
