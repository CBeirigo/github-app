import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        outline: none;
    }

    button {
        color: white;
        font-weight: bold;
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
    }
`;