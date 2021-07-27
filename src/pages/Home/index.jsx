import React, { useState, useEffect } from "react";
import { MdFlightTakeoff } from "react-icons/md";

import api from "../../services/api";
import "./styles.css"

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
      console.log(response.data);
    }
    loadApi();
  }, []);
  return (
    <div className="home__container">
      {trips.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
          <span>Status: {item.status ? "Disponível" : "Indisponível"}</span>
          <button type="button">
            <div>
              <MdFlightTakeoff size={16} color="#FFFF"/>
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
