import React, { useEffect } from 'react';
import "./userInfo.css";
import { fetchOrder } from "../../../store/Slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';
export default function TrackingOrder() {
    var orders = useSelector((state) => { return state.order.data })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);

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
                                <th className="order-th shadow">َQuantity</th>
                                <th className="order-th shadow">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="order-tr-light" key={order.id}>
                                    <td className="order-td"><img src={order.products[0].product.img} alt="product" width={110} height={100} /></td>
                                    <td className="order-td">{order.createdAt}</td>
                                    <td className="order-td">  <h3> <Badge bg="dark" text="white">
                                        {order.products[0].quantity}
                                    </Badge></h3></td>
                                    <td className="order-td">  <h3> <Badge bg="warning" text="dark">
                                        {order.status}
                                    </Badge></h3></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}