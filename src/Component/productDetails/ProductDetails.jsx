import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Rate from './../rate/rate';
import { map } from 'jquery';
import { MdOutlineFavoriteBorder, MdOutlinePlace } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../../store/Slice/productsSlice';

export default function ProductDetails() {
    let info = ["Brand Name : nutricook ", "Capacity:6Liters", "Material:Plastic"]

    const location = useLocation();
    let dispatch = useDispatch()

    useEffect(() => { dispatch(fetchProductById(location.state.productId)) }, [dispatch])
    let product = useSelector((state) => { return state.products.data })

    console.log(product);
    return (
        <>
            <div className='row justify-content-center '>
                <div className="col-lg-5 col-md-5 col-sm-6 p-5  d-flex justify-content-center">
                    <img style={{ height: "fit-content", width: "100%" }} src="https://m.media-amazon.com/images/I/51uRo8IkLRL._AC_.jpg" alt="" /></div>
                <div className="col-lg-4  col-md-4 col-sm-6 p-4  " >
                    <h4>Honor watch magic 2 46mm - flax brown</h4>
                    <NavLink to="/" style={{ textDecoration: "none", color: "rgb(0,113,165)" }}><p>catigory : books</p></NavLink>
                    <div className='d-flex  align-items-end justify-content-between' >
                        <p style={{ fontSize: "1.4rem" }} className='p-0 px-2 m-0'>5.5</p>
                        <div style={{ fontSize: "1.22rem", color: "rgb(237,139,31)" }}> <Rate /></div>
                        <a href='#' style={{ textDecoration: "none", color: "rgb(0,113,165)" }}>92 rating</a>
                    </div>
                    <hr />
                    <div className='p-2 px-4 ' style={{ width: "fit-content", borderRadius: "5px", backgroundColor: "rgb(204,12,57)" }}>
                        <p className='p-0 m-0' style={{ color: "white" }}>discount</p>
                    </div>
                    <div className='d-flex py-3'>
                        <p className='p-0 m-0' style={{ color: "rgb(204,12,57)", fontSize: "25px" }}>-17%</p>
                        <p className=' m-0' style={{ paddingLeft: "20px " }} >EGP</p>
                        <p className='p-0 m-0' style={{ fontSize: "30px" }}>4.999</p>
                        <p className=' m-0'  >00</p>
                    </div>
                    <div className='d-flex' style={{ color: "gray", fontSize: ".9rem", fontWeight: "600" }}>
                        <p className='m-0' >Was:</p>
                        <p className='m-0' >2522 EGP</p>
                    </div>
                    <p>
                        All prices include VAT.
                        Buy with installments and pay EGP 127.31 for 60 months with select banks.
                    </p>
                    <hr />
                    {
                        info.map((item) => {
                            const [key, value] = item.split(":")
                            return <>
                                <div className='d-flex'>
                                    <p style={{ fontWeight: "600" }} className='m-1'>{key} :</p>
                                    <p className='m-1'>{value}</p>
                                </div>
                            </>


                        })
                    }
                    <hr />
                    <h5>About this item</h5>
                    {
                        info.map((item) => {
                            const [key, value] = item.split(":")

                            return <>
                                <div className='d-flex'>
                                    <p style={{ fontWeight: "600" }} className='m-1'>{key} :</p>
                                    <p className='m-1'>{value}</p>
                                </div>                            </>


                        })
                    }


                </div>
                <div className="col-lg-3 col-md-3 col-sm-8 p-4  position-sticky" style={{ top: "10px" }} >
                    <div className='border border-1 p-2' >
                        <div className='d-flex py-2'>
                            <p className=' m-0 p-0' style={{ paddingLeft: "20px " }} >EGP</p>
                            <p className='p-0 m-0' style={{ fontSize: "30px" }}>4.999</p>
                            <p className=' m-0'  >00</p>
                        </div>
                        <a href='#' style={{ textDecoration: "none", color: "rgb(0,113,165)" }}>92 rating</a>
                        <p style={{ fontWeight: "550", fontSize: ".9rem" }}> <a href="#" style={{ textDecoration: "none", color: "rgb(0,113,165)" }}>FREE delivery</a> Tomorrow, 4 October</p>
                        <div style={{ fontSize: ".9rem" }}>
                            <MdOutlinePlace></MdOutlinePlace>
                            <a href='#' style={{ textDecoration: "none", color: "rgb(0,113,165)" }}  >   Deliver to ahmed - Desouk ‌</a>
                        </div>
                        <p className='p-0 m-0  my-2' style={{ color: "green", fontWeight: "600" }}>300 in stock</p>
                        <div className="d-flex align-items-center  my-2">
                            <p className="m-1">Qty :</p>
                            <input type="number" min="1" className="form-control mx-3" style={{ width: "80px", height: "30px" }} />
                        </div>
                        <div className='d-flex flex-column p-2 '>
                            <button className='btn my-1' style={{ borderRadius: "50px", backgroundColor: "rgb(255,216,20)" }}>add to cart</button>
                            <div className='d-flex flex-row justify-content-between'>
                                <button className='btn w-100 my-1' style={{ borderRadius: "50px", backgroundColor: "rgb(255,164,28)" }} >buy now</button>

                                <div className='p-2'> {true ? <MdOutlineFavoriteBorder style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> : <MdFavorite></MdFavorite>}</div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* review */}


            </div>
        </>
    )
}
