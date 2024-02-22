import React from 'react';
import './Resident.css';

const Resident = ({ resident }) => {
  return (
    <li className="resident">
      <p>Name: {resident.name}</p>
      <p>Height: {resident.height}</p>
      <p>Mass: {resident.mass}</p>
      <p>Gender: {resident.gender}</p>
    </li>
  );
};

export default Resident;
