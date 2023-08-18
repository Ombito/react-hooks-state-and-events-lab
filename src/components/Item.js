import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("")
  const handleClick = () => {
    // setCart("true") 
    setCart(cart === "" ? "in-cart" : "")
  }
  console.log(cart)
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}>{cart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
