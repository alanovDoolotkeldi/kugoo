import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideoReviews() {
  var settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="video-review">
      <div className="video-review-wrapper">
        <div className="video-review-info">
          <div className="video-review-text">
            <div className="video-review-text-left">
              <h1>Видеообзоры</h1>
              <p>
                Узнайте больше о самокатах Kugoo и посмотрите сравнительные
                обзоры разных моделей на нашем YouTube-канале.
              </p>
            </div>
            <Link to="/all-videos">
              Смотреть все видеообзоры{" "}
              <img src="/public/assets/svg/arrow_right2.svg" alt="" />
            </Link>
          </div>
          <div className="video-global-block">
            <div className="video-review-first-block">
              <iframe
                width="540"
                height="303.94"
                style={{ borderRadius: "10px", backgroundColor: "#C4C4C4" }}
                src="https://www.youtube.com/embed/OCUlr8qdcP0?si=sT9rrfuILTOvIM1h"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>Крутой и городской? Обзор Kugoo XS Plus</p>
            </div>
            <div className="video-review-blocks">
              <Slider style={{ width: "730px" }} {...settings}>
                <div className="video-review-block">
                  <iframe
                    width="350"
                    height="197"
                    style={{ borderRadius: "10px", backgroundColor: "#C4C4C4" }}
                    src="https://www.youtube.com/embed/OCUlr8qdcP0?si=sT9rrfuILTOvIM1h"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>Крутой и городской? Обзор Kugoo XS Plus</p>
                </div>
                <div className="video-review-block">
                  <iframe
                    width="350"
                    height="197"
                    style={{ borderRadius: "10px", backgroundColor: "#C4C4C4" }}
                    src="https://www.youtube.com/embed/OCUlr8qdcP0?si=sT9rrfuILTOvIM1h"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>Крутой и городской? Обзор Kugoo XS Plus</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoReviews;
