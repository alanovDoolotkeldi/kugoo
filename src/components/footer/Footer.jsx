import React from "react";
import Subscribe from "../subscribe/Subscribe";
import Contact from "../contact/Contact";
import { Link } from "react-router-dom";
import FootImages from "../footImages/FootImages";
import FooterBottom from "../footerBottom/FooterBottom";

function Footer() {
  return (
    <>
      <div className="footer-top">
        <Subscribe />
      </div>
      <footer>
        <div className="container">
          <div className="catalog-footer">
            <ul>
              <li>
                Каталог товаров 
              </li>
              <li>
                <Link>Электросамокаты</Link>
              </li>
              <li>
                <Link>Электроскутеры</Link>
              </li>
              <li>
                <Link>Электровелосипеды</Link>
              </li>
              <li>
                <Link>Электроскейты</Link>
              </li>
            </ul>
            
            <ul className="catalog-right">
              <li>
                Покупателям
              </li>
              <li>
                <Link>Cервисный центр</Link>
                <Link>Блог</Link>
              </li>
              <li>
                <Link>Доставка и оплата</Link>
                <Link>Сотрудничество</Link>
              </li>
              <li>
                <Link>Рассрочка</Link>
                <Link>Контакты</Link>
              </li>
              <li>
                <Link>Тест-драйв</Link>
                <Link>Акции</Link>
              </li>

            </ul>
          </div>
          <Contact/>


        </div>
      </footer>

      <div className="footer-images">
        <FootImages/>
      </div>

      <div className="footer-bottom">
        <FooterBottom/>
      </div>
    </>
  );
}

export default Footer;
