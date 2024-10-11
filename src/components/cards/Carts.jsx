import React, { useState } from "react";
import Cart from "../Cart/Cart";

function Carts() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8,9,10]);
  const [hide, setHide] = useState(false)
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div className="cart-content">
      <div className="container">
        <div className="carts">
          {data.slice(0,hide?hide.leanth:8).map((item) => (
            <>
              <Cart />
            </>
          ))}
        </div>
        <div className="hide">
            <button onClick={handleHide}>Смотреть все</button>
        </div>
      </div>
    </div>
  );
}

export default Carts;
