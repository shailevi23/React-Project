import React , { useState, useEffect } from "react";
import MapAndNavUsers from "../MapAndNavigateUsers/MapAndNavUsers"
import "./BuildTableAndSortUsers.css";


const ShowRandomUsers = ({ users, isLoading }) => {
const [sortedUsers, setSortedUsers] = useState([]);
const [sortActivated, setSortActivated] = useState(1);
const Ascending = 1
const Descending = 0

  useEffect(() => {
  }, [sortActivated, sortedUsers, ]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const SortAge = (isAscending) => {
    const sortActivate = sortActivated + 1;
    if(isAscending === 1){
      users.sort(function (userA, userB) {
        return userB.dob.age - userA.dob.age;
      });
    }
    else{
      users.sort(function (userA, userB) {
        return userA.dob.age - userB.dob.age;
      });
    }
    setSortedUsers(users);
    setSortActivated(sortActivate);
  }

  const SortFullName = (isAscending) => {
    const sortActivate = sortActivated + 1;
    if(isAscending === 1){
      users.sort(function (userA, userB) {
        let nameA = (userA.name.first[0] + userA.name.last).toUpperCase();
        let nameB = (userB.name.first[0] + userB.name.last).toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      })
    }
    else{
      users.sort(function (userA, userB) {
        let nameA = (userA.name.first[0] + userA.name.last).toUpperCase();
        let nameB = (userB.name.first[0] + userB.name.last).toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })}
      setSortedUsers(sortActivate);
      setSortActivated(sortActivate);
  }

  const SortEmail = (isAscending) => {
    const sortActivate = sortActivated + 1;
    if(isAscending === 1){
        users.sort(function (userA, userB) {
          let nameA = (userA.email).toUpperCase();
          let nameB = (userB.email).toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        })
      }
      else{
        users.sort(function (userA, userB) {
          let nameA = (userA.email).toUpperCase();
          let nameB = (userB.email).toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      }
        setSortedUsers(sortActivate);
        setSortActivated(sortActivate);
    }

  return (
    <div className="main-div">
        <div className="table-head">

            <div className="img-head-div">Image</div>

            <div className="fullname-head-div">Full Name
              <button onClick={() => {SortFullName(Descending)}}>
                <div className="arrow down"></div>
              </button>
              <button className="button" onClick={()=>{SortFullName(Ascending)}}>
                <div className="arrow up"></div>
              </button>
            </div>

            <div className="email-head-div">Email
              <button onClick={() => {SortEmail(Descending)}}>
                <div className="arrow down"></div>
              </button>
              <button onClick={()=>{SortEmail(Ascending)}}>
                <div className="arrow up"></div>
              </button>
            </div>

            <div className="age-and-gender-head-div">Gender</div>

            <div className="age-and-gender-head-div">Age
              <button onClick={()=>{SortAge(Descending)}}>
                <div className="arrow down"></div>
              </button>
              <button onClick={()=>{SortAge(Ascending)}}>
                <div className="arrow up"></div>
              </button>
            </div>

        </div>
        <MapAndNavUsers users={users} isLoading={isLoading}/>
    </div>
  );
};

export default ShowRandomUsers;
