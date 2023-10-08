import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Rate from './../rate/rate';
import { MdOutlineFavoriteBorder, MdOutlinePlace } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../../store/Slice/productsSlice';
import { fetchuser } from '../../../store/Slice/userSlice';
import { addProductInCart, fetchCart } from '../../../store/Slice/cartSlice';
import axios from 'axios';
import { fetchreviwes } from '../../../store/Slice/reviwes';
import "./productdetails.css"

export default function ProductDetails() {
    let location = useLocation();
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let user = useSelector((state) => { return state.user.data })
    var product = useSelector((state) => { return state.products.data })
    var cart = useSelector((state) => { return state.cart.data })
    var reviws = useSelector((state) => { return state.reviwes.data })


    var [productinfo, setProductinfo] = useState({})
    var [productReviw, setproductReviw] = useState([])
    let [change, setchange] = useState(0);
    let [quantity, setquantity] = useState(1);


    useEffect(() => {
        dispatch(fetchuser())
        dispatch(fetchCart())
        dispatch(fetchProductById(location.state.productId))
        dispatch(fetchreviwes(location.state.productId))
    }, [dispatch, change, quantity])
    console.log("fro  dispacth", reviws)
    function prod(x, y) {
        try {
            if (x && y) { return (product[x][y]) }
            else if (x) { return (product[x]) }
        } catch { }
    }

    function isInCart(bookId) {
        for (const item of cart) {

            if (bookId == item.product._id) {
                return true
            }


        }
    }
    function viewcart() {
        navigate("/cart")
    }
    async function setq(e) {
        if (e.target.value > prod("quantity")) { setquantity(prod("quantity")) }
        else if (e.target.value < 1) { setquantity(1) }
        else { setquantity(e.target.value) }
    }


    async function addtocart(productId) {
        await dispatch(addProductInCart({ "items": [{ "product": productId, "quantity": quantity }] }))
        setchange(productId)
    }


    return (
        <>
            <div className='row justify-content-center '>
                <div className="col-lg-5 col-md-5 col-sm-6 p-5  d-flex justify-content-center">
                    <img style={{ height: "fit-content", width: "100%" }} src={prod("img")} alt="" /></div>
                <div className="col-lg-4  col-md-4 col-sm-6 p-4  " >
                    <h4>{prod("title_en")}</h4>
                    <NavLink to="/" style={{ textDecoration: "none", color: "rgb(0,113,165)" }}><p>catigory : {prod("categoryId", "name_en")}</p></NavLink>
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
                        <p className='p-0 m-0' style={{ color: "rgb(204,12,57)", fontSize: "25px" }}>{prod("price", "discount")}%</p>
                        <p className=' m-0' style={{ paddingLeft: "20px " }} >EGP</p>
                        <p className='p-0 m-0' style={{ fontSize: "30px" }}>{prod("price", "new")}</p>
                        <p className=' m-0'  >00</p>
                    </div>
                    <div className='d-flex' style={{ color: "gray", fontSize: ".9rem", fontWeight: "600" }}>
                        <p className='m-0' >Was:</p>
                        <p className='m-0' > {prod("price", "old")} EGP</p>
                    </div>
                    <p>
                        All prices include VAT.
                        Buy with installments and pay EGP 127.31 for 60 months with select banks.
                    </p>
                    <hr />
                    {
                        prod("info_en") ?
                            prod("info_en")
                                .map((item) => {
                                    const [key, value] = item.split(":")
                                    return <>
                                        <div className='d-flex'>
                                            <p style={{ fontWeight: "600" }} className='m-1'>{key} :</p>
                                            <p className='m-1'>{value}</p>
                                        </div>
                                    </>


                                }) : ""
                    }
                    <hr />
                    <h5>About this item</h5>
                    {
                        prod("aboutItem_en") ?
                            prod("aboutItem_en")
                                .map((item) => {
                                    const [key, value] = item.split(":")
                                    return <>
                                        <div className='d-flex'>
                                            <p style={{ fontWeight: "600" }} className='m-1'>{key} :</p>
                                            <p className='m-1'>{value}</p>
                                        </div>
                                    </>


                                }) : ""
                    }


                </div>
                <div className="col-lg-3 col-md-3 col-sm-8 p-4  position-sticky" style={{ top: "10px" }} >
                    <div className='border border-1 p-2' >
                        <div className='d-flex py-2'>
                            <p className=' m-0 p-0' style={{ paddingLeft: "20px " }} >EGP</p>
                            <p className='p-0 m-0' style={{ fontSize: "30px" }}>{prod("price", "new")}</p>
                            <p className=' m-0'  >00</p>
                        </div>
                        <a href='#' style={{ textDecoration: "none", color: "rgb(0,113,165)" }}>92 rating</a>
                        <p style={{ fontWeight: "550", fontSize: ".9rem" }}> <a href="#" style={{ textDecoration: "none", color: "rgb(0,113,165)" }}>FREE delivery</a> Tomorrow, 4 October</p>
                        <div style={{ fontSize: ".9rem" }}>
                            <MdOutlinePlace></MdOutlinePlace>
                            <a href='#' style={{ textDecoration: "none", color: "rgb(0,113,165)" }}  >   Deliver to {user.fristName} - {user.address} ‌</a>
                        </div>
                        <p className='p-0 m-0  my-2' style={{ color: "green", fontWeight: "600" }}>{prod("quantity")} in stock</p>
                        <div className="d-flex align-items-center  my-2">
                            <p className="m-1">Qty :</p>
                            <input type="number" onChange={(event) => { setq(event) }} value={quantity} min="1" max={prod("quantity")} className="form-control mx-3" style={{ width: "80px", height: "30px" }} />
                        </div>
                        <div className='d-flex flex-column p-2 '>
                            {!isInCart(prod("_id")) ? <button disabled={prod("quantity") < 1} onClick={() => { addtocart(prod("_id")) }} className='btn my-1' style={{ borderRadius: "50px", backgroundColor: "rgb(255,216,20)" }}>add to cart</button> : <button onClick={viewcart} className='btn my-1' style={{ borderRadius: "50px", backgroundColor: "rgb(255,216,20)" }}>view cart</button>}

                            <div className='d-flex flex-row justify-content-between'>
                                <button className='btn w-100 my-1' style={{ borderRadius: "50px", backgroundColor: "rgb(255,164,28)" }} >buy now</button>

                                <div className='p-2'> {true ? <MdOutlineFavoriteBorder style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> : <MdFavorite></MdFavorite>}</div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* review */}

                <div className='cointainer'>
                    <hr className='w-75 mx-auto'/>
                    <div className="row">
                        <div className='reviews col-md-3 '>
                            <h1 className='ps-4'>Reviews</h1>

                        </div>
                        <div className=' col-9'>
                            <div className='row '>
                                {reviws.map((item, i) => {
                                    return (

                                        <div className="col-md-12 ">
                                            <div >
                                                <Rate rate={item.rating}>
                                                </Rate>
                                                <a href={'mailto: ' + item.user.email} className='mx-2'>{item.user.email} </a>
                                            </div>
                                            <span className="py-2 text-secondary">
                                                {new Date(item.createdAt).toLocaleString()}
                                            </span>
                                            <p className='text-secondary fs-5 pe-3 upper-first-letter'> {item.comment} </p>


                                        </div>

                                    )
                                })}

                            </div>

                        </div>

                    </div>

                </div>



            </div>
         
        </>
    )
}
