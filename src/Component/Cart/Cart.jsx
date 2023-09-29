import React, { useEffect, useState } from "react";
import Product from "./product";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCart } from "../../../store/Slice/cartSlice";
import { fetchCart } from '../../../store/Slice/cartSlice';

export default function Cart() {
  const dispatch = useDispatch()

  var items = useSelector((state) => { return state.cart.data })
    let [totalItem, settotalItem] = useState(0);
    let [totalPrice, settotalPrice] = useState(0);

  for (const item of items) {
     totalPrice+=item.quantity*item.product.price.new
     totalItem+=item.quantity
  }

  function updatePrice (){
    for (const item of items) {
      settotalPrice( totalPrice+=item.quantity*item.product.price.new)
    }
  }

console.log(11);
  useEffect(() => {

    dispatch(fetchCart("650f39d8933f94900f5e75e6"))
  }, [dispatch ,totalItem])

  return (
    <>
      <div className=" d-flex row w-auto p-3 cart  container-fluid " style={{ backgroundColor: "rgb(234,237,237)" }}>
        <div className="p-2 col-sm-12 col-lg-9">
          <div className="cart-left-side p-3   " style={{ backgroundColor: "white" }}>
            <h2>Shopping Cart</h2>
            <hr />
            {
              items.map((item) => {
                // eslint-disable-next-line react/jsx-key
                return <Product item={item}/>

              })
            }
          </div>
        </div>
        <div className="p-2 col-sm-12 col-lg-3">
          <div className="cart-right-side p-3  " style={{ backgroundColor: "white" }}>
            <h5 className="p-2">Items : {totalItem}</h5>
            <h5 className="p-2">Total Price : {totalPrice} $</h5>
            <button className=" p-2 btn btn-warning w-100" > Proceed to Buy</button>
          </div>

        </div>

      </div>

    </>
  );
}
