import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Information = styled.div`
  width: 40%;
  height: 100%;
  background: #58af9c;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;

  > p {
    width: 50%;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 300;
  }
  > h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  > button {
    padding: 12px 65px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 400;
    width: 250px;

    background: #58af9c;
    border: 3px solid #fff;
    color: #fff;

    cursor: pointer;
    position: relative;
    &:hover {
      background: #fff;
      color: #58af9c;
    }
    &:active {
      top: 2px;
      left: 2px;
    }
    &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
  }
`;

export const Signin = styled.div`
  width: 60%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    padding: 12px 65px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 400;
    width: 250px;
    margin: auto;

    background: #58af9c;
    border: 3px solid #fff;
    color: #fff;

    cursor: pointer;
    position: relative;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      top: 2px;
      left: 2px;
    }
  }

  > h1 {
    color: #58af9c;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 10px;
    padding: 10px 20px;
    width: 400px;
    height: 60px;
    border: none;
    border-radius: 5px;
    background: #ecf0f1;
    color: #798b89;
  }
  a {
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
