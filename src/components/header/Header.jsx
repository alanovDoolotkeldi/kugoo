import React from 'react'
import { Link } from 'react-router-dom'
import Catalog from '../catalog/Catalog'
import Search from '../search/Search'
import Menu from '../menu/Menu'

function Header() {
  return (
    <>
    <div className='header-top'>
      <div className="container">
        <div className="header-left">
          <Link>Сервис</Link>
          <Link>Сотрудничество</Link>
          <Link>Заказать звонок</Link>
          <div className="header-left-icons">
            <Link><img src="/public/assets/svg/phone.svg" alt="" /></Link>
            <Link><img src="/public/assets/svg/whatsapp.svg" alt="" /></Link>
            <Link><img src="/public/assets/svg/telegram.svg" alt="" /></Link>

          </div>
        </div>
        <div className="header-right">
        +7 (800) 505-54-61
        <img src="/public/assets/svg/pluse.svg" alt="" />
        </div>
      </div>

    </div>
    <header>
      <div className="container">
      <Link to="/" className="logo">
        <img src="/public/assets/svg/logo.svg" alt="" />
      </Link>
      <Catalog/>
      <Search/>
      <div className="header-basket">
        <Link>
        <img src="/public/assets/svg/taraza.svg" alt="" />
        </Link>
        <Link to="/heart">
        <img src="/public/assets/svg/heart.svg" alt="" />
        </Link>
        <span>
          <Link to="/basket">
          <img src="/public/assets/svg/basket.svg" alt="" />
          </Link>
          Корзина
        </span>

        
      </div>


      </div>
    </header>
    <div className='header-menu'>

   <Menu/>
    </div>
    </>
  )
}

export default Header
