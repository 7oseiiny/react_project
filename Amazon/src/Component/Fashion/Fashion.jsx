import Container from 'react-bootstrap/Container';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Slider from "react-slick";
import './Fashion.css'
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import './Fashion.css'
import { FaStar, FaRegStar } from "react-icons/fa6";
export default function Fashion() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

    ]
  };

  return (
    <>


      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <section className="col-xl-2 col-md-3 col-4 leftSide-fashion ps-xl-4 ps-1">
          <section className="leftSideSections pb-3 mt-4 ">
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
            
            <a href="#"  className='text-dark'>All Discounts</a>
            <a href="#"  className='text-dark'>Todays Deals</a>
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

        {/* Right side  */}
        < div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4 " >

          <h2 className="fw-bold fs-2">Fashion</h2>
          <div className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small mb-2" style={{ width: '100%', height: '80px' }}>
            <p className="h6 fw-bold ">Enjoy FREE delivery, exclusive deals, award-winning TV and more
              Join today</p>
            <button type="button" className="btn btn-warning btn-sm  ms-5 bootn">Try Prime FREE htmlFor 30 days</button>
          </div>
          <img src="../assets/images/o1.jpeg" className="img-fluid veiw" width="100%" />

          <h2 className="fw-bold fs-5 m-4">Fashion | Up to 60% off | Low Prices</h2>




          <div>
            <Slider {...settings}>


              <div className="card border-0" >
                <img src="../assets/images/o10.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Casio</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o11.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Men, & Women</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o22.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Kids Sleep Wear</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o13.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">EGP 139 and under</Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Stitch Socks</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o14.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 16% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Watches</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o19.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 24% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Men waer</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o16.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 20% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Men Pullovers</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o17.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 22% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Kida socks</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>

              <div className="card border-0" >
                <img src="../assets/images/o18.jpg" className="card-img-top" alt="..." style={{ width: '8rem', height: '12rem' }} />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 18% off </Badge> Deal
                  </p>
                  <p className='fw-bold '>Save on Levis women</p>
                  <img src="../assets/images/images.png" width="70px" height="25px" />
                </div>
              </div>
            </Slider>
          </div>

          <img src="../assets/images/o1o.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />
          <img src="../assets/images/o2.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />
          <img src="../assets/images/o3.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />
          <img src="../assets/images/qq1.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />
          <img src="../assets/images/o4.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />
          <img src="../assets/images/o5.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />


          <Container>
            <Row>
              <Col> <img src="../assets/images/oo1.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/oo2.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
            </Row>
            <Row>
              <Col> <img src="../assets/images/o7.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/o8.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/o9.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
            </Row>
            <Row>
              <Col> <img src="../assets/images/deep1.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep2.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep3.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep4.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep5.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep6.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>

            </Row>
            <Row>
              <Col> <img src="../assets/images/deep7.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep8.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep9.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep10.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep11.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/deep12.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>

            </Row>
          </Container>

          <img src="../assets/images/o5.jpg" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />

          <Container>
            <h3 className='text-center m-3'>Shop by Price</h3>
            <Row>
              <Col> <img src="../assets/images/za1.gif" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/za2.gif" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/za3.gif" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
              <Col> <img src="../assets/images/za4.gif" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} /></Col>
            </Row>
          </Container>

          <h3 className='text-center m-3'>Shop by brand</h3>
          <img src="../assets/images/many.PNG" className="img-fluid veiw" width="100%" style={{ marginBottom: '20px' }} />


          <div className="card mt-4">
            <div className="card-body">
              <p className="fw-normal">1-12 of over 50,000 results for  <span className="text-danger fw-bold">Fashion</span></p>
            </div>
          </div>


          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '17rem' }}>
                  <img src="../assets/images/a1.webp" className="card-img-top h-57 " />
                  <div className="d-inline-block">
                    <p className="card-text">White wipes</p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>21</h3>
                  </sub>00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '17rem' }}>
                  <img src="../assets/images/sa1.jpg" className="card-img-top h-57 " />
                  <div className="d-inline-block">
                    <p className="card-text">Black shoe</p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>200</h3>
                  </sub>00
                  </div>

                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '17rem' }}>
                  <img src="../assets/images/o21.jpg" className="card-img-top h-57 " />
                  <div className="d-inline-block">
                    <p className="card-text mt-5"> Black shoe </p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>1000</h3>
                  </sub>00
                  </div>
                </div>
              </div>
              {/* row 2  */}

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '15rem' }}>
                  <img src="../assets/images/a3.webp" className="card-img-top h-57 " />

                  <div className="d-inline-block">
                    <p className="card-text mt-1">Cap</p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>65</h3>
                  </sub>00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '15rem' }}>
                  <img src="../assets/images/a6.webp" className="card-img-top h-57 " />
                  <div className="d-inline-block">
                    <p className="card-text mt-2">SAVFOX Wallet</p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>230</h3>
                  </sub>00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card border-0" style={{ width: '20rem', height: '20rem' }}>
                  <img src="../assets/images/a7.webp" className="card-img-top h-57 " />
                  <div className="d-inline-block">
                    <p className="card-text mt-4">Storage Bags</p>
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStarFill color='#FFA41C' />
                    <BsStar color='#FFA41C' />
                  </div>
                  <div className="d-flex">EGP <sub>
                    <h3>199</h3>
                  </sub>00
                  </div>

                </div>
              </div>

              {/* 3 row  */}



              {/* 4 row   */}

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
