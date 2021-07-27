import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

import "./styles.css";

export default function Reservas() {
  const dispatch = useDispatch();
  const reserve = useSelector((state) => state.reserve);
  

  function handleRemove(id) {
    dispatch({
      type: 'REMOVE_RESERVE',
      id,
    })

  }
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
        <button onClick={() => handleRemove(trip.id)} type="button">
          <MdDelete size={20} color="#191919" />
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
