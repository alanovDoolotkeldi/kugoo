import React from 'react'
import Reklam from '../../components/reklam/Reklam'
import Garant from '../../components/garant/Garant'
import Filter from '../../components/filter/Filter'
import Carts from '../../components/cards/Carts'
import Model from '../../components/model/Model'
import Dolivery from '../../components/dolivery/Dolivery'

function HomePage() {
  return (
    <div>
       <Reklam/>
       <Garant/>
       <Filter/>
       <Carts/>
       <Model/>
       <Dolivery/>
       <div style={{height:"100px"}}></div>
      
    </div>
  )
}

export default HomePage
