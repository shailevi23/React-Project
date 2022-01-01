import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className='pagination' style={{display: "flex"}}>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <button style={{fontSize: "larger"}} onClick={() => paginate(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
  );
};

export default Pagination;