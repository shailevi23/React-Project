import React from 'react';
import { useState, useEffect} from "react";
import BuildTableAndSortUsers from '../../Components/UsersTable/BuildTableAndSortUsers';
import Pagination from '../../Components/Pagination/Pagination';
import './HomePage.css';

const HomePage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userPerPage] = useState(10);
    const [totalUsers] = useState(50);
    const paginate = pageNumber => setPageNumber(pageNumber);

    useEffect(() => {
      fetchUsers(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, ]);
  
    async function fetchUsers() {
      try {
          setIsLoading(true);
          await fetch("https://randomuser.me/api/?page=" + pageNumber + "&results= " + userPerPage + "&seed=" + pageNumber)
          .then(results => {
              return results.json();
          })
          .then(data => {
              setIsLoading(false);
              setUsers(data.results);
          });
      }
      catch(error) {
          setIsLoading(false);
          setUsers(error);
      }
    }

  return (
    <div className="home-page">
      <header className="home-page-header">
          <h1>All Users</h1>
        <BuildTableAndSortUsers users={users} isLoading={isLoading} />
        <Pagination 
            usersPerPage={userPerPage}
            totalUsers={totalUsers}
            paginate={paginate}
        />
      </header>
    </div>
  );
}

export default HomePage;