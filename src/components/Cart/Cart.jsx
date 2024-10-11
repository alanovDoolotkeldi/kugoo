import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Cart() {
    const sliderRef = React.useRef(null);

    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="cart">
      <div className="cart-image">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4].map((item) => (
            <>
              <div>
                <img src="/public/assets/svg/mask.svg" alt="" />
              </div>
            </>
          ))}
        </Slider>
        <p>ХИТ</p>
        <div className="cart-image-reklam">
          <span>
            <img src="/public/assets/svg/image02.svg" alt="" />
          </span>
        </div>
      </div>
      <div onClick={handlePrev} className="round-1">
        <MdKeyboardArrowLeft className="img" />
      </div>
      <div onClick={handleNext} className="round-2">
        <MdKeyboardArrowRight className="img" />
      </div>
      <div className="cart-info">
        <div className="cart-content">
          <h3>Kugoo Kirin M4</h3>
          <div className="cart-mileage">
            <div className="cart-mileage-blocks">
              <div className="cart-mileage-block cart-mileage-block-1">
                <img src="/public/assets/svg/mah.svg" alt="" />
                2000 mAh
              </div>
              <div className="cart-mileage-block">
                <img src="/public/assets/svg/power.svg" alt="" />
                1,2 л.с.
              </div>
            </div>
            <div className="cart-mileage-blocks cart-mileage-blocks-2">
              <div className="cart-mileage-block cart-mileage-block-1">
                <img src="/public/assets/svg/drive.svg" alt="" />
                60 км/ч
              </div>
              <div className="cart-mileage-block">
                <img src="/public/assets/svg/clock.svg" alt="" />5 часов
              </div>
            </div>
          </div>
          <div className="cart-price">
            <div className="cart-skids">
              <span>39 900 ₽</span>
              <h5>29 900 ₽</h5>
            </div>
            <div className="cart-basket">
              <div className="round">
                <img src="/public/assets/svg/delete.svg" alt="" />
              </div>
              <div className="round">
                <img src="/public/assets/svg/blueHeart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="cart-button">
            <button>Купить в 1 клик</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
