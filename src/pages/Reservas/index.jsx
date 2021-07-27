import React from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

import "./styles.css";

export default function Reservas() {
  const reserve = useSelector((state) => state.reserve);
  console.log("reservas", reserve);
  return (
    <div>
      <h1 id="title">Você solicitou {reserve.length} reservas</h1>

      {reserve.length > 0 && (
       reserve.map((trip)=> (
        <div className="reservas__container" key={trip.id}>
        <img
          src={trip.image}
          alt={trip.title}
        />
        <strong>{trip.title}</strong>
        <span>Quantidade: {trip.amount}</span>
        <button type="button">
          <MdDelete sizes={30} color="#191919" />
        </button>
      </div>

       ))
        
      )}
      <footer>
        <button type="button">Solicitar Reserva</button>
      </footer>
    </div>
  );
}
