import React, { useState } from 'react';
import "./userInfo.css";
export default function TrackingOrder() {
 ;
  
  return (
    <>
    
   <div className="conteriner">
<h3 className='m-5'>Your Orders</h3>

<div className="order-table shadow">
  <table className="table">
    <thead>
      <th className="order-th shadow">order</th>
      <th className="order-th shadow">date</th>
      <th className="order-th shadow">items</th>
      <th className="order-th shadow">Ship to</th>
      <th className="order-th shadow">Status</th>
      <th className="order-th shadow">Total</th>
      <th className="order-th shadow">Actions</th>
    </thead>
    <tbody>
     
        <tr className="order-tr-light">
          <td className="order-td"></td>
          <td className="order-td"></td>
          <td className="order-td"></td>
          <td className="order-td"></td>
          <td className="order-td">
            <span >
            </span>
          </td>
          <td className="order-td">
         
          </td>
          <td className="order-td text-start">
            <button  className="btn btn-dark">show details</button>
            <button className="btn btn-danger mx-3 my-2 my-md-0">Delete</button>
         
          </td>
        </tr>
      
    </tbody>
  </table>
</div>


   </div>

    </>
  )
}
