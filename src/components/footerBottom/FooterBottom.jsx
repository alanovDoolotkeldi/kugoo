import React from "react";

function FooterBottom() {
  return (
    <div className="bottom-main">
      <div className="container">
        <div className="bottom-text">
          <p>Реквизиты</p>
          <p>Политика конфеденциальности</p>
        </div>

        <div className="bottom-img">
          <div className="img-blocks">
            <div className="img-block">
              <img src="/public/assets/svg/Gpay.svg" alt="" />
            </div>
            <div className="img-block">
              <img src="/public/assets/svg/Apay.svg" alt="" />
            </div>
            <div className="img-block">
              <img src="/public/assets/svg/visa.svg" alt="" />
            </div>

            <div className="img-block">
              <img src="/public/assets/svg/masterCard.svg" alt="" />
            </div>

            <div className="img-block">
              <img src="/public/assets/svg/masterCard.svg" alt="" />
            </div>

            <div className="img-block">
              <img src="/public/assets/svg/webm.svg" alt="" />
            </div>

            <div className="img-block">
              <img src="/public/assets/svg/qiwi.svg" alt="" />
            </div>
          </div>
          <div className="online-text">
            <h2>Online чат:</h2>
            <div className="right-images"> 
              <img src="/public/assets/svg/phone.svg" alt="" />
              <img src="/public/assets/svg/whatsapp.svg" alt="" />
              <img src="/public/assets/svg/telegram.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
