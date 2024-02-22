import React, { useState, useEffect } from 'react';
import Resident from '../Resident/Resident';
import './PlanetCard.css';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map((residentUrl) =>
        fetch(residentUrl).then((res) => res.json())
      );
      const residentsData = await Promise.all(promises);
      setResidents(residentsData);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <h3>Residents:</h3>
      <ul>
        {residents.map((resident) => (
          <Resident key={resident.name} resident={resident} />
        ))}
      </ul>
    </div>
  );
};

export default PlanetCard;
