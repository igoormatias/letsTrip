import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdFlightTakeoff } from "react-icons/md";

import { handleAddReserve } from "../../store/modules/reserve/action";

import api from "../../services/api";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
    }
    loadApi();
  }, []);

  function handleAdd(trip) {
    dispatch(handleAddReserve(trip));
  }
  return (
    <div className="home__container">
      {trips.map((trip) => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>
          <button onClick={() => handleAdd(trip)} type="button">
            <div>
              <MdFlightTakeoff size={16} color="#FFFF" />
            </div>

            <span>Solicitar Reserva</span>
          </button>
        </li>
      ))}
    </div>
  );
}

export default Home;
