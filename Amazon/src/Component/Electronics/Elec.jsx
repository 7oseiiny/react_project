import './Elec.css'
import Slider from "react-slick";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";


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
          slidesToScroll: 3,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
     
    ]
  };
  return (
    <>
   <body>
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
    {/* <!-- <div className=""></div> --> */}
  <div className="col-2 mt-2 sideLeft"> 
    <div className="col">
      <p className="h6 fw-bold">Eligible htmlFor free delivery</p>

      <li className="list-group-item">
        <input className="htmlForm-check-input me-1" type="checkbox" value="" id="f1" />Free Shipping
        <label className="htmlForm-check-label stretched-link w-100" htmlFor="f1">
          All customers get FREE Shipping on orders shipped by Amazon</label>
      </li>
    </div>

    <ul className="list-group side">
      <br/>
      <h5 className=" fw-bold">Category</h5>
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
      <div>
        <h6 className="mt-4 fw-bold">Fulfilled by Amazon</h6>
        <span>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="g1" />
          Fulfilled by Amazon<label className="htmlForm-check-label stretched-link w-100" htmlFor="g1"></label>
        </span>
      </div>
      <div>
        <p className="h6 fw-bold">Brand</p>
        <span>
          <input className="htmlForm-check-input my-0 me-0" type="checkbox" value="" id="y5" />
          Other<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y5"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y6" />
          SAMSUNG<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y6"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y7" />
          HP<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y7"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y8" />
          Baseus<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y8"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y9" />
          Dell<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y9"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y10" />
          Spigen<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y10"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="y11" />
          JBL<label className="htmlForm-check-label stretched-link w-100 " htmlFor="y11"></label>
        </span>
      </div>
      <div>
        <p className="h6 fw-bold">Condition</p>
        <span>
          <label className="htmlForm-check-label stretched-link w-100 " htmlFor="g1">New</label>
          <label className="htmlForm-check-label stretched-link w-100 " htmlFor="g2">Used</label>
        </span>
      </div>
       <div>
        <h6 className="mt-4">Avg. Customer Review</h6>
        <div>
        <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />
            <BsStarFill color='#FFA41C' />

           Only
        </div>
        <div>
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStarFill color='#FFA41C' />
        <BsStar color='#FFA41C' />& up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />& Up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStarFill color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' />
          <BsStar color='#FFA41C' />& Up
        </div>
         <div>
         <BsStarFill color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />
         <BsStar color='#FFA41C' />
& up
        </div>
      </div>
      <div>
        <h6 className="mt-4">Price</h6>
        <ul style={{listStyle: 'none', paddingLeft: '0rem'}}>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>Up to 50 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>50 to 100 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>100 to 300 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>700 to 1500 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>1500 to 2500 EGP</a></li>
          <li><a href="#" style={{textDecoration: 'none', color: 'black'}}>2500 EGP & above</a></li>
        </ul>
        </div>
        <div>
          <h6 className="mt-4">Deals & Discounts</h6>
          <span>
            <label className="htmlForm-check-label stretched-link w-100 " htmlFor="g1">All Discounts</label>
            <label className="htmlForm-check-label stretched-link w-100 " htmlFor="g2">Today's Deals</label>
          </span>
        </div>

      <div>
        <h6 className="mt-4">Seller</h6>
        <span>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t8" />
          Amazon.eg<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t8"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t9" />
          دلع.موبايلك<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t9"></label>
          {/* <!-- <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t10" /> */}
          المعز.ستور <label className="htmlForm-check-label stretched-link w-100 " htmlFor="t10"></label> 
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t11" />
          High.Quality<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t11"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t12" />
          classNamey Phone<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t12"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t13" />
          Amazon Warehouse<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t13"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t14" />
          GOMAA STORE<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t14"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t" />
          Snap-Buy<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="tk" />
          Fekra.Store-DT<label className="htmlForm-check-label stretched-link w-100 " htmlFor="tk"></label>
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="tp" />
          M.H.M E.Commerce<label className="htmlForm-check-label stretched-link w-100 " htmlFor="tp"></label>
        </span>
      </div>
      <div>
        <h6 className="mt-3">Availability</h6>
        {/* <span> */}
          <input className="htmlForm-check-input me-0" type="checkbox" value="" id="t8"/>
          Include Out of Stock<label className="htmlForm-check-label stretched-link w-100 " htmlFor="t8"></label>
      </div>
     
<br/>


    </ul>
</div>
  <div className="col-10 sideRight">
  <div className="container">
    <div className="row">
      <h1>Electronics</h1>
      {/* <!-- <img src="../assets/images/2x.jpg" className="img-fluid" alt="..."> --> */}
      <img src="../assets/images/XCM_.jpg" className="img-fluid" alt="..."/>
      <img src="../assets/images/6.PNG" className=" mt-3 img-fluid" alt="..."/> 
      <img className="col-6 " src="../assets/images/1_EN.png" alt="..."/> 
      <img className="col-6 " src="../assets/images/2-EN.png" alt="..."/> 

      {/* <img className="mt-2 img-fluid" src="../assets/images/7.PNG" alt="..."/> */}
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/88.jpg" className="card-img-top"/>
            <div className="card-body">
              {/* <!-- <h3 className="card-text text-center">Joyroom</h4> --> */}
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/77.jpg" className="card-img-top"/>
            <div className="card-body">
              {/* <!-- <h3 className="card-text text-center">XO</h4> --> */}
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/99.jpg" className="card-img-top"/>
            <div className="card-body">
              {/* <!-- <h3 className="card-text text-center">Remax</h4> --> */}
            </div>
          </div></div>
          <div className="col">
          <div className="card  border-0" style={{width:  '18rem'}}>
            <img src="../assets/images/66.jpg" className="card-img-top"/>
            <div className="card-body">
               {/* <h3 className="card-text text-center">Aspor</h3>  */}
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
          <BsStar color='#FFA41C' />

            <div>
            (10)
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
</Slider>
<h2 className="mt-4">Electronics | Best Sellers</h2><hr/>
<div id="carouselExampleControls" className="carousel" data-bs-ride="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="card" style={{width:  '13rem'}}>
        <img src="../assets/images/111.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bolder">
            Adjustable Laptop Stand, Portable...
            </p>
          <p>MONADIKOS</p>
          <div className="d-flex">EGP<sub><h3>125</h3></sub>00 
            <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP130.00</span>
           </div>
          <div className="d-inline-block">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-regular fa-star text-warning"></i>(2,494)
         </div>     
                
              
              </div>
            </div>
  </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/222.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">Joyroom JR-BP560 Excellent Series Por…</p>
            <p>Joyroom</p>
            <div className="d-flex">EGP<sub><h3>215</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP309.43</span>

             </div>
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(130)
           </div>     
                  
                
                </div>
              </div>
              
      </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/333.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">Hikvision 64 GB USB Flash Drive - HS-US… </p>
            <p>Hikvision</p>
            <div className="d-flex">EGP<sub><h3>92</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP111.49</span>
            </div>
            
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(10,917)
           </div>     
                 
                
                </div>
              </div>
      </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/444.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">iLOCK Travel Plug adapter Converter -…
              </p>
            <p>iLOCK</p>
            <div className="d-flex">EGP<sub><h3>31</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP48.00</span>
            </div> 
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(375)
           </div>     
                </div>
              </div>
      </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/555.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">Gp chargeable batteries - 1100 ma…
              </p>
            <p>GP</p>
            <div className="d-flex">EGP<sub><h3>43</h3></sub>00 
              <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP104.15</span>
            </div> 
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(116)
           </div>     
                
                </div>
              </div>
      </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/666.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">8.5 Inch digital drawing Tablet han… </p>
            <p>Newlight</p>
            <div className="d-flex">EGP<sub><h3>60</h3></sub>00 
               <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP71.90</span>
             </div>
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(283)
           </div>     
                  
                
                </div>
              </div>
      </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/777.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">iLock 3-way wall outlet adapter 350…
               </p>
            <p>iLOCK</p>
            <div className="d-flex">EGP<sub><h3>33</h3></sub>00 
             </div>
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(631)
           </div>     
                  
                
                </div>
              </div>
      </div>
      
        <div className="carousel-item">
          <div className="card" style={{width:  '13rem'}}>
            <img src="../assets/images/888.PNG" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text fw-bolder">LG LED Smart TV 43 inch LM6370 Series Full HD HDR Smart LED TV - 43LM6370PVA </p>
              <p>LG</p>
              <div className="d-flex">EGP<sub><h3>8,666</h3></sub>00 
                 <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP8,999</span>
               </div>
              <div className="d-inline-block">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-regular fa-star text-warning"></i>(128)
             </div>     
                    
                  
                  </div>
                </div>
        </div>
      <div className="carousel-item">
        <div className="card" style={{width:  '13rem'}}>
          <img src="../assets/images/999.PNG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bolder">Kingston 64GB Exodia USB 3.20 Flash - DTX/64GB </p>
            <p>Kingston</p>
            <div className="d-flex">EGP<sub><h3>127</h3></sub>80 
               <span className="text-muted pt-3 text-decoration-line-through me-2"> EGP234.00</span>
             </div>
            <div className="d-inline-block">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning"></i>(34,105)
           </div>     
                  
                
                </div>
              </div>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#TodayDealsCarousel" data-bs-slide="prev">
    <i className="rounded-2 p-2 fa-solid fa-angle-left shadow"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#TodayDealsCarousel" data-bs-slide="next">
    <i className="rounded-2 p-2 shadow fa-solid fa-angle-right"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="card mt-4">
  <div className="card-body">
    <p className="fw-normal">1-12 of over 70,000 results for <span className="text-danger fw-bold">Electronics</span></p>
  </div>
  </div>
  </div>		
</div>
   
<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/best.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="text-center">
            <input type="radio" style={{width: '25px',height: '25px', accentColor: 'black'}} checked/>
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(88, 65, 65)'}} checked/>
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(159, 159, 159)'}} checked/>
          </div>
          <p className="card-text fw-bolder">SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB Storage, LTE, Black - 1 year Warranty</p>
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
                <img src="../assets/images/a.PNG" style={{width:'50px'}}/><h6>Get it as soon as tomorrow, Jul 31</h6> 
                </div>
                <h6>Fulfilled by Amazon - FREE Shipping</h6>
              </div>
          

             
            </div>
      </div>
    

    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/1.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="text-center">
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'black'}} checked/>
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(201, 201, 208)'}} checked/>
          </div>
          <p className="card-text fw-bolder">SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB Storage, LTE, Black - 1 year Warranty</p>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/3.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="text-center">
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(201, 201, 208)'}} checked/>
            <input type="radio" style={{width: '25px', height: '25px', accentColor: 'black'}} checked/>
          </div>
          <p className="card-text fw-bolder">Samsung Galaxy A24 Dual SIM, 4GB RAM, 128GB ROM, 4G LTE - Silver</p>
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
      <div className="card" style={{width:  '22rem'}}>
        <img src="../assets/images/11-.PNG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className="text-center">
          <input type="radio" style={{width: '25px', height: '25px', accentColor: 'black'}} checked/>
          <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(163, 163, 205)'}} checked/>
          <input type="radio" style={{width: '25px', height: '25px', accentColor: 'rgb(118, 86, 86)'}} checked/>
        </div>
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

  </div>
  <div className="d-grid gap-2">
    <button className="btn mt-4 mb-5" style={{backgroundColor: '#ebeaea', color: 'rgb(62, 110, 130)'}} type="button"><h5>See all results</h5></button></div>
</div></div>
</div>

<div className="container-fluid m-0 p-0">
  <section className="section_container">
    <div className="container-fluid back-top btn cursor-pointer p-3 mt-1 text-center text-light  ">
      <a className="back-to-top text-decoration-none text-light " href="#">Back to top</a>
    </div>
  </section>
  {/* <!-- First Footer --> */}
  <footer className="first-footer-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <p className="footer-column  text-light">Get to Know Us</p>
          <ul className="footer-ul p-0">
            <li className="footer-li"><a className="footer-link" href="#">Careers</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Blog</a></li>
            <li className="footer-li"><a className="footer-link" href="#">About Amazon</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Investor Relations</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Amazon Devices</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Amazon Tours</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="footer-column  text-light">Make Money with Us</p>
          <ul className="footer-ul p-0">
            <li className="footer-li"><a className="footer-link" href="#">Sell products on Amazon</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Sell apps on Amazon</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Become an Affiliate</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Advertise Your Products</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Self-Publish with Us</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Host an Amazon Hub</a></li>
            <li className="footer-li"><a className="footer-link" href="#">See More Make Money with Us</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="footer-column  text-light">Amazon Payment Products</p>
          <ul className="footer-ul p-0">
            <li className="footer-li"><a className="footer-link" href="#">Amazon Business Card</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Shop with Points</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Reload Your Balance</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="footer-column  text-light">Let Us Help You</p>
          <ul className="footer-ul p-0">
            <li className="footer-li"><a className="footer-link" href="#">Amazon and COVID-19</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Your Account</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Your Orders</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Shipping Rates & Policies</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Returns & Replacements</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Manage Your Content and Devices</a>
            </li>
            <li className="footer-li"><a className="footer-link" href="#">Amazon Assistant</a></li>
            <li className="footer-li"><a className="footer-link" href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-line">
    </div>
    <div className="container amazon-footer-logo-area p-4">
      <div className="row pt-2 pb-2 justify-content-center text-center">
        <div className="col-md-5 footer-lg-img">
          <img src="../img/image20.png" alt="amazon logo"/>
        </div>
        <div className="col-md-7 icons d-flex gap-2 text-center ">
          <div className="border btn m-0 p-0">
            <p className="english btn text-light">English</p>
          </div>
          <div className="border btn m-0 p-0">
            <p className="btn m-0 p-0  text-light">$ USD - U.S. Dollar</p>
          </div>
          <div className="border btn m-0 p-0 ">
            <div className="d-flex text-center p-0">
              <img className="p-1" src="../img/us.png" alt="USA LOGO" width="30rem" height="20rem"/>
              <p className="text-light text-center">United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* <!-- Second Foot… --> */}
  <footer className="second-footer-sec pt-5 pb-5">
    <div className="container text-decoration-none">
      <div className="row">
        <div className="col">
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Music</span><br/>
              <span className="second-title-footer">Stream millions <br/> of songs</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Alexa</span><br/>
              <span className="second-title-footer">Actionable Analytics <br/> htmlFor the Web</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Rapids</span><br/>
              <span className="second-title-footer">Fun stories htmlFor <br/> kids on the go</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">CreateSpace</span><br/>
              <span className="second-title-footer">Indie Print Publishing <br/> Made Easy</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">IMDbPro</span><br/>
              <span className="second-title-footer">Get Info Entertainment <br/> Professionals Need</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Ring</span><br/>
              <span className="second-title-footer">Smart Home <br/> Security Systems</span>
            </a>
          </div>
        </div>
        <div className="col">

          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Advertising</span><br/>
              <span className="second-title-footer">Find, attract, and <br/> engage customers</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Sell on Amazon</span><br/>
              <span className="second-title-footer">Start a Selling <br/> Account</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Web Services</span><br/>
              <span className="second-title-footer">Scalable Cloud <br/> Computing Services</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">DPReview</span><br/>
              <span className="second-title-footer">Digital <br/> Photography</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Kindle Direct Publishing</span><br/>
              <span className="second-title-footer">Indie Digital Publishing <br/> Made Easy</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">eero WiFi</span><br/>
              <span className="second-title-footer">Stream 4K Video<br/> in Every Room</span>
            </a>
          </div>

        </div>
        <div className="col">

          <div className="footer-section-column mb-4 text-left">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Drive</span><br/>
              <span className="second-title-footer">Cloud storage <br/> from Amazon</span>
            </a>
          </div>
          <div className="footer-section-column mb-4 text-light">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Business</span><br/>
              <span className="second-title-footer">Everything htmlFor<br/> Your Business</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Audible</span><br/>
              <span className="second-title-footer">Listen to Books & Original<br/> Audio
                PerhtmlFormances</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">East Dane</span><br/>
              <span className="second-title-footer">Designer Men's<br/> Fashion</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Prime Video Direct</span><br/>
              <span className="second-title-footer">Video Distribution<br/> Made Easy</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Neighbors App </span><br/>
              <span className="second-title-footer">Real-Time Crime<br/> & Safety Alerts</span>
            </a>
          </div>

        </div>
        <div className="col">

          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">6pm</span><br/>
              <span className="second-title-footer">Score deals<br/> on fashion brands</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">AmazonGlobal</span><br/>
              <span className="second-title-footer">Ship Orders<br/> Internationally</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Book Depository</span><br/>
              <span className="second-title-footer">Books With Free<br/> Delivery Worldwide</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Fabric</span><br/>
              <span className="second-title-footer">Sewing, Quilting<br/> & Knitting</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Shopbop</span><br/>
              <span className="second-title-footer">Designer<br/> Fashion Brands</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Subscription Boxes</span><br/>
              <span className="second-title-footer">Top subscription boxes – right to your door</span>
            </a>
          </div>

        </div>
        <div className="col">

          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">AbeBooks</span><br/>
              <span className="second-title-footer">Books, art<br/> & collectibles</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Home Services</span><br/>
              <span className="second-title-footer">Experienced Pros<br/> Happiness Guarantee</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Box Office Mojo</span><br/>
              <span className="second-title-footer">Find Movie<br/> Box Office Data</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Goodreads</span><br/>
              <span className="second-title-footer">Book reviews<br/> & recommendations</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Woot!</span><br/>
              <span className="second-title-footer">Deals and <br/> Shenanigans</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">PillPack</span><br/>
              <span className="second-title-footer">Pharmacy Simplified</span>
            </a>
          </div>

        </div>
        <div className="col">

          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">ACX </span><br/>
              <span className="second-title-footer">Audiobook Publishing<br/> Made Easy</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Ignite</span><br/>
              <span className="second-title-footer">Sell your original<br/> Digital Educational</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">ComiXology</span><br/>
              <span className="second-title-footer">Thousands of<br/> Digital Comics</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">IMDb</span><br/>
              <span className="second-title-footer">Movies, TV<br/> & Celebrities</span>
            </a>
          </div>
          <div className="footer-section-column mb-4">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Zappos</span><br/>
              <span className="second-title-footer">Shoes &<br/> Clothing</span>
            </a>
          </div>
          <div className="footer-section-column">
            <a href="#" className="second-footer-link">
              <span className="first-title-footer">Amazon Second Chance</span><br/>
              <span className="second-title-footer">Pass it on, trade it in,<br/> give it a second
                life</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
</body>
    </>
  )
  }