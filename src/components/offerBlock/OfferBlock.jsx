import React from 'react'

function OfferBlock({we_offer_class}) {

  return (
<div className={`offer-block ${we_offer_class}`}>
     <div className="offer-block-info">
        <img src="/public/assets/svg/image07.svg" alt="" />
        <h5>Отправка заказа день в день</h5>
        <span>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </span>

     </div>
    </div>
  )
}

export default OfferBlock
