import React from "react";
import { useStore } from "../../context/store";
const Users = () => {
  const { cart, removeOne } = useStore();
  console.log(cart);
  const handleRemove = (item) => {
    removeOne(item);
  };
  return (
    <div className="card-container">
      {cart.map((item) => (
        <div className="card">
          <img className="image" src={item.avatar} alt="" />
          <h3 className="name">{item.first_name}</h3>
          <button className="button2" onClick={() => handleRemove(item)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
