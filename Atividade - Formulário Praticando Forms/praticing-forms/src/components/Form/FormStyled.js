import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #b4b5c1;
    width: 320px;

    input {
        border:1px solid #606862;
        border-radius: 5px;
        color: #606862;
        background-color: transparent;
        padding: 1rem 0 1rem .7rem;
    }

    button {
        border: none;
        border-radius: 5px;
        padding-block: .4rem;
        background-color: #324191;
        color: #b4b5c1;
        cursor: pointer;
    }

    .password {
        width: 100%;
        justify-content: space-between;
    }

    .password > div {
        flex-direction: column;
    }

    .checkbox{
        width: 100%;
        gap: 1rem;

        input {
            cursor: pointer;    
        }
    }
`;
