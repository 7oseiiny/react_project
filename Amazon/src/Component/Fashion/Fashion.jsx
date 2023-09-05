import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { useEffect } from 'react';
import $ from 'jquery';








$(document).ready(() => {
  const itemsMainDiv = '.MultiCarousel';
  const itemsDiv = '.MultiCarousel-inner';
  let itemWidth = '';

  $('.leftLst, .rightLst').click(function () {
    const condition = $(this).hasClass('leftLst');
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(() => {
    ResCarouselSize();
  });

  function ResCarouselSize() {
    let incno = 0;
    const dataItems = 'data-items';
    const itemClass = '.item';
    let id = 0;
    let btnParentSb = '';
    let itemsSplit = '';
    const sampwidth = $(itemsMainDiv).width();
    const bodyWidth = $('body').width();

    $(itemsDiv).each(function () {
      id += 1;
      const itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(',');
      $(this).parent().attr('id', `MultiCarousel${id}`);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[3];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }

      $(this).css({ transform: 'translateX(0px)', width: itemWidth * itemNumbers });
      $(this).find(itemClass).each(function () {
        $(this).outerWidth(itemWidth);
      });

      $('.leftLst').addClass('over');
      $('.rightLst').removeClass('over');
    });
  }

  function ResCarousel(e, el, s) {
    const leftBtn = '.leftLst';
    const rightBtn = '.rightLst';
    let translateXval = '';
    const divStyle = $(`${el} ${itemsDiv}`).css('transform');
    const values = divStyle.match(/-?[\d.]+/g);
    const xds = Math.abs(values[4]);

    if (e === 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(`${el} ${rightBtn}`).removeClass('over');

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(`${el} ${leftBtn}`).addClass('over');
      }
    } else if (e === 1) {
      const itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(`${el} ${leftBtn}`).removeClass('over');

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(`${el} ${rightBtn}`).addClass('over');
      }
    }

    $(`${el} ${itemsDiv}`).css('transform', `translateX(${-translateXval}px)`);
  }

  function click(ell, ee) {
    const Parent = `#${$(ee).parent().attr('id')}`;
    const slide = $(Parent).attr('data-slide');
    ResCarousel(ell, Parent, slide);
  }
});









export default function Fashion() {
  // useEffect(() => {
  //   const handleCarouselClick = () => {
  //     const currentCarousel = $(this).closest('.carousel');
  //     const carouselWidth = currentCarousel.find('.carousel-inner')[0].scrollWidth;
  //     const cardWidth = currentCarousel.find('.carousel-item').width();
  //     let scrollPosition = currentCarousel.find('.carousel-inner').scrollLeft();

  //     if ($(this).hasClass('carousel-control-next')) {
  //       if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
  //         console.log('next');
  //         scrollPosition += cardWidth;
  //         currentCarousel.find('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
  //       }
  //     } else {
  //       if (scrollPosition > 0) {
  //         console.log('prev');
  //         scrollPosition -= cardWidth;
  //         currentCarousel.find('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
  //       }
  //     }
  //   };

  //   $('.carousel-control-next, .carousel-control-prev').on('click', handleCarouselClick);

  //   return () => {
  //     $('.carousel-control-next, .carousel-control-prev').off('click', handleCarouselClick);
  //   };
  // }, []);

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

          {/* <div id="carouselExampleControls" className="carousel" data-bs-ride="false">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o10.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">
                      POpsockets popgrip - expanding stand an...
                    </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>322</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarHalf color='#FFA41C' />(2,703)
                    </div>


                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o11.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder"> POpsockets popgrip - expanding stand an...
                    </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>239</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                    <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarHalf color='#FFA41C' />(980)
                    </div>


                  </div>
                </div>

              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o12.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...</p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>239</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                    <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />(1,917)
                    </div>


                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o13.jpg." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...
                    </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>239</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                    <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStar  color='#FFA41C' />(584)
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o14.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...
                    </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>239</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                    <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarHalf color='#FFA41C' />
                      <BsStar  color='#FFA41C' />(582)
                    </div>

                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o15.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...</p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>322</h3></sub>00
                    </div>

                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="../assets/images/o16.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...
                    </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>239</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                    <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarFill color='#FFA41C' />
                      <BsStarHalf color='#FFA41C' />
                      <BsStar  color='#FFA41C' />(631)
                    </div>


                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="./Sources/8=.PNG" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an...</p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>233</h3></sub>00
                    </div>
                    <div className="d-inline-block">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-regular fa-star text-warning"></i>(428)
                    </div>


                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card" style={{ width: '13rem' }}>
                  <img src="./Sources/9=.PNG" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text fw-bolder">POpsockets popgrip - expanding stand an... </p>
                    <p>POpsockets</p>
                    <div className="d-flex">EGP<sub><h3>227</h3></sub>80
                    </div>
                    <div className="d-inline-block">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star-half-stroke text-warning"></i>(1,105)
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
          </div> */}






          <div className="container-fluid">
            <div className="row">
              <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <div className="MultiCarousel-inner">


                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="pad15">
                      <p className="lead">Multi Item Carousel</p>
                      <p>₹ 1</p>
                      <p>₹ 6000</p>
                      <p>50% off</p>
                    </div>
                  </div>
             
              
                </div>
                <button className="btn btn-primary leftLst"></button>
                <button className="btn btn-primary rightLst"></button>
              </div>
            </div>






          </div >


          {/* ending counteiner  */}
        </div>
      </div>








    </>
  )
}
