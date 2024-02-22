// Pagination.js
import React from 'react';
import './pagination.css';

const Pagination = ({ onNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={onNextPage} className="pagination-button">
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
