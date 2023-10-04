import React from 'react'

export default function FavProduct(props) {

    console.log(props);
    function delet(){}
  return (
    <>
        <div className="p-3  d-flex ">
                <img src={props.product.img} style={{ width: "200px" }} />
                <div className="product-details px-2 ">
                    <p style={{ fontSize: "1.2rem", fontWeight: "500" }} className="m-1  cart-max-line" >{props.product.title_en}</p>
                    <p className="m-1" style={{ fontWeight: "700", margin: "0" }}>{props.product.price.new } $</p>
                    {/* <p className="m-1" style={{ fontWeight: "500", fontSize: ".7rem", color: "red" }}>{props.product.quantity} left in stock </p> */}
                    <div className="d-flex aligns-center ">
                        <p className="m-1" style={{ fontWeight: "500", fontSize: ".8rem" }}>sold by </p>
                        <a href="" style={{ fontWeight: "500", fontSize: ".8rem" }}>ahmed</a>
                    </div>
                    <div className="d-flex aligns-center ">
                        <p className="m-1">quantity </p>
                        <a className="mx-3" href="#" onClick={delet}>delete</a>
                    </div>
                </div>
            </div>
            <hr />
    </>
  )
}
