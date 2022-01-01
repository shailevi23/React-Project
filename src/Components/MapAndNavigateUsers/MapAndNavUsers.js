import React from "react";
import { useNavigate } from 'react-router-dom';
import "./MapAndNavUsers.css";

const Helper = ({ users, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const UserDetailsPage=(user)=>{
    navigate('/React-Project-Moveo/user/:' + user.login.username ,{state:{location: user.location ,img: user.picture.large, fname: user.name.first[0] + ". " + user.name.last, email: user.email, gender:user.gender, age: user.dob.age}});
      }

  return (
        <div>
          {users.map((user) => {
            return (
              <div className="tableBodyInnerDiv" hover="true" key={user.login.username} onClick={()=>{UserDetailsPage(user)}}>
                <div className="img-div" key={user.picture.large}> <img className="body-image-div" src={user.picture.large} alt="Avatar" style={{ width: "120%", borderRadius: "100%" }} /></div>
                <div className="fullname-div" key={user.name.first + user.name.last + user.login.username}> {user.name.first[0] + ". " + user.name.last}</div>
                <div className="email-div" key={user.email}> <a href={"mailto:" + user.email} style={{ color: "aqua" }} > {user.email} </a></div>
                <div className="age-and-gender-div" key={user.gender + user.login.username}> {user.gender}</div>
                <div className="age-and-gender-div" key={user.age + user.login.username}> {user.dob.age}</div>
              </div>
            );
          })}
        </div>
  );
};

export default Helper;