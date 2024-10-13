import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images1 } from "../../data";
import FixedItem from "../fixedItem/FixedItem";

function Review() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleOpen = (props, id) => {
    setOpen(props);
    setId(id);
  };
  return (
    <div className="review">
      <div className="container">
        <div className="review-top">
          <h1>ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h1>
          <Link>Читать отзывы на Яндекс</Link>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="review-animation">
          <div className="review-blocks">
            {images1.slice(0, 10).map((el) => (
              <>
                <div
                  key={el.id}
                  onClick={() => handleOpen(true, el.id)}
                  className="review-block1 review-block"
                >
                  <img src={el.image} alt="" />
                </div>
              </>
            ))}
          </div>

          <div className="review-blocks review-blocks-2">
            {images1.slice(10, images1.length).map((el) => (
              <>
                <div key={el.id} className="review-block1 review-block">
                  <img
                    onClick={() => handleOpen(true, el.id)}
                    src={el.image}
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {open && <FixedItem handleOpen={handleOpen} id={id} />}
    </div>
  );
}

export default Review;
