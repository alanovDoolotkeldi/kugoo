import React from "react";
import { Link } from "react-router-dom";

function Model() {
  return (
    <div className="model">
      <div className="container">
        <div className="model-blocks">
          <div className="model-block">
            <div className="model-block-info">
              <h1>ПОДБОР МОДЕЛИ ЭЛЕКТРОСАМАКАТА</h1>
              <p>Пройдите тест и выберите электросамокат по своим критериям</p>
              <span>
                <Link>Подобрать модель</Link>
                <img src="/public/assets/svg/Arrow4.svg" alt="" />
              </span>
            </div>

            <div className="model-image">
              <div className="model-image-info">
                <img className="img-item" src="/public/assets/svg/image04.svg" alt="" />
                <img src="/public/assets/svg/Ellipse.svg" alt="" className="image-div" />
              </div>
            </div>
          </div>
          <div className="model-block">
            <div className="model-block-info">
              <h1>СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
              </h1>
              <p>Крупнейший сервисный центр в России для продуктов Kugoo</p>
              <span>
                <Link>Подобрать модель</Link>
                <img src="/public/assets/svg/Arrow4.svg" alt="" />
              </span>
            </div>

            <div className="model-image">
              <div className="model-image-info">
                <img className="img-item" src="/public/assets/svg/milfa.svg" alt="" />
                <img src="/public/assets/svg/Ellipse.svg" alt="" className="image-div" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
