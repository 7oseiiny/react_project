import './Mobile.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa6";
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchcategory } from "../../../store/Slice/categorySlice";
import axiosInstance from '../../axiosConfig/instance';
import { useNavigate } from 'react-router-dom';


export default function Mobile() {

  let navigate = useNavigate()

  let [mobile, setmobile] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get("category/651827dc6cc9fe1018cc5009").then((data)=>{
      setmobile(data.data.data.products)
      console.log(data.data.data.products)
    }).catch((err)=>{console.log(err)})
    dispatch(fetchcategory("Mobile Phones"))
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
        <section className="col-xl-2 col-md-3 col-4 leftSide ps-xl-4 ps-1 mt-4">
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
        <div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4">

          <h2 className="fw-bold fs-2">Cell Phones</h2>
          <img src="../assets/images/ha.jpg" className="img-fluid veiw" width="100%" />
          <div className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small " style={{ width: '100%', height: '80px' }}>
            <p className="h6 fw-bold">Enjoy FREE delivery, exclusive deals, award-winning TV and more
              Join today</p>
            <button type="button" className="btn btn-warning btn-sm  ms-5 bootn">Try Prime FREE htmlFor 30 days</button>
          </div>
          <div>
            <p className="h1 fw-bold text-center mt-5 heading " style={{ color: 'blueviolet' }}>Flagship brands</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6 d-md-flex d-none px-0">
                <img src="../assets/images/1.jpg" className="w-50" />
                <img src="../assets/images/1.1.jpg" className="w-50" />
              </div>
              <div className="col-12 col-md-6">
                <div className="row ps-1">
                  <div className="col-6 ps-0 pe-0">
                    <img src="../assets/images/2.jpg" className="w-100" />
                  </div>
                  <div className="col-6 px-0">
                    <img src="../assets/images/3.jpg" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-flex">
              <div className="row">
                <div className="col-6 d-flex px-0">
                  <img src="../assets/images/1.3.jpg" className="w-50" />
                  <img src="../assets/images/1.4.jpg" className="w-50" />
                </div>
                <div className="col-6 ps-1 pe-0">
                  <div>
                    <img src="../assets/images/tt.jpg" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
            {/* second  */}
            <div className="row">
              <div className="col-12 col-md-6 d-flex ">
                <div className="row ps-1 ps-md-0" >
                  <div className="col-6 px-0 ">
                    <img src="../assets/images/5.jpg" className="w-100" />

                  </div>
                  <div className="col-6 px-0">
                    <img src="../assets/images/6.jpg" className="w-100" />

                  </div>
                </div>
              </div>
              <div className="col-6 d-none d-md-flex ps-1 pe-0">
                <img src="../assets/images/7.jpg" className="w-50" />
                <img src="../assets/images/7.1.jpg" className="w-50" />
              </div>
            </div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-6 d-flex px-0">
                  <img src="../assets/images/4.jpg" className="w-50" />
                  <img src="../assets/images/4.1.jpg" className="w-50" />
                </div>
                <div className="col-6 d-flex ps-1 pe-0">
                  <img src="../assets/images/7.2.jpg" className="w-50" />
                  <img src="../assets/images/7.3.jpg" className="w-50" />
                </div>
              </div>
            </div>

          </div>


          {/* cards htmlFor phones 
      row 1  */}
          <div className="container">
            <div className="row">
              {mobile.map((mob) => {
                return < >
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                    <div className="card" style={{ width: '22rem' }}>
                      <img src={mob.img} className="card-img-top h-57 "onClick={() => { gotodetails(mob._id)}}/>
                      <div className="card-body">
                        <p className="card-text">{mob.title_en}</p>
                      </div>
                      <div className="d-inline-block">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star-half-stroke text-warning"></i>
                      </div>
                      <div className="d-flex">EGP <sub>
                        <h3>{mob.price.new}</h3>
                      </sub>00
                        <span className="pt-3 me-2">List:<span className="text-muted pt-3 text-decoration-line-through me-2">
                          {mob.price.old}</span></span>
                      </div>
                      <div className="d-flex align-items-start me-3">
                        <img src="../assets/images/images.png" width="80px" height="25px" />
                        <p>Get it as soon as <b>tomorrow, Jul 31</b>
                          Fulfilled by Amazon - FREE Shipping</p>
                      </div>
                    </div>
                  </div>


                </>
              })}


              {/* end cards htmlFor phones  */}
            </div>
          </div>

          {/* End right side  */}
        </div>

      </div>

      {/* <script src="bootstrap-5.3.0-dist/js/bootstrap.bundle.min.js"></script> */}



    </>
  )
}
