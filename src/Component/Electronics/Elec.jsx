import './Elec.css'
import Slider from "react-slick";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React from 'react';
import '../TodayDeals/todayDealsLiftSide/leftSide.css'

export default function Electronics() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
     
    ]
  };
  return (
    <>
   
  <div className="row container-fluid">
   
    <section className=" col-xl-2 col-md-3 col-4 elecLeftSide  ps-xl-4 ps-1">
        <header className="d-flex flex-column mt-3 pb-3">
        <p className="h6 fw-bold">Eligible for free delivery</p>
        </header>
        <section className="leftSideSections">
            <input className="col-1" type="checkbox" name="primeCheckbox" id="primeCheckbox" />Free Shipping
            <label className="col-10 " htmlFor="primeCheckbox"><i className="fa-solid fa-check text-warning"></i>
            All customers get FREE Shipping on orders shipped by Amazon</label>
           <h6 className=" fw-bold mt-4">Category</h6>
      <h6 className="px-2 fw-bold">Electronics</h6>
      <div className="px-3">
        <label><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Camera & Photo</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Car & Vehicle Electronics</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Computers, Components & Accessories</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>eBook Readers & Accessories </label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Headphones, Earbuds & Accessories</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Hi-Fi & Home Audio</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Home Theater, TV & Video</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Household Batteries & Chargers</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Mobile Phones & Communication</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Portable Sound & Vision</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Power Accessories</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Sat Nav, GPS, Navigation & Accessories</label>
        <label><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Tablets</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Telephones, VoIP & Accessories</label>
        <label className="mt-2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"></a>Wearable Technology</label>
      </div>
      <h6 className="mt-4 fw-bold">Fulfilled by Amazon</h6>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="col-1" type="checkbox" name="PrimeExclusiveDealsCheckbox"
              id="PrimeExclusiveDealsCheckbox" />
            <label className="col-10" htmlFor="PrimeExclusiveDealsCheckbox">
            Fulfilled by Amazon</label>
          </span>
        </section>
        <section className="leftSideSections mt-3 pb-3">
        <p className="h6 fw-bold">Brand</p>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="AutomotiveCheckbox"
              id="AutomotiveCheckbox" />
            <label className="col-10" htmlFor="AutomotiveCheckbox">
              Other</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyFashionCheckbox"
              id="BabyFashionCheckbox" />
            <label className="col-10" htmlFor="BabyFashionCheckbox">
            SAMSUNG</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
              id="BabyProductsCheckbox" />
            <label className="col-10" htmlFor="BabyProductsCheckbox">
            HP</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BeautyCheckbox" id="BeautyCheckbox" />
            <label className="col-10" htmlFor="BeautyCheckbox">
            Nillkin</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BooksCheckbox" id="BooksCheckbox" />
            <label className="col-10" htmlFor="BooksCheckbox">
            Dragon</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BoysFashionCheckbox"
              id="BoysFashionCheckbox" />
            <label className="col-10" htmlFor="BoysFashionCheckbox">
            Baseus</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="Computers,Components&Accessories"
              id="ComputersComponents&Accessories" />
            <label className="col-10" htmlFor="ComputersComponents&Accessories">
            Spigen</label>
          </span>
          
          <p className="h6 fw-bold mt-3">Condition</p>
        <span>
          <label className="col-10">New</label>
          <label className="col-10">Used</label>
        </span>
        </section>
        <h6 className="mt-3">Avg. Customer Review</h6>
        <div>
        <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' /> Only
        </div>
        <div>
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStar color='#FFA41C' /> & up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' /> & Up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' /> & Up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' /> & up
        </div>
        <section className="d-flex flex-column mt-3">
          <h2>Price</h2>
          <ul style={{listStyle: 'none', paddingLeft: '0rem'}}>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>Up to 50 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>50 to 100 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>100 to 300 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>700 to 1500 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>1500 to 2500 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>2500 EGP & above</a></li>
        </ul>
        </section>
        <section className="d-flex flex-column">
        <h6 className="mt-2">Deals & Discounts</h6>
        <span>
          <label className="col-10">All Discounts</label>
          <label className="col-10">Today's Deals</label>
        </span>
        </section>
        <section className="d-flex flex-column">
        <h6 className="mt-4">Seller</h6>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyFashionCheckbox"
              id="BabyFashionCheckbox" />
            <label className="col-10" htmlFor="BabyFashionCheckbox">
            Amazon.eg</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BabyProductsCheckbox"
              id="BabyProductsCheckbox" />
            <label className="col-10" htmlFor="BabyProductsCheckbox">
            دلع.موبايلك</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BeautyCheckbox" id="BeautyCheckbox" />
            <label className="col-10" htmlFor="BeautyCheckbox">
            المعز.ستور</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BooksCheckbox" id="BooksCheckbox" />
            <label className="col-10" htmlFor="BooksCheckbox">
            High.Quality</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="BoysFashionCheckbox"
              id="BoysFashionCheckbox" />
            <label className="col-10" htmlFor="BoysFashionCheckbox">
            Classy Phone</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="Computers,Components&Accessories"
              id="ComputersComponents&Accessories" />
            <label className="col-10" htmlFor="ComputersComponents&Accessories">
            ELMOT77DA</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="ElectronicsCheckbox"
              id="ElectronicsCheckbox" />
            <label className="col-10" htmlFor="ElectronicsCheckbox">
            bombaaaaaaaa</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="FashionCheckbox" id="FashionCheckbox" />
            <label className="col-10" htmlFor="FashionCheckbox">
            Mobile Shop 2023</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GardenCheckbox" id="GardenCheckbox" />
            <label className="col-10" htmlFor="GardenCheckbox">
            Amazon Warehouse</label>
          </span>
          <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GirlsFashionCheckbox"
              id="GirlsFashionCheckbox" />
            <label className="col-10" htmlFor="GirlsFashionCheckbox">
            Mobilic ٍStore</label>
          </span>
        </section>
        <h6 className="mt-3">Availability</h6>
        <span className="d-flex flex-row justify-content-around align-items-baseline">
            <input className="CategoryCheckBoxes col-1" type="checkbox" name="GroceryCheckbox" id="GroceryCheckbox" />
            <label className="col-10 " htmlFor="GroceryCheckbox">
            Include Out of Stock</label>
          </span>
      </section>
  <div className="col-xl-10 col-md-9 col-8 sideRight container-fluid justify-content-center align-content-center">
  <div className="container-fluid">
    <div className="row">
      <h2 className='mt-2'>Electronics</h2>
      <img src="../assets/images/XCM_.jpg" className="img-fluid" alt="..."/>
      <div className='container-fluid my-2 joinPrime' id='joinPrime'>
                <div className='row col-12 d-flex flex-md-row flex-column justify-content-center p-2'>
                    <p className='col-md-5 me-2 fs-5'>
                        Enjoy FREE delivery, exclusive deals, award-winning TV and more
                        Join today. Cancel anytime.
                    </p>
                    <button className='btn btn-warning col-md-2  fs-5 h-50'> Join Prime</button>
                </div>
            </div>      <img className="col-lg-6 col-md-12" src="../assets/images/1_EN.png" alt="..."/> 
      <img className="col-lg-6 col-md-12" src="../assets/images/2-EN.png" alt="..."/> 
            <hr className="mt-2"/>
      <h3 className="mt-4 text-center">SHOP BY CATEGORY</h3>
        <div className="mt-3">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/11.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h6 className="card-text text-center">Mobile & accessories</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/22.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-text text-center">TVs</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/33.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Headphones</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/44.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Laptops</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/55.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-text text-center">PCs & accessories</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <img src="../assets/images/66.PNG" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Speakers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <img src="../assets/images/818.jpg" className="mt-3 img-fluid"/>
        <h3 className="mt-4 text-center">FEATURED BRANDS</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
        <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/88.jpg" className="card-img-top"/>
            <div className="card-body">
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/77.jpg" className="card-img-top"/>
            <div className="card-body">
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/99.jpg" className="card-img-top"/>
            <div className="card-body">
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/66.jpg" className="card-img-top"/>
            <div className="card-body">
            </div>
          </div></div>
        </div>
        <img src="../assets/images/9=.jpg" className="mt-2 img-fluid"/><hr className="mt-3"/>
<h2>Electronics | New arrivals</h2><hr/>
<Slider {...settings}>
<div className="card border-0 ">
        <img src="../assets/images/Capture0.PNG" className="card-img-top1" alt="..."/>
        <div className="card-body">
          <p className="card-text">
            Soundcore By Anker R50i True Wireless…</p>
          <span>Soundcore</span>
          <div className="d-flex">EGP<sub><h3>1,109</h3></sub>00 
           </div>
           <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP1,399.00</span>
          <div>
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
           (57)
         </div>     
            </div>
            </div>
            <div className="card border-0 ">
          <img src="../assets/images/Capture1.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text-black">Oraimo Smart watch OSW-16, BrightSilv…</p>
            <span>oriaimo</span>
            <div className="d-flex">EGP<sub><h3>888</h3></sub>00 
             </div>
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP1,560.40</span>
            <div>    
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />(9)
           </div>          
                </div>
              </div>
              <div className="card border-0 m-3">
          <img src="../assets/images/Capture2.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">QUANXI M10 Wireless Bluetooth 5.1 Head… </p>
            <span>XFTOPSEXFTOPSE</span>
            <div className="d-flex">EGP<sub><h3>278</h3></sub>00 
            </div>
            <div>
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />(108)
           </div>     
                </div>
              </div>

              <div className="card border-0" >
          <img src="../assets/images/Capture3.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">Portable Desk Fan with Night Light, 3… MOREKAMOREKA</p>
            <span>MOREKA</span>
            <div className="d-flex">EGP<sub><h3>599</h3></sub>00 
            </div> 
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' /> <div> (10)
           </div>     
                </div>
              </div>
              <div className="card border-0">
          <img src="../assets/images/Capture4.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">Reioo 3M Original AirPods 3 Sm Original</p>
            <span>Reioo</span>
            <div className="d-flex">EGP<sub><h3>540</h3></sub>00 
            </div> 
            <div>
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' />(7)
           </div>     
                </div>
              </div>
              <div className="card border-0">
          <img src="../assets/images/Capture6.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">HD Plus Glass Anti Shock with Black Fr… </p>
            <span>GenericGeneric</span>
            <div className="d-flex">EGP<sub><h3>48</h3></sub>07 
               <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP65.00</span>
             </div>
            <div>
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />(8)
           </div>   
                </div>
              </div>
              <div className="card border-0">
          <img src="../assets/images/777.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">iLock 3-way wall outlet adapter 350…
               </p>
            <span>iLOCK</span>
            <div className="d-flex">EGP<sub><h3>33</h3></sub>00 
             </div>
            <div>
            <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStar color='#FFA41C'/>(631)
           </div>  
                </div>
              </div>
</Slider>
<h2 className="mt-4">Electronics | Best Sellers</h2><hr/>
<Slider {...settings}>
<div className="card border-0">
        <img src="../assets/images/111.PNG" className="card-img-top1" alt="..."/>
        <div className="card-body">
          <p className="card-text">
            Adjustable Laptop Stand, Portable...
            </p>
          <span>MONADIKOS</span>
          <div className="d-flex">EGP<sub><h3>125</h3></sub>00 
            <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP130.00</span>
           </div>
          <div>
           <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStarHalf color='#FFA41C'/>(2,494)
         </div>      
              </div>
            </div>
            <div className="card border-0">
          <img src="../assets/images/222.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">Joyroom JR-BP560 Excellent Series Por…</p>
            <span>Joyroom</span>
            <div className="d-flex">EGP<sub><h3>215</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP309.43</span>
             </div>
            <div>
            <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStarFill color='#FFA41C'/>
           <BsStar color='#FFA41C'/> (130)
           </div>        
                </div>
              </div>
           <div className="card border-0">
          <img src="../assets/images/333.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">Hikvision 64 GB USB Flash Drive - HS-US… </p>
            <span>Hikvision</span>
            <div className="d-flex">EGP<sub><h3>92</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP111.49</span>
            </div>
            <div>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarHalf color='#FFA41C'/>(10,917)
           </div>     
                </div>
              </div>
          <div className="card border-0">
          <img src="../assets/images/444.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">iLOCK Travel Plug adapter Converter -…
              </p>
            <span>iLOCK</span>
            <div className="d-flex">EGP<sub><h3>31</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP48.00</span>
            </div> 
            <div>
            <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarHalf color='#FFA41C'/>
              <BsStar color='#FFA41C'/>(375)
           </div>     
                </div>
              </div>
              <div className="card border-0">
          <img src="../assets/images/555.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">Gp chargeable batteries - 1100 ma…
              </p>
            <span>GP</span>
            <div className="d-flex">EGP<sub><h3>43</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP104.15</span>
            </div> 
            <div>
            <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarHalf color='#FFA41C'/>
              <BsStar color='#FFA41C'/>(116)
           </div>     
                </div>
              </div>
          <div className="card border-0">
          <img src="../assets/images/666.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text">8.5 Inch digital drawing Tablet han… </p>
            <span>Newlight</span>
            <div className="d-flex">EGP<sub><h3>60</h3></sub>00 
               <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP71.90</span>
             </div>
            <div>
            <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStar color='#FFA41C'/>(283)
           </div>     
                </div>
              </div>
          <div className="card border-0">
          <img src="../assets/images/777.PNG" className="card-img-top1" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">iLock 3-way wall outlet adapter 350…
               </p>
            <span>iLOCK</span>
            <div className="d-flex">EGP<sub><h3>33</h3></sub>00 
             </div>
            <div>
            <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStarFill color='#FFA41C'/>
              <BsStar color='#FFA41C'/>(631)
           </div>  
                </div>
              </div>
</Slider>
<div className="card mt-4">
  <div className="card-body">
    <span>1-12 of over 70,000 results for <span className="text-danger fw-bold">Electronics</span></span>
  </div>
  </div>
  </div>		
</div>
   
<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/1=.jpg" className="card-img-top imgCard container-fluid justify-content-center align-content-center" alt="..."/>
        <div className="card-body">
          <p className="card-text">SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB Storage, LTE, Black - 1 year Warranty</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />31
          </div>     
               <div className="d-flex">EGP<sub><h3>15,199</h3></sub>00 
                <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP4,919.00</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:'50px'}}/><h6>Get it as soon as tomorrow, Jul 31</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
      </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/1+.jpg" className="card-img-top imgCard container-fluid justify-content-center align-content-center" alt="..."/>
        <div className="card-body">
          <p className="card-text">SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB Storage, LTE, Black - 1 year Warranty</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />12
          </div>     
               <div className="d-flex">EGP<sub><h3>3,699</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP5,639.00</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Jul 31</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/11-.jpg" className="card-img-top imgCard container-fluid justify-content-center align-content-center " alt="..."/>
        <div className="card-body">
          <p className="card-text">Samsung Galaxy A24 Dual SIM, 4GB RAM, 128GB ROM, 4G LTE - Silver</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />11
         </div>     
               <div className="d-flex">EGP<sub><h3>6,444</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP7,447.00</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Jul 31</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <hr/>
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>
        <img src="../assets/images/2+.jpg" className="card-img-top mt-5 container-fluid justify-content-center align-content-center imgCard" alt="..."/>
        <div className="card-body">
          <p className="card-text">Samsung 50 inch 4k uhd smart led tv with built-in receiver and remote control, black - ua50cu7000uxeg</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />19
         </div>     
               <div className="d-flex">EGP<sub><h3>10,899</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGPl1,299.40</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Aug 1</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>
        <img src="../assets/images/r1.jpg" className="card-img-top container-fluid justify-content-center align-content-center imgcarrd" style={{marginTop:'8rem'}}/>
        <div className="card-body">
          <p className="card-text">Samsung 43 inch full hd smart led tv with built-in receiver, black - ua43t5300auxeg, Wi-Fi</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
         </div>21   
               <div className="d-flex">EGP<sub><h3>599</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGPl,037.40</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Aug 1</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/3+.jpg" className="card-img-top container-fluid justify-content-center align-content-center imgCard mt-4" alt="..."/>
        <div className="card-body">
          <p className="card-text">Samsung Galaxy A54 - Dual SIM Mobile Phone Android, 8GB RAM, 256GB, 5G, Awesome White - 1 year Warranty</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />25
         </div>     
               <div className="d-flex">EGP<sub><h3>10,899</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGPl1,299.40</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Aug 1</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <hr/>
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/4+.jpg" className="card-img-top mt-4 container-fluid justify-content-center align-content-center imgCard" alt="..."/>
        <div className="card-body">
          <p className="card-text">Samsung Galaxy Tab A7 Lite - 8.7 Inches Display, 3 GB RAM, 32 GB, 4G LTE, Grey - 1 year Warranty</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />21
         </div>     
               <div className="d-flex">EGP<sub><h3>3,399</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP4,9690</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><h6>Get it as soon as tomorrow, Aug 3</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>

        <img src="../assets/images/22-.jpg" className="card-img-top mt-5 container-fluid justify-content-center align-content-center imgCard" alt="..."/>
        <div className="card-body">
          <p className="card-text">Soundcore a3991h11 by anker life p2i true wireless earbuds, ai-enhanced calls, 10mm drivers, 2 eq modes, 28h playtime with fast charging, bluetooth</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />131
         </div>  
               <div className="d-flex">EGP<sub><h3>1,089</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP1,540,01</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:'50px'}}/><h6>Get it as soon as tomorrow, Aug 4</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/r1.jpg" className="card-img-top my-5 container-fluid justify-content-center align-content-center imgcard" alt="..."/>
        <div className="card-body">
          <p className="card-text">Samsung 40 inch full hd smart led tv with built-in receiver, black</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />4
         </div>     
               <div className="d-flex">EGP<sub><h3>5,999</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP11,299.40</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:'50px'}}/><h6>Get it as soon as tomorrow, Aug 4</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

  </div>
  <div className="d-grid gap-2">
    <button className="btn mt-4 mb-5 seeAll" type="button"><h5>See all results</h5></button></div>
</div></div>
</div>
    </>
  )
  }