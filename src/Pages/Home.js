import React from 'react'
import Videolist from '../component/Videolist/Videolist';
import TrendingItems from '../component/navbar/TerdningItems/TrendingItems';
import Getitems from '../component/GetItems/Getitems';
import HotArrival from '../component/HotArrival/HotArrival';
import banner from '../asset/banar.png'
export default function Home() {
  return (


<div style={{width: '100%'}}>
  <img style={{width: '100%'}} src={banner}/>



 <HotArrival/> 
 <Videolist/>
 <Getitems/>
 </div>


  )
}
