import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar";

import { Container, Items, Item, Information } from "./styles";

export default function Manager() {
  return (
    <>
      <Navbar />
      <Container>
        <Items>
          <Item>
            <Information>
              <h1>Medicamento</h1>
              <div>
                <p>
                  <b>Inicio do tratamento: </b>12/02/2020
                </p>
                <p>
                  <b>Horário: </b>12:00 / 00:00
                </p>
                <p>
                  <b>Quantidade: </b>100mg
                </p>
              </div>
              <button>Finalizar</button>
            </Information>
          </Item>
          <Item>
            <Information>
              <h1>Medicamento</h1>
              <div>
                <p>
                  <b>Inicio do tratamento: </b>12/02/2020
                </p>
                <p>
                  <b>Horário: </b>12:00 / 00:00
                </p>
                <p>
                  <b>Quantidade: </b>100mg
                </p>
              </div>
              <button>Finalizar</button>
            </Information>
          </Item>
          <Item>
            <Information>
              <h1>Medicamento</h1>
              <div>
                <p>
                  <b>Inicio do tratamento: </b>12/02/2020
                </p>
                <p>
                  <b>Horário: </b>12:00 / 00:00
                </p>
                <p>
                  <b>Quantidade: </b>100mg
                </p>
              </div>
              <button>Finalizar</button>
            </Information>
          </Item>
        </Items>
      </Container>
    </>
  );
}
