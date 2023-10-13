import React, { useEffect, useState } from 'react';
import "./userInfo.css";
import { fetchOrder } from "../../../store/Slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';
import { updateQuantity } from '../../../store/Slice/productsSlice';
// import format from 'date-fns/format'

export default function TrackingOrder() {
    var orders = useSelector((state) => { return state.order.data })
    const [isCancelled, setIsCancelled] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);

    const handleCancelOrder = (productId, quantity) => {
        console.log(productId, quantity)
       
        dispatch(updateQuantity(productId, quantity))
            .then(() => {
                console.log("Quantity updated successfully",productId, quantity);
            })
            .catch((error) => {
                console.error("Failed to update quantity:", error);
            });
        setIsCancelled(true);
    };

    return (
        <>
            <div className="container">
                <h3 className='m-5'>Your Orders</h3>
                <div className="order-table shadow">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="order-th shadow">Date</th>
                                <th className="order-th shadow">Order</th>
                                <th className="order-th shadow">Quantity</th>
                                <th className="order-th shadow">Status</th>
                                <th className="order-th shadow">Cancellation</th>
                            </tr>
                        </thead>
                        <tbody >
                            {orders.map((order) => (
                                <tr className="order-tr-light" key={order.id}>
                                    <td className="order-td">{order.createdAt}</td>
                                    <td className="order-td d-flex flex-column">
                                        {order.products.map((product) => (
                                            <img key={product.product._id} src={product.product.img} alt="product" width={110} height={100} />
                                        ))}
                                    </td>

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
                                        <div className='d-flex flex-column'>
                                            {order.products.map((product) => (
                                                <div  key={product.product._id}>
                                                    <button
                                                   
                                                   className="btn btn-success m-2"
                                                   onClick={() => handleCancelOrder(product.product._id, product.quantity)}
                                               >
                                                   {isCancelled ? 'Cancelled' : 'Cancel Order'}
                                               </button>
                                                </div>
                                                
                                            ))}
                                        </div>
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