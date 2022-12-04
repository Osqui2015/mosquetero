import { React, useEffect, useState } from "react";

const Cart = ({ cart, setCart, handleChange, setProof }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
    setProof(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="table_box" key={item.id}>
          <p>{item.title}</p>
          <div>
            <button
              className="btn btn-success mb-4"
              onClick={() => handleChange(item, +1)}
            >
              {" "}
              +{" "}
            </button>

            <button className="btn btn-grey mb-4">{item.amount}</button>

            <button
              className="btn btn-danger mb-4"
              onClick={() => handleChange(item, -1)}
            >
              {" "}
              -{" "}
            </button>
          </div>
          <div>
            <button
              className="btn btn-red mb-4"
              onClick={() => handleRemove(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Cart;