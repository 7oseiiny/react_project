import React from 'react'

export default function Product() {
    return (
        <>
            <div className="p-3  d-flex ">
                <img src="https://blog.rrc.co.uk/wp-content/uploads/2022/03/shutterstock_274566236.jpg" style={{ width: "200px" }} />
                <div className="product-details px-2 ">
                    <p style={{ fontSize: "1.2rem", fontWeight: "500" }} className="m-1  cart-max-line" >Crucial mx500 internal ssd 500gb sata 2.5 inch 7mm - ct500mx500ssd1</p>
                    <p className="m-1" style={{ fontWeight: "700", margin: "0" }}>900 $</p>
                    <p className="m-1" style={{ fontWeight: "500", fontSize: ".7rem", color: "red" }}>Only 1 left in stock - order soon.</p>
                    <div className="d-flex align-items-center ">
                        <p className="m-1" style={{ fontWeight: "500", fontSize: ".8rem" }}>sold by </p>
                        <a href="" style={{ fontWeight: "500", fontSize: ".8rem" }}>ahmed</a>
                    </div>
                    <div className="d-flex align-items-center ">
                        <p className="m-1">quantity </p>
                        <input type="number" min="1" max="5" className="form-control mx-3" style={{ width: "80px", height: "30px" }} />
                        <a className="mx-3" href="#" onClick={() => { }}>delete</a>
                        <a className="mx-3" href="#" onClick={() => { }}>save</a>
                    </div>
                </div>
            </div>
        </>
    )
}
