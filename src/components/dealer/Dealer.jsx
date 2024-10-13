import React from "react";
import { Link } from "react-router-dom";

function Dealer() {
  return (
    <div className="dealer">
      <div className="dealer-container">
        <div className="dealer-image">
          <img src="/public/assets/svg/image06.svg" alt="" />
          <div className="dealer-info">
            <div className="dealer-content">
              <div className="dealer-info-text">
                <h5>Тест-драйв в Москве</h5>
                <p>Оцените все преимущества самокатов лично</p>
              </div>
              <button>
                Подробнее{" "}
                <img src="/public/assets/svg/arrow_right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="dealer-texts">
          <h1>KUGOO-RUSSIA - ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h1>
          <p>
            Наша цель предоставить полный ассортимент современной продукции
            Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить
            комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся
            к сервисному обслуживанию.
          </p>
          <div className="dealer-content">
            <div className="dealer-content-texts">
                <h5>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h5>
                <div className="dealer-content-blocks">
                    <div className="dealer-content-block">
                        <img src="/public/assets/svg/kubic.svg" alt="" />
                        <span>цены от завода-изготовителя Jilong ;
                        </span>

                    </div>
                    <div className="dealer-content-block">
                        <img src="/public/assets/svg/kubic.svg" alt="" />
                        <span>бесплатный тест-драйв самокатов;

                        </span>

                    </div>
                    <div className="dealer-content-block">
                        <img src="/public/assets/svg/kubic.svg" alt="" />
                        <span>фирменную гарантию 1 год;


                        </span>

                    </div>
                    <div className="dealer-content-block">
                        <img src="/public/assets/svg/kubic.svg" alt="" />
                        <span>ремонт и обслуживание от 1 дня в собственном сервисном центре;


                        </span>

                    </div>
                    <div className="dealer-content-block">
                        <img src="/public/assets/svg/kubic.svg" alt="" />
                        <span>более 1 000 запчастей и аксессуаров в наличии

                        </span>

                    </div>
                </div>
                <Link>Смотреть сертификат</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dealer;
