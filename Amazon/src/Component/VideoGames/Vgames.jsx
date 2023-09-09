import { Badge, Container, Row } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import './Vgames.css'
import React from "react";

export default function VideoGames() {
  return( 
  <>
   <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
  <div className="row container-fluid">
    <ul className="nav shadow-sm third-nav">
      <li className="nav-item d-flex small third-nav">
        <a className="nav-link text-dark fw-bolder" href="#">Electronics</a>
        <a className="nav-link text-dark" href="#">Best Sellers</a>
        <a className="nav-link text-dark" href="#">Mobiles & Accessories
        </a>
        <a className="nav-link text-dark" href="#">Computer & Accessories</a>
        <a className="nav-link text-dark" href="#">TVs</a>
        <a className="nav-link text-dark" href="#">Laptops</a>
        <a className="nav-link text-dark" href="#">Cameras & Accessories</a>
        <a className="nav-link text-dark" href="#">Headphones</a>
        <a className="nav-link text-dark" href="#">Speakers</a>
        <a className="nav-link text-dark" href="#">Wearable Technology</a>
        <a className="nav-link text-dark" href="#">Home Entertainment Systems</a>
      </li>
    </ul>
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
  <div className="col-10 sideRight">
  <Container>
    <Row>
    <h2 className="mt-2">Video Games</h2>
      <img src="../assets/images/new.jpg" className="img-fluid" alt="..."/>
      <img src="../assets/images/1top.jpg" className="img-fluid mt-3" alt="..."/>
      {/* row-cols-md-2 row-cols-lg-3 */}
     <div className="d-flex ">
     <img src="../assets/images/2play.jpg" className=" imgRow  " alt="..."/>
      <img src="../assets/images/3nintendo.jpg" className=" imgRow  " alt="..."/>
      <img src="../assets/images/4xbox.jpg" className=" imgRow  " alt="..."/>
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

  <div className="card mt-4">
  <div className="card-body">
    <span>1-12 of over 30,000 results for  <span className="text-danger fw-bold">Video Games</span></span>
  </div>
  </div>
  
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '21rem'}}>
        <img src="../assets/images/m1.jpg" className="card-img-top"style={{width:  '9rem' ,marginLeft:'6rem'}} />
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
        <Badge  bg="warning">
        Best Seller
      </Badge>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/2.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">Samsung 50 inch 4k uhd smart led tv with built-in receiver and remote control, black - ua50cu7000uxeg</p>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/r1.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">Oraimo Riff Smaller htmlFor ComhtmlFort True Wireless Earbuds, Black + 12 Months Local Warranty</p>
          <div className="d-inline-block">
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />
         </div>21   
         <span className="d-flex badge bg-danger"style={{width:  '7rem'}}> Limited time deal</span>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/2.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">Samsung 50 inch 4k uhd smart led tv with built-in receiver and remote control, black - ua50cu7000uxeg</p>
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
        <img src="../assets/images/11-.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text fw-bolder">Samsung Galaxy A04e Dual SIM Smartphone - 3GB RAM, 64GB Storage, LTE, Black - 1 year Warranty</p>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/22-.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">Soundcore a3991h11 by anker life p2i true wireless earbuds, ai-enhanced calls, 10mm drivers, 2 eq modes, 28h playtime with fast charging, bluetooth</p>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/33-.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">Redmi 12 Dual SIM, 4GB RAM, 128GB ROM - Midnight Black</p>
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

 
  <div className="d-grid gap-2">
    <button className="btn mt-4 mb-5" style={{backgroundColor: '#ebeaea', color: 'rgb(62, 110, 130)'}} type="button"><h5>See all results</h5></button></div>


      
    </Row>
      </Container>
      
    </div>
    </div>
  </>
  )
}
