import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdFlightTakeoff } from "react-icons/md";

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

  function handleAddReserve(trip) {
    dispatch({
      type: "ADD_RESERVE",
      trip,
    });
  }
  return (
    <div className="home__container">
      {trips.map((trip) => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>
          <button onClick={() => handleAddReserve(trip)} type="button">
            <div>
              <MdFlightTakeoff size={16} color="#FFFF" />
            </div>

            <span>Solicitar Reserva</span>
          </button>
        </li>
      ))}
      <h1>Home</h1>
    </div>
  );
}

export default Home;
