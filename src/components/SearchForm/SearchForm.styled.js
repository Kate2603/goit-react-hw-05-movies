import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 16px 0;
`;

export const Form = styled.form`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
`;

export const FormInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 33px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
    padding: 4px;
::placeholder {
    font: inherit;
    font-size: 16px;
}
`;

export const FormButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 6px;
    padding-left: 7px;
    cursor: pointer;
    border: 1px solid gray;
    outline: none;
    
    color: white;
    background-color: gray;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus {
    opacity: 0.7;
}
`;