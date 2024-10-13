import React, { useState } from "react";
import OfferBlock from "../offerBlock/OfferBlock";

function WeOffer() {
  const [btn, setBtn] = useState(false);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="we-offer">
      <div className="container">
        <div className="we-offer-texts">
          <h1>
            ПРЕЛДАКАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ
            ПОСТАВОК
          </h1>
          <p>и заботимся об удобстве покупателей</p>
          <div className="we-offer-buttons">
            <button
              onClick={() => setBtn(false)}
              style={{
                backgroundColor: btn ? "#f4f7fb" : "#6F73EE",
                color: btn ? "#5d6c7b" : "white",
              }}
            >
              Интернет-магазин
            </button>
            <button
              onClick={() => setBtn(true)}
              style={{
                backgroundColor: btn ? "#6F73EE" : "#f4f7fb",
                color: btn ? "white" : "#5d6c7b",
              }}
            >
              Сервисный центр
            </button>
          </div>
        </div>
        <div className="we-offer-blocks">
          {btn
            ? item.map((el) => (
                <>
                  <OfferBlock />
                </>
              ))
            : data.map((el) => (
                <>
                  <OfferBlock we_offer_class={"we_offer_class"} />
                </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
