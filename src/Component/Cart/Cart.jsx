import React from "react";
import Product from "./product";

export default function Cart() {
  return (
    <>
      <div className=" d-flex row w-auto p-3 cart  container-fluid " style={{ backgroundColor: "rgb(234,237,237)" }}>
        <div className="p-2 col-sm-12 col-lg-9">
          <div className="cart-left-side p-3   " style={{ backgroundColor: "white" }}>
            <h2>Shopping Cart</h2>
            <hr />
              <Product/>
              <Product/>
              <Product/>
          </div>
        </div>
        <div className="p-2 col-sm-12 col-lg-3">
          <div className="cart-right-side p-3  " style={{ backgroundColor: "white" }}>
            <h5 className="p-2">Items : 5</h5>
            <h5 className="p-2">Total Price : 5 $</h5>
            <button className=" p-2 btn btn-warning w-100" > Proceed to Buy</button>
          </div>

        </div>
      </div>

    </>
  );
}
