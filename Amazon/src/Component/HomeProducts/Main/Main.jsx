import React from 'react'
import Body from './Body/Body'
import LiftSide from './../../TodayDeals/todayDealsLiftSide/liftSide';

export default function Main() {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <LiftSide/>
    <Body/>
        </div>
    </div>
  )
}
