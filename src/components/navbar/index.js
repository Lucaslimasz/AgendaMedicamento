import React from "react";

import { Container, Limit } from "./styles";

import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Container>
        <Limit>
          <div>
            Seja bem vindo, <b>Lucas</b>
          </div>
          <ul>
            <li>Inicio</li>
            <li>Cadastrar</li>
            <li><Link to="/">Sair</Link></li>
          </ul>
        </Limit>
      </Container>
    </>
  );
}
