import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import './Vgames.css'
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import React, { useEffect, useState } from "react";

export default function VideoGames() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return( 
  <>
  <div className="row container-fluid">
    <section className="col-xl-2 col-md-3 col-4 leftSide ps-xl-4 ps-1">
    <section className="d-flex flex-column">
        <h6 className="mt-3">New Arrivals</h6>
        <span>
          <label className="col-10">Last 30 days</label>
          <label className="col-10">Last 90 days</label>
          <label className="col-10">Next 90 days</label>

        </span>
        </section>
        <header className="d-flex flex-column mt-3 pb-3">
        <p className="h6 fw-bold">Eligible for free delivery</p>
        </header>
        <section className="leftSideSections">
            <input className="col-1" type="checkbox" name="primeCheckbox" id="primeCheckbox" />Free Shipping
            <label className="col-10 " htmlFor="primeCheckbox"><i className="fa-solid fa-check text-warning"></i>
            All customers get FREE Shipping on orders shipped by Amazon</label>
           <h6 className=" fw-bold mt-4">Category</h6>
      <h6 className="px-2 fw-bold">Video Games</h6>
      <div className="px-3">
      <div className="mt-2">Legacy Systems</div>
      <div className="mt-2">Linux Games</div>
      <div className="mt-2">Mac</div>
        <div className="mt-2">Nintendo Switch</div>
        <div className="mt-2">PC</div>
        <div className="mt-2">PlayStation 4</div>
        <div className="mt-2">PlayStation 5</div>
        <div className="mt-2">Warranties</div>
        <div className="mt-2">Xbox 360</div>
        <div className="mt-2">Xbox One</div>
        <div className="mt-2">NXbox Series X & S</div>



       
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
  <Container>
      <Row>
        <h2 className="mt-2">Video Games</h2>
        <img src="../assets/images/new.jpg" className="img-fluid" alt="..." />
        <div className={windowWidth <= 890 ? "div2" : "div1"}>
          {windowWidth <= 890 ? (
            <div className=" div2">
              <img src="../assets/images/play (4).jpg" className="img-fluid mt-3" alt="..." />
              <img src="../assets/images/play 1.jpg" className="img-fluid" alt="..." />
              <img src="../assets/images/play 2.jpg" className="img-fluid" alt="..." />
              <img src="../assets/images/play (3).jpg" className="img-fluid" alt="..." />
              <img src="../assets/images/category.jpg" className="img-fluid" alt="..."/>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re1.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re2.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re3.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re4.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re5.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re6.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <img src="../assets/images/brand.jpg" className="img-fluid" alt="..."/>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re7.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re8.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re9.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re10.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re11.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re12.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>
              <Row className="g-0">
              <Col sm={6} md={6} >
              <img src="../assets/images/re13.jpg" className="img-fluid" alt="..." />
              </Col>
              <Col sm={6} md={6}>
              <img src="../assets/images/re14.jpg" className="img-fluid" alt="..." />
              </Col>
              </Row>

            </div>
          ) : (
            <div className="div1">
              <img src="../assets/images/1top.jpg" className="img-fluid mt-3" alt="..." />
              <div className="d-flex">
                <img src="../assets/images/2play.jpg" className="imgRow" alt="..." />
                <img src="../assets/images/3nintendo.jpg" className="imgRow" alt="..." />
                <img src="../assets/images/4xbox.jpg" className="imgRow" alt="..." />
              </div>
           
            <img src="../assets/images/5top.jpg" className="img-fluid" alt="..."/>
            <div className="d-flex">
            <img src="../assets/images/6gaming.jpg" className=" imgRow  " alt="..."/>
             <img src="../assets/images/7monitors.jpg" className=" imgRow  " alt="..."/>
             <img src="../assets/images/8pc.jpg" className=" imgRow  " alt="..."/>
            </div>
            <div className="d-flex">
            <img src="../assets/images/9keyboard.jpg" className=" imgRow  " alt="..."/>
             <img src="../assets/images/10access.jpg" className=" imgRow  " alt="..."/>
             <img src="../assets/images/11gchairs.jpg" className=" imgRow  " alt="..."/>
             </div> 
             <img src="../assets/images/12top.jpg" className="img-fluid" alt="..."/>
             <div className="d-flex">
            <img src="../assets/images/13hp.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/14havit.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/15logitech.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/16hyper.jpg" className=" imgRowS  " alt="..."/>
             </div> 
             <div className="d-flex">
            <img src="../assets/images/17palit.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/18asus.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/19lenovo.jpg" className=" imgRowS  " alt="..."/>
             <img src="../assets/images/20micro.jpg" className=" imgRowS  " alt="..."/>
             </div> 
             </div>
          )}
        </div>
     
  <div className="card mt-4">
  <div className="card-body">
    <span>1-12 of over 30,000 results for  <span className="text-danger fw-bold">Video Games</span></span>
  </div>
  </div>
  
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>
        <img src="../assets/images/m1.jpg" className="card-img-top imgCard3 container-fluid justify-content-center align-content-center" style={{width:  '9rem' ,marginLeft:'6rem'}} />
        <div className="card-body">
          <p className="card-text">SteelSeries Rival 710 Gaming Mouse - 16,000 CPI TrueMove3 Optical Sensor - OLED Display - Tactile Alerts - RGB Lighting, Black</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
31
          </div>     
               <div className="d-flex">EGP<sub><h3>3,199</h3></sub>00 
                <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP4,919.00</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:'50px'}}/><span>Get it as soon as<span className="fw-bold"> Saturday, September 9</span></span> 
                
                </div>
                <p>Fulfilled by Amazon - FREE Shipping</p>
              </div>
          

             
            </div>
      </div>
    

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <div className="d-flex justify-content-start">
        </div>
        <img src="../assets/images/m2.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Aula S20 3200 Dpi LED Macro Gaming Mouse</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStar color='#FFA41C' />345
          </div>     
               <div className="d-flex">EGP<sub><h3>145</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP211.71</span></span> 
              </div> 
              <span >Get it as soon as  <span className="fw-bold">Saturday, September 9 </span>
               Fulfilled by Amazon - FREE Shipping</span>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/m3.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">1 Year Extended Warranty Plan for one customer purchased IT or Audio-Video products from EGP1000 to EGP1499.99
3.1 out of 5 stars 8</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' />8
         </div>     
               <div className="d-flex">EGP<sub><h3>92</h3></sub>00 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/><span>Get it <span className="fw-bold">  Monday, September 11 - Wednesday, September 13  </span></span>
                </div>
                Fulfilled by Amazon - FREE Shipping
              </div>
            </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <hr/>
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/m6.jpg" className="card-img-top" style={{width:'50%', height:  '20rem', marginLeft:'4rem'}} alt="..."/>
        <div className="card-body">
          <p className="card-text">Kids Wireless Headphones, Arvin Childrens Bluetooth Headphones with Microphone and LED Light, Using TF Card, 85/94dB Volume Limited, Wired</p>
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
              <span >Get it as soon as  <span className="fw-bold">Saturday, September 9 </span>
               Fulfilled by Amazon - FREE Shipping</span>
            </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/m4.jpg" className="card-img-top imgCard container-fluid justify-content-center align-content-center" alt="..."/>
        <div className="card-body">
          <p className="card-text">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch),with Non-Slip Base,Waterproof and Foldable Pad,Desktop Pad Suitabl</p>
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
              
              <span >Get it as soon as  <span className="fw-bold">Saturday, September 13 </span>
               Fulfilled by Amazon - FREE Shipping</span>              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>
        <img src="../assets/images/m5.jpg" className="card-img-top" style={{width:'60%', height:  '20rem', marginLeft:'4rem'}} alt="..."/>
        <div className="card-body">
          <p className="card-text">G2000 Gaming Headset, Surround Stereo Gaming Headphones with Noise Cancelling Mic, LED Light & Soft Memory Earmuffs, Works with Xbox</p>
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
              <span >Get it as soon as  <span className="fw-bold">Saturday, September 11 </span>
               Fulfilled by Amazon - FREE Shipping</span>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <hr/>
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>

        <img src="../assets/images/m7.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Zexrow Xbox 360 Controller, USB Wired Gamepad Joystick with Improved Dual Vibration and Ergonomic Design for Microsoft Xbox 360 & Slim & PC...</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />7,771
         </div>     
               <div className="d-flex">EGP<sub><h3>499</h3></sub>00 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/> <span >Get it as soon as  <span className="fw-bold">Saturday, September 9 </span>
               </span> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
      <span className="bestSellerBadge2 card-subtitle ">Best Seller</span>

        <img src="../assets/images/m8.jpg" className="card-img-top" style={{marginTop:'5rem'}} alt="..."/>
        <div className="card-body">
          <p className="card-text">Sony Dualshock 4 V2 Wireless Controller For Playstation 4 - Green Camouflage</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStar color='#FFA41C' />131
         </div>  
               <div className="d-flex">EGP<sub><h3>850</h3></sub>00 
               <span className="pt-3 me-2">List: <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP1,540,01</span></span> 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/> <span >Get it as soon as  <span className="fw-bold">Saturday, September 9 </span>
               </span> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/m9.jpg" className="card-img-top" style={{height:'20rem'}} alt="..."/>
        <div className="card-body">
          <p className="card-text">DELUX Ergonomic Mouse, Wired Large RGB Vertical Mouse with 6 Buttons, Removable Wrist Rest, 4000DPI and On-Board Software Reduce Hand</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />4,652
         </div>     
               <div className="d-flex">EGP<sub><h3>1,099</h3></sub>00 
              </div> 
              <div className="d-flex align-items-start me-3">
                <img src="../assets/images/a.PNG" style={{width:  '50px'}}/> <span >Get it as soon as  <span className="fw-bold">Saturday, September 9 </span>
               </span> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
            </div>
            </div>

 
  <div className="d-grid gap-2">
    <button className="btn mt-4 mb-5 seeAll" type="button"><h5>See all results</h5></button></div>


      
    </Row>
      </Container>
      
    </div>
    </div>
  </>
  )
}
