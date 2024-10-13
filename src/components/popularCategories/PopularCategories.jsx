import React, { useState } from "react";
import { Link } from "react-router-dom";

function PopularCategories() {
    const [data ,setData]= useState([1,2,3,4,5,6,7,8,9,10,11]);
    const [hide , setHide] = useState(false)
    function handleHide () {
        setHide(!hide);
    }
  return (
    <div className="popular-categories">
      <div className="container">
        <div className="top-categories">
          <h1>Популярные категории</h1>
          <div className="top-right">
            <div className="top-info">
              <img src="/public/assets/svg/women.svg" alt="" />
              <div className="top-text">
                <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
                <Link>Задать вопрос</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-blocks">
            {
                data.slice(0,hide?hide.leanth:8).map((index,item)=>(
                    <>
                        <div key={index} className="popular-block">
            
            <img src="/public/assets/svg/image05.svg" alt="" />
            <div className="popular-content">
                <div className="popular-text">
                    <p>Весы</p>
                    <span>от 29 900 ₽</span>
                </div>
            </div>
          </div>
                    </>
                ))
            }
      
        </div>
        <div className="hide">
            <button onClick={handleHide}>Смотреть все</button>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
