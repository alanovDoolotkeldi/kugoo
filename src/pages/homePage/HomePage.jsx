import React from 'react'
import Reklam from '../../components/reklam/Reklam'
import Garant from '../../components/garant/Garant'
import Filter from '../../components/filter/Filter'
import Carts from '../../components/cards/Carts'
import Model from '../../components/model/Model'
import Dolivery from '../../components/dolivery/Dolivery'
import PopularCategories from '../../components/popularCategories/PopularCategories'
import Dealer from '../../components/dealer/Dealer'
import WeOffer from '../../components/weOffer/WeOffer'
import Video from '../../components/video/Video'
import Review from '../../components/review/Review'
import VideoReviews from '../../components/videoReviews/VideoReviews'
import NewBlock from '../../components/newBlock/NewBlock'
import Accordion from '../../components/accordion/Accordion'

function HomePage() {
  return (
    <div>
       <Reklam/>
       <Garant/>
       <Filter/>
       <Carts/>
       <Model/>
       <Dolivery/>
       <PopularCategories/>
       <Dealer/>
       <WeOffer/>
       <Video/>
       <Review/>
       <VideoReviews/>
       <NewBlock/>
       <Accordion/>
       <div style={{height:"100px"}}></div>
      
    </div>
  )
}

export default HomePage
