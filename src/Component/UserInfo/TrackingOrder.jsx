import React, { useState } from 'react';
import "./userInfo.css";
export default function TrackingOrder() {
    ;

    return (
        <>
            <div className="conteriner">
                <h3 className='m-5'>Your Orders</h3>
                <div className="order-table shadow">
                    <table className="table ">
                        <thead>
                            <th className="order-th shadow">Order</th>
                            <th className="order-th shadow">Date</th>
                            <th className="order-th shadow">Items</th>
                            <th className="order-th shadow">Ship to</th>
                            <th className="order-th shadow">Status</th>
                            <th className="order-th shadow">Total</th>
                        </thead>
                        <tbody>
                            <tr className="order-tr-light">
                                <td className="order-td">aaaaaaaaa</td>
                                <td className="order-td">aaaaaaaaa</td>
                                <td className="order-td">aaaaaaaaa</td>
                                <td className="order-td">aaaaaaaaa</td>
                                <td className="order-td">aaaaaaaaa</td>
                                <td className="order-td">aaaaaaaaa</td>
                    
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
