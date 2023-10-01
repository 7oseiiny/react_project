import React, { useEffect, useState } from 'react'
import './order.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuser } from '../../../store/Slice/userSlice'
import { addOrder } from '../../../store/Slice/orderSlice'
import { useNavigate } from 'react-router'

export default function Order() {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  let cart = useSelector((state) => { return state.cart.data })
  let user = useSelector((state) => { return state.user.data })
  let [payment ,setpayment]=useState()

  useEffect(() => {
    dispatch(fetchuser())
  }, [dispatch])

  let totalPrice = 0
  let totalItem = 0
  let totalshipping = 0
  console.log(cart);
  for (const item of cart) {
    totalPrice += item.quantity * item.product.price.new
    totalItem += item.quantity
    totalshipping += item.product.price.shipping
  }

  function paymentfun(e){setpayment(e)}
  function paynow(){
    if (payment=="paypal") {
      alert("paypal")
    }
    else if (payment=="cod") {
      try{
        dispatch(addOrder());
        navigate("/books"); 

      }catch{
        navigate("/books"); 

      }
    }
  }

  return (
    <>
      <div className='p-2  d-flex justify-content-between align-items-center' style={{ backgroundColor: "rgb(244,244,244)" }} >
        <div><img className='p-2 m-0' src="public\assets\orderimage\amazon-logo-free-png.png" style={{ width: "150px" }} alt="" /></div>
        <div style={{ fontSize: "22px", fontWeight: "400" }}>Checkout ({totalItem} items) </div>
        <div style={{ width: "10%" }}></div>
      </div>
      <div className="row p-3 ">
        <div className="col-lg-9 col-sm-12 col-md-12 p-4 order-left-width" >
          <div className=' d-flex justify-content-between'>
            <div className=""><h5>1 Shipping address </h5></div>
            <div className="">
              <p className='p-0 m-0'>{user.fristName} {user.lastName}</p>
              <p className='p-0 m-0'>{user.address} </p>

            </div>
            <div className="">          <a href="#">change</a></div>
          </div>
          <hr />
          <div>
            <h5>2 Choose a payment method</h5>
            <div className='border border-2 p-2' style={{ borderRadius: "8px" }}>

              <label className='w-100 align-items-center p-2 border border-2 my-2' style={{ borderRadius: "8px" }}>
                <div className='d-flex '>
                  <input type="radio" value="paypal" name="payment" onClick={()=>{paymentfun("paypal")}} />
                  <h6 className='p-0 m-0 mx-2'> Paybal</h6>
                </div>
                <div className='d-flex justify-content-center m-2' style={{borderRadius:"20px",backgroundColor:"rgb(255,209,64)"}}>
                  <img style={{height:"100px"}} src="public\assets\orderimage\PayPal-Logo.png" alt="" />
                </div>
              </label>
              <label className='w-100  align-items-center p-2 border border-2 my-2' style={{ borderRadius: "8px" }}>
                <div className='d-flex '>
                  <input type="radio" value="cod" name="payment" onClick={()=>{paymentfun("cod")}} />
                  <h6 className='p-0 m-0 mx-2'> Cash on Delivery (COD)</h6>
                </div>
                <div>
                  <p className='px-4'> Pay by cash on delivery. Non-refundable COD fees of EGP 12 may apply. Learn more.
                    Pay online for contactless deliveries.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-12 px-4 col-sm-12' >
          <div className=" h-100  border border-2 my-2 p-3  " style={{ borderRadius: "8px", position: "sticky", top: "50px" }}>
            <button onClick={paynow} className='btn btn-warning w-100' style={{ fontSize: "1rem" }} >use this payment method  </button>
            <p style={{ fontSize: ".8rem", textAlign: "center", padding: "5px" }}>Choose a payment method to continue checking out. You'll still have a chance to review and edit your order before it's final.
            </p>
            <hr />
            <h6 className='py-2'>order summary</h6>
            <div className='d-flex justify-content-between'>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>items:</p>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>{totalPrice} EGP</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>Shipping & handling:</p>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>{totalshipping} EGP</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>Total:</p>
              <p style={{ fontSize: ".8rem", padding: "5px" }} className='m-0 p-0'>{totalPrice + totalshipping} EGP</p>
            </div>

            <hr />
            <div className='d-flex justify-content-between'>

              <h5 style={{ color: "rgb(177,39,60)" }} >Order total:</h5>
              <h5 style={{ color: "rgb(177,39,60)" }} >{totalPrice + totalshipping} EGP</h5>
            </div>
            <hr />
              <h1>{payment}</h1>
          </div>
        </div>

      </div>
    </>
  )
}
