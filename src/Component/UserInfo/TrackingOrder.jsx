import React, { useEffect } from 'react';
import "./userInfo.css";
import { fetchOrder } from "../../../store/Slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';
import { updateQuantity } from './../../../store/Slice/productsSlice';

export default function TrackingOrder() {
    var orders = useSelector((state) => { return state.order.data })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);

    const handleCancelOrder = (productId, quantity) => {
        console.log(productId, quantity)
        dispatch(updateQuantity(productId, quantity))
            .then(() => {
                console.log("Quantity updated successfully");
            })
            .catch((error) => {
                console.error("Failed to update quantity:", error);
            });
    };

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
                                <th className="order-th shadow">Quantity</th>
                                <th className="order-th shadow">Status</th>
                                <th className="order-th shadow">Cancellation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="order-tr-light" key={order.id}>
                                    <td className="order-td">
                                        {order.products.map((product) => (
                                            <img key={product.product._id} src={product.product.img} alt="product" width={110} height={100} />
                                        ))}
                                    </td>
                                    <td className="order-td">{order.createdAt}</td>
                                    <td className="order-td">
                                        {order.products.map((product) => (
                                            <h3 key={product.product._id}>
                                                <Badge bg="dark" text="white">
                                                    {product.quantity}
                                                </Badge>
                                            </h3>
                                        ))}
                                    </td>
                                    <td className="order-td">
                                        <h3>
                                            <Badge bg="warning" text="dark">
                                                {order.status}
                                            </Badge>
                                        </h3>
                                    </td>
                                    <td className="order-td">
                                        <button className="btn btn-success" onClick={() => handleCancelOrder(order.products[0].product._id, order.products[0].quantity)}>
                                            Cancel Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}