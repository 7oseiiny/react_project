import React, { useState } from 'react'
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import { FaStar, FaRegStar } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Fashion.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../axiosConfig/instance';
import { useEffect } from 'react';
import { fetchcategory } from "../../../store/Slice/categorySlice";
export default function Men() {
  let [myfash, setmyfash] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate()
  useEffect(() => {
    axiosInstance.get("category/651ed4af1f7aed6d784da27d").then((data)=>{
      setmyfash(data.data.data.products)
      console.log(data.data.data.products)
    }).catch((err)=>{console.log(err)})
    dispatch(fetchcategory("Men Fashion"))
    return()=>{ dispatch(fetchcategory([]))}
  }, [])
  function gotodetails(prodId){
    console.log(prodId)
    navigate("/productdetails", { state: { productId: prodId}});
}
  return (
    <>

      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <section className="col-2  leftSide ps-ps-1 mt-4">
          <section className="leftSideSections pb-3">
            <h6>Eligible htmlFor free delivery</h6>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="col-1" type="checkbox" name="primeCheckbox" id="primeCheckbox" />
              <label className="col-10" htmlFor="primeCheckbox"><i className="fa-solid fa-check text-warning"></i>
                All customers get FREE Shipping on orders shipped by Amazon</label>
            </span>


          </section>
          <section className="leftSideSections pb-3">
            <h2>Category</h2>
            <h6>Fashion</h6>
            <a href="#" className='text-dark'> Women</a><br />
            <a href="#" className='text-dark'>  Men</a><br />
            <a href="#" className='text-dark'>Girls</a><br />
            <a href="#" className='text-dark'>Boys</a><br />
            <a href="#" className='text-dark'>Baby</a><br />
            <a href="#" className='text-dark'>Luggage & Travel Gear</a><br />
            <a href="#" className='text-dark'>Novelty & Special Use</a><br />
            <a href="#" className='text-dark'>Shoe, Jewelry & Watch </a><br />
            <a href="#" className='text-dark'>Accessories</a><br />

            <p className="h6 fw-bold mt-4">Color</p>


        
            <div>
              <div className="square black"></div>
              <div className="square gray"></div>
              <div className="square white"></div>
              <div className="square bro"></div>
              <div className="square red"></div>
              <div className="square pink"></div>
              <div className="square orange"></div>
              <div className="square yellow"></div>
              <div className="square green"></div>
              <div className="square blue"></div>
              <div className="square darkblue"></div>
              <div className="square purple"></div>
              <div className="square bage"></div>
              <div className="square bage1"></div>
              <div className="square bage3"></div>
              <div className="square bage4"></div>
              <div className="square bage5"></div>
              <div className="square bage2"></div>

            </div>

            <p className="h6 fw-bold mt-4">Fulfilled by Amazon</p>

            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="AutomotiveCheckbox"
                id="AutomotiveCheckbox" />
              <label className="col-10 " htmlFor="AutomotiveCheckbox">
                Fulfilled by Amazon</label>
            </span>

            <p className="h6 fw-bold mt-4">Brand</p>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyFashionCheckbox"
                id="BabyFashionCheckbox" />
              <label className="col-10 " htmlFor="BabyFashionCheckbox">
                adidas</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
                id="BabyProductsCheckbox" />
              <label className="col-10 " htmlFor="BabyProductsCheckbox">
                Conttonil</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="BeautyCheckbox" id="BeautyCheckbox" />
              <label className="col-10 " htmlFor="BeautyCheckbox">
                Casio</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="BooksCheckbox" id="BooksCheckbox" />
              <label className="col-10 " htmlFor="BooksCheckbox">
                American Eagle</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="BoysFashionCheckbox"
                id="BoysFashionCheckbox" />
              <label className="col-10 " htmlFor="BoysFashionCheckbox">
                Carina</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="Computers,Components&Accessories"
                id="ComputersComponents&Accessories" />
              <label className="col-10 " htmlFor="ComputersComponents&Accessories">
                Grinta</label>
            </span>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
                id="ElectronicsCheckbox" />
              <label className="col-10 " htmlFor="ElectronicsCheckbox">
                Dice</label>
            </span>



          </section>
          <section className="d-flex flex-column pb-3">
            <h2>Condition</h2>
            <a href="#" className='text-dark'> New</a>
            <a href="#" className='text-dark'>Used</a>
          </section>

          <section className="d-flex flex-column pb-3">
            <h2>Average customer review</h2>
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar /><span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar /><span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar /><span className="averageReview">& up</span>
            </span>
            <span>
              <FaStar className="checkedStar" />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar /><span className="averageReview">& up</span>
            </span>

          </section>

          <section className="d-flex flex-column pb-3">
            <h4>Price</h4>

            <a href="#" className='text-dark'>Up to 25 EGP</a>
            <a href="#" className='text-dark'>25 to 50 EGP</a>
            <a href="#" className='text-dark'>50 to 100 EGP </a>
            <a href="#" className='text-dark'>100 to 200 EGP</a>
            <a href="#" className='text-dark'>200 to 300 EGP</a>
            <a href="#" className='text-dark'>300 to 400 EGP</a>
            <a href="#" className='text-dark'>400 EGP & above</a>
          </section>
          <section className="d-flex flex-column pb-3">
            <h5>Deals & Discounts</h5>

            <a href="#" className='text-dark'>All Discounts</a>
            <a href="#" className='text-dark'>Todays Deals</a>
          </section>



          <p className="h6 fw-bold mt-4">Seller</p>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyFashionCheckbox"
              id="BabyFashionCheckbox" />
            <label className="col-10 " htmlFor="BabyFashionCheckbox">
              Amazon.eg</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
              id="BabyProductsCheckbox" />
            <label className="col-10 " htmlFor="BabyProductsCheckbox">
              Maleeka Marketplace</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
              id="BabyProductsCheckbox" />
            <label className="col-10 " htmlFor="BabyProductsCheckbox">
              Octa_EGY⭐⭐⭐⭐</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BeautyCheckbox" id="BeautyCheckbox" />
            <label className="col-10 " htmlFor="BeautyCheckbox">
              Amazon Warehouse</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BooksCheckbox" id="BooksCheckbox" />
            <label className="col-10 " htmlFor="BooksCheckbox">
              American Eagle</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BoysFashionCheckbox"
              id="BoysFashionCheckbox" />
            <label className="col-10 " htmlFor="BoysFashionCheckbox">
              Cotton-Home</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="Computers,Components&Accessories"
              id="ComputersComponents&Accessories" />
            <label className="col-10 " htmlFor="ComputersComponents&Accessories">
              General.commerce</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
              id="ElectronicsCheckbox" />
            <label className="col-10 " htmlFor="ElectronicsCheckbox">
              Sugar2022</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
              id="ElectronicsCheckbox" />
            <label className="col-10 " htmlFor="ElectronicsCheckbox">
              ⭐Home-Smart⭐</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
              id="ElectronicsCheckbox" />
            <label className="col-10 " htmlFor="ElectronicsCheckbox">
              Sugar2022</label>
          </span>



        </section>


  {/* Right Side  */}
        < div className="col-10  sideRight justify-content-center align-content-center mt-4 " >

<h2 className="fw-bold fs-2">Men Fashion</h2>
<div className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small mb-2" style={{ width: '100%', height: '80px' }}>
  <p className="h6 fw-bold ">Enjoy FREE delivery, exclusive deals, award-winning TV and more
    Join today</p>
  <button type="button" className="btn btn-warning btn-sm  ms-5 bootn">Try Prime FREE htmlFor 30 days</button>
</div>
<img src="../assets/images/o1.jpeg" className="img-fluid  mt-2" width="100%" />

<img src="../assets/images/men1.jpg" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men2.jpg" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men3.jpg" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men4.PNG" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men5.PNG" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men6.PNG" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men7.jpg" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />
<img src="../assets/images/men8.jpg" className="img-fluid  mt-2" width="100%" style={{ marginBottom: '20px' }} />

<Container>
  <Row>
    <Col> <img src="../assets/images/pr1.jpg" className="img-fluid " width="100%" style={{ marginBottom: '20px' }} /></Col>
    <Col> <img src="../assets/images/pr2.jpg" className="img-fluid " width="100%" style={{ marginBottom: '20px' }} /></Col>
    <Col> <img src="../assets/images/pr3.jpg" className="img-fluid " width="100%" style={{ marginBottom: '20px' }} /></Col>
    <Col> <img src="../assets/images/pr4.jpg" className="img-fluid " width="100%" style={{ marginBottom: '20px' }} /></Col>
  </Row>
</Container>

<h3 className='text-center m-3'>Shop by brand</h3>
<img src="../assets/images/many.PNG" className="img-fluid " width="100%" style={{ marginBottom: '20px' }} />

<div className="card mt-2">
  <div className="card-body">
    <p className="fw-normal">1-12 of over 30,000 results for  <span className="text-warning fw-bold">Men</span></p>
  </div>
</div>

<div className="container">
            <div className="row">
              {myfash.map((moda) => {
                return < >

                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                    <div className="card border-0" style={{ width: '20rem', height: '25rem' }}>
                      <img src={moda.img} className="card-img-top  h-75" onClick={() => { gotodetails(moda._id)}}/>
                      <div className="d-inline-block">
                        <p className="card-text">{moda.title_en}</p>
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStarFill color='#FFA41C' />
                        <BsStar color='#FFA41C' />
                      </div>
                      <div className="d-flex">EGP <sub>
                        <h3>{moda.price.new}</h3>
                      </sub>00
                      </div>
                    </div>
                  </div>
                </>
              })}
            </div>
          </div>

<div className="d-grid gap-2">
  <button className="btn mt-4 mb-5" style={{ backgroundColor: '#ebeaea', color: 'rgb(62, 110, 130)' }} type="button"><h5>See all results</h5>
  </button>
</div>

{/* ending counteiner  */}
</div>



      </div>
    </>
  )
}
