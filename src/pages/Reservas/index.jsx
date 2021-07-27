import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdRemoveCircle, MdAddCircle, MdDelete } from "react-icons/md";

import {
  handleRemoveReserve,
  handleUpdateAmount,
} from "../../store/modules/reserve/actions";

import "./styles.css";

export default function Reservas() {
  const dispatch = useDispatch();
  const reserve = useSelector((state) => state.reserve);

  function handleRemove(id) {
    dispatch(handleRemoveReserve(id));
  }

  function incrementAmout(trip) {
    dispatch(handleUpdateAmount(trip.id, trip.amount + 1));
    console.log("remove", trip);
  }
  function decrementAmout(trip) {
    dispatch(handleUpdateAmount(trip.id, trip.amount - 1));
    console.log("trip", trip);
  }

  console.log("reserve amount", reserve.amount);
  return (
    <div>
      <h1 id="title">Você solicitou {reserve.length} reservas</h1>

      {reserve.length > 0 &&
        reserve.map((trip) => (
          <div className="reservas__container" key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <div className="reservas__container_amount">
              <button onClick={() => incrementAmout(trip)}>
                <MdAddCircle size={20} />
              </button>

              <input type="text" readOnly value={trip.amount} />

              <button onClick={() => decrementAmout(trip)}>
                <MdRemoveCircle size={20} />
              </button>
            </div>
            <button onClick={() => handleRemove(trip.id)} type="button">
              <MdDelete size={20} color="#191919" />
            </button>
          </div>
        ))}
      <footer>
        <button type="button">Solicitar Reserva</button>
      </footer>
    </div>
  );
}
