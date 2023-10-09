import React, { useEffect } from 'react';
import "./userInfo.css";
import { fetchOrder } from "../../../store/Slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";


export default function TrackingOrder() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrder());

    }, [dispatch]);
    var orders = useSelector((state) => { return state.order.data })
    console.log(orders);
    return (
        <>
            <div className="container">
                <h3 className='m-5'>Your Orders</h3>
                <div className="order-table shadow">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="order-th shadow">Order</th>
                                <th className="order-th shadow">Date</th>
                                <th className="order-th shadow">Product</th>
                                <th className="order-th shadow">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="order-tr-light" >
                                    <td className="order-td"><img  src={order.products[0].product.img} /></td>
                                    <td className="order-td">{order.createdAt}</td>
                                    {/* <td className="order-td">{order.products.product.quantity}</td> */}
                                    <td className="order-td">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}