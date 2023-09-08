import React from 'react'
import MainCards from '../todayDealsComponents/MainCard'
import { useSelector } from 'react-redux';

export default function TodayMain() {
    const state= useSelector((state)=>state);
    let products=state.products.products;
    console.log(products);
  return (
    <>
        <aside className="col-xl-10 col-md-9 col-8 container-fluid">
          <div className="row">
          {products.map((item)=>{
            return <MainCards key={item.id} img={item.img} title={item.title} discount={item.discount}/>
          })}
          {products.map((item)=>{
            return <MainCards key={item.id} img={item.img} title={item.title} discount={item.discount}/>
          })}
          </div>
          </aside>
    </>
  )
}
