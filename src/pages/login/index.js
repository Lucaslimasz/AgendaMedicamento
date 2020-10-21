import React from "react";

import { Container, Information, Signin, Form } from "./styles";

import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Container>
        <Information>
          <h1>Seja bem vindo!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button>Cadastre-se</button>
        </Information>
        <Signin>
          <h1>Faça seu Login!</h1>
          <Form>
            <input placeholder="Digite seu email" type="email" />
            <input placeholder="Digite sua senha" type="password" />
            <button>
              <Link to="/manager">Logar</Link>
            </button>
          </Form>
        </Signin>
      </Container>
    </>
  );
}

export default Login;
