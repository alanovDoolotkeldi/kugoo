import React from "react";

function Contact() {
  return (
    <div className="main-block">
      <div className="block-top">
        <h1>Контакты</h1>
        <p>Заказать звонок</p>
      </div>
      <div className="blocks">
        <div className="block">
          <p>Call-центр</p>
          <h1>+7 (800) 505-54-61</h1>
          <p>Пн-Вс 10:00 - 20:00</p>
        </div>

        <div className="block">
          <p>Call-центр</p>
          <h1>+7 (800) 505-54-61</h1>
          <p>Пн-Вс 10:00 - 20:00</p>
        </div>
      </div>

      <div className="block-bottom">
        <div className="block block-1">
          <h1>Магазин в Москве ул. Ткацкая, 5 стр. 16</h1>
          <p>+7 (499) 406 15 87</p>
        </div>
        <div className="block block-2">
          <h1>Магазин в Москве ул. Ткацкая, 5 стр. 16</h1>
          <p>+7 (499) 406 15 87</p>
        </div>
        <div className="block block-3">
          <h1>Магазин в Краснодаре ул. Восточно-Кругликовская, 86</h1>
          <p>+7 (499) 406 15 87</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
