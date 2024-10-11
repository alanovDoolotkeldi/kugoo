import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reklam() {
  const sliderRef = useRef(null);
  const [marginLeft, setMarginLeft] = useState(0); // Начальное значение 20px
  const [number, setNumber] = useState(1)

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Сброс margin-left на 20px при переходе на первый слайд
      if (next === 0) {
        setMarginLeft(20);
        setNumber(5)
      }
      
    },
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
    setMarginLeft((prev) => Math.max(prev - 5, 0));
    if(number>1){

      setNumber(number-1)
    }
     // Уменьшаем margin, но не меньше 0
     
     
  };

  const handleNext = () => {
    const maxMargin = 19; // Максимальное значение смещения
    sliderRef.current.slickNext();
    setMarginLeft((prev) => Math.min(prev + 5, maxMargin)); // Увеличиваем margin до maxMargin
    if(number<5){

      setNumber(number+1)
    }
  };

  return (
    <div className="wrapper">
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((_, index) => (
          <div className="wrapper-content" key={index}>
            <div className="container">
              <div className="wrapper-text">
                <span>Новинка</span>
                <div className="wrapper-catalog">
                  <h1>ЭЛЕКТРОСОМОКАТЫ KUGOO KIRIN ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
                  <p>с бесплатной доставкой по РФ от 1 дня</p>
                  <button>Перейти в каталог</button>
                </div>
              </div>
              <div className="wrapper-center">
                <div className="reklam-test-info">
                  <div className="reklam-test">
                    <img src="/assets/svg/lightning.svg" alt="Lightning" />
                    Тест-драйв и обучение
                  </div>
                  <button>Бесплатно</button>
                  <img className="round-1" src="/assets/svg/round.svg" alt="Round" />
                  <img className="round-2" src="/assets/svg/round.svg" alt="Round" />
                  <img src="/assets/svg/line.svg" alt="Line" className="line" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="wrapper-navigation">
        <div className="left" onClick={handlePrev}>
          <img src="/assets/svg/lest.svg" alt="Left" />
        </div>
        <div className="wrapper-main">
          <p>{number}</p>
          <div className="change">
            <div
              className="change-item"
              style={{ marginLeft: `${marginLeft}px` }}
            ></div>
          </div>
          <p>5</p>
        </div>
        <div className="right" onClick={handleNext}>
          <img src="/assets/svg/right.svg" alt="Right" />
        </div>
      </div>
    </div>
  );
}

export default Reklam;
