import React from "react";
import { MdDelete } from "react-icons/md";

import "./styles.css";

export default function Reservas() {
  return (
    <div>
      <h1 id="title">Reserva</h1>

      <div className="reservas__container">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/fernand-noronha.jpg"
          alt="Maceio"
        />
        <strong>Viagem para Maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button">
          <MdDelete sizes={20} color="#191919" />
        </button>
      </div>
      <footer>
          <button type="button">Solicitar Reserva</button>
      </footer>
    </div>
  );
}
