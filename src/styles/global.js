import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body{
        background: #fff;
        font-family: Roboto, 'sans-serif';
        font-size: 18px;
    }
    button,input{
        outline: 0;   
        font-size: 20px;     
    }
    a{
        text-decoration: none;
    }
`;
