import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
// import { BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
import './Fashion.css'
import Badge from 'react-bootstrap/Badge';



export default function Fashion() {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    slideToScroll: 1,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <>


      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <NavLink style={{ textDecoration: "none", marginLeft: '6px', color: 'black' }} to="/">Amazon Fashion</NavLink>
            <NavLink style={{ textDecoration: "none", marginLeft: '6px', color: 'black' }} to="kids">Kids & Baby</NavLink>
            <NavLink style={{ textDecoration: "none", marginLeft: '6px', color: 'black' }} to="men">Men</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <div className="col-2 sideLeft">
          <div className="col">
            <p className="h6 fw-bold">Eligible htmlFor free delivery</p>

            <li className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id="f1" />Free Shipping
              <label className="htmlForm-check-label stretched-link w-100" htmlFor="f1">
                All customers get FREE Shipping on orders shipped by Amazon</label>
            </li>
          </div>


          <ul className="list-group side">
            <br />
            <p className="h6 fw-bold">Category</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Fashion
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Men
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Women
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Girls
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Baby
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg> Boys
            </span>
            <p className="h6 fw-bold">Fulfilled by Amazon</p>
            <span>
              <input className="form-check-input me-0" type="checkbox" value="" id="g1" />
              Fulfilled by Amazon<label className="htmlForm-check-label stretched-link w-100 " htmlFor="g1"></label>
            </span>
          </ul>

          {/* Customer Review   */}

          <p className="h6 fw-bold">Color</p>

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


          <div>
            <p className="h6 fw-bold">Avg. Customer Review</p>
            <div className="d-inline-block">
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />

            </div><small className="fw-bold">Only</small>
          </div>
          <div>
            <div className="d-inline-block">
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStarFill color='#FFA41C' />
              <BsStar color='#FFA41C' />
            </div><small className="fw-bold">& Up</small>
          </div>
          <div>
            <div>
              <div className="d-inline-block">
                <BsStarFill color='#FFA41C' />
                <BsStarFill color='#FFA41C' />
                <BsStarFill color='#FFA41C' />
                <BsStar color='#FFA41C' />
                <BsStar color='#FFA41C' />
              </div><small className="fw-bold">& Up</small>
            </div>
          </div>
          <div>
            <div>
              <div className="d-inline-block">
                <BsStarFill color='#FFA41C' />
                <BsStarFill color='#FFA41C' />
                <BsStar color='#FFA41C' />
                <BsStar color='#FFA41C' />
                <BsStar color='#FFA41C' />
              </div><small className="fw-bold">& Up</small>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="d-inline-block">
                  <BsStarFill color='#FFA41C' />
                  <BsStar color='#FFA41C' />
                  <BsStar color='#FFA41C' />
                  <BsStar color='#FFA41C' />
                  <BsStar color='#FFA41C' />
                </div><small className="fw-bold">& Up</small>
              </div>
            </div>
          </div>
          {/* End  Customer Review   */}
        </div>
        {/* Right side  */}
        < div className="col-10  sideRight justify-content-center align-content-center " >

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
                  <img src="../assets/images/o10.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Casio</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o11.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Men, & Women</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o22.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Kids Sleep Wear</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o13.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">EGP 139 and under</Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Stitch Socks</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o14.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 16% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Watches</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o19.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 24% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Men waer</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o16.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 20% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Men Pullovers</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o17.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 22% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Kida socks</p>
                  </div>
                </div>
              
                <div className="card border-0" >
                  <img src="../assets/images/o18.jpg" className="card-img-top" alt="..."style={{ width: '8rem', height: '12rem' ,marginLeft:'65px'}}/>
                  <div className="card-body">
                    <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 18% off </Badge> Deal
                    </p>
                    <p className='fw-bold '>Save on Levi's women</p>
                  </div>
                </div>

            
                
            </Slider>
          </div>










          {/* ending counteiner  */}
        </div>
      </div>
    </>
  )
}
