import React, { useEffect, useState } from "react";
import { useStore } from "../../context/store";
import "./Home.css";
const Home = () => {
  const { addToCart } = useStore();

  const [users, Setusers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => Setusers(data.data))
      .catch((error) => console.log(error));
  }, []);
  const handleSave = (users) => {
    console.log(users);
    addToCart(users);
  };
  return (
    <div className="card-container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img className="image" src={user.avatar} alt="" />
          <h3 className="name">{user.first_name}</h3>
          <button className="button" onClick={() => handleSave(user)}>
            Save
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
