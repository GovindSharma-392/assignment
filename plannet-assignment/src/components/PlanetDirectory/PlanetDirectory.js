import React, { useState, useEffect } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import Pagination from '../Pagination/Pagination';
import './PlanetDirectory.css';

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchPlanets = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPlanets(data.results);
    setNextPage(data.next);
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  };

  return (
    <div className="planets-directory">
      <div className="planets-container">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <Pagination onNextPage={handleNextPage} />
    </div>
  );
};

export default PlanetsDirectory;
