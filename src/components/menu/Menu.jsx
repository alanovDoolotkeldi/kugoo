import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu-wrapper'>
        <div className="container">
            
        <div className="menu-container">
            <ul>
                <li>
                    <Link>О магазине</Link>
                </li>
                <li>
                    <Link>Доставка и оплата</Link>
                    <span>Доступна рассрочка</span>

                </li>
                <li>
                    <Link>Тест-драйв</Link>
                </li>
                <li>
                    <Link>Блог</Link>
                </li>
                <li>
                    <Link>Контакты</Link>
                </li>
                <li>
                    <Link>Акции</Link>
                    <span className='persent'>
                        <img src="/public/assets/svg/persent.svg" alt="" />
                    </span>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Menu
