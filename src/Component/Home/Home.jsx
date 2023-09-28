import React from 'react'
import './home.css'

export default function Home() {
  return (
<>

<div className="w-80">
            <div className="section-main">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../assets/images/sec1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="w-80">
            <div className="row m-0 px-3 transform-x">
                <div className="col-12 col-md-6  col-lg-3 ">
                    <div className="card h-100 err1"  >
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Gaming Accessories</h5>
                            <div className="d-flex flex-wrap">
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/headset.jpg" alt="" />
                                    <span>Headsets</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                                    <span>Keyboard</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/mouse.jpg" alt="" />
                                    <span>Computer mice</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/chair.jpg" alt="" />
                                    <span>Chairs</span>
                                </div>


                            </div>
                            <a href="#" className="card-link">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 mt-md-0">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Get fit at home</h5>
                            <img className="w-100" src="../assets/images/message.jpg" alt="" />
                            <a href="#" className="card-link">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Health & Personal Care</h5>
                            <img className="w-100" src="../assets/images/brush.jpg" alt="" />
                            <a href="#" className="card-link">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                    <div className="card err1">
                        <div className="card-body bg-white pb-4 d-flex flex-column">
                            <h5 className="card-title">Sign in for the best experience</h5>

                            <button className="bg-warning w-100 rounded-3 py-1 fs-6 border-0">Sign in securly</button>

                        </div>
                    </div>
                    <div className="pt-3">

                        <img src="../assets/images/amazon_pack.jpg" className="w-100" alt="" />
                    </div>

                </div>
                <div className="col-12 col-md-6 mt-3 col-lg-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Shop by Category</h5>
                            <div className="d-flex flex-wrap">
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/lap.jpg" alt="" />
                                    <span>Computer &Acssosres</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/plystation.jpg" alt="" />
                                    <span>vido game</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/baby.jpg" alt="" />
                                    <span> Baby</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <img className="w-100" src="../assets/images/lol.jpg" alt="" />
                                    <span>Toyes & game</span>
                                </div>


                            </div>
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Dresses</h5>
                            <img className="w-100" src="../assets/images/dress.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Electronics
                            </h5>
                            <img className="w-100" src="../assets/images/camera.jpg" alt="" />
                            <a href="#" className="card-link">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Easy returns</h5>
                            <img className="w-100" src="../assets/images/rool.jpg" alt="" />
                            <a href="#" className="card-link">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Dresses</h5>
                            <img className="w-100" src="../assets/images/dress.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Shop activity trackers and smartwatche</h5>
                            <img className="w-100" src="../assets/images/watch.jpg" alt="" />
                            <a href="#" className="card-link">Show now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Deals in Tools and Home Improvement</h5>
                            <img className="w-100" src="../assets/images/tools.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Spring new arrivals</h5>
                            <img className="w-100" src="../assets/images/wem.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Home refresh ideas</h5>
                            <img className="w-100" src="../assets/images/ket.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Find your ideal TV</h5>
                            <img className="w-100" src="../assets/images/tvv.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1 ">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Shop school essentials</h5>
                            <img className="w-100" src="../assets/images/books.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-lg-3 mt-3 ">
                    <div className="card h-100 err1">
                        <div className="card-body justify-content-between d-flex flex-column">
                            <h5 className="card-title">Home & Kitchen Under $30</h5>
                            <img className="w-100" src="../assets/images/zoh.jpg" alt="" />
                            <a href="#" className="card-link">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>


{/* 
            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                    data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../assets/images/sec1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}

        </div>
    
    </>



  )
}
