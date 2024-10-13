import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NewBlock() {
    const sliderRef = useRef(null);
    function handlePrev  (){
        sliderRef.current.slickNext();
    }
    const [data , setData] = useState([1,2,4,5,6,7,8,9,10,11,12,13,14])
    const settings = {
        slidesToShow: 3.5,
        slidesToScroll: 3.5,
      };
  return (
    <div className="new-block-wrapper">
      <div className="container-new">
        <h1>Новые статьи в блоге</h1>
        <div className="new-block-info">
            <div className="new-blocks">
                <Slider ref={sliderRef} style={{width:"100%",gap:"30px"}} {...settings}>

               
                {
                    data.map((index,el)=>(
                        <>
                <div key={index} className="new-block">
                    <img src="/public/assets/svg/image09.svg" alt="" />
                    <div className="new-block-texts">
                        <h3>Как правильно заряжать электросамокат</h3>
                        <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                        <div className="new-block-date">
                            <span>
                                <img src="/public/assets/svg/image010.svg" alt="" />
                                01.09.2021
                            </span>
                            <span>
                                <img src="/public/assets/svg/image011.svg" alt="" />
                                01.09.2021
                            </span>
                        </div>

                    </div>

                </div>
                        </>
                    ))
                }
                 </Slider>
                 <div onClick={handlePrev} className="button">
                    <img src="/public/assets/svg/arrow_right3.svg" alt="" />

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlock;
