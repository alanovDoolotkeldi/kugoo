import React from 'react'
import { Link } from 'react-router-dom'

function Garant() {
  return (
    <div className='garant'>
     <div className="container">
        <div className="blocks">
            <div style={{}} className="block">
                <h1>ГАРАНТИЯ 1 ГОД</h1>
                <p>на весь ассортимент</p>
            </div>
            <div className="block block-1">
                <h1>РАССРОЧКА</h1>
                <p>от 6 месяцев</p>
            </div>
            <div className="block block-2">
                <h1>ПОДАРКИ</h1>
                <p>и бонусам к покупкам </p>
            </div>
            <a target='_blank' href="https://ya.ru/" className="yandex">
                <div className="yandex-info">
                    <div className="yandex-image">
                    <img src="/public/assets/svg/yandex.svg" alt="" />

                    </div>
                    <div className="yandex-text">
                        <small>Яндекс отзывы</small>
                        <span>
                            <img src="/public/assets/svg/star.svg" alt="" />
                            4,9
                        </span>

                    </div>
                </div>

            </a>

        </div>
     </div>
    </div>
  )
}

export default Garant
