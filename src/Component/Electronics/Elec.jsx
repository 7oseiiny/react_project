import "./Elec.css";
import Slider from "react-slick";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React from "react";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";

export default function Electronics() {
  const { t } = useTranslation();
  let language=useSelector((state)=>state.language.language)
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="row container-fluid">
       <LiftSide categoryId={"651dda72537875a0a0d4ba3e"} lessThan={50} between1={[50,100]} between2={[100,300]} between3={[700,2500]} greaterThan={2500}/>
        <div className="col-xl-10 col-md-9 col-8 sideRight container-fluid justify-content-center align-content-center">
          <div className="container-fluid">
            <div className="row">
              <h2 className="mt-2">{t("Electronics")}</h2>
              <img
                src={language=='en' ? "../assets/images/XCM_.jpg":"../assets/images/fashionArabicImag.jpg"}
                className="img-fluid"
                alt="..."
              />
              <div className="container-fluid my-2 joinPrime" id="joinPrime">
                <div className="row col-12 d-flex flex-md-row flex-column justify-content-center p-2">
                  <p className="col-md-5 me-2 fs-5">
                   {t("Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today")}
                  </p>
                  <button className="btn btn-warning col-md-2  fs-5 h-50">
                    {" "}
                    {t("Join Prime")}
                  </button>
                </div>
              </div>{" "}
              <img
                className="col-lg-6 col-md-12"
                src="../assets/images/1_EN.png"
                alt="..."
              />
              <img
                className="col-lg-6 col-md-12"
                src="../assets/images/2-EN.png"
                alt="..."
              />
              <hr className="mt-2" />
              <h3 className="mt-4 text-center">{t("SHOP BY CATEGORY")}</h3>
              <div className="mt-3">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/11.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="card-text text-center">
                          {t("Mobiles& Accessories")}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/22.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">{t("TVs")}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/33.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">{t("Headphones")}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/44.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">{t("Laptops")}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/55.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">
                          {t("PCs & accessories")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/66.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">{t("Speakers")}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <img src="../assets/images/818.jpg" className="mt-3 img-fluid" />
              <h3 className="mt-4 text-center">{t("FEATURED BRANDS")}</h3>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/88.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/77.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/99.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/66.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
              <img src="../assets/images/9=.jpg" className="mt-2 img-fluid" />
              <hr className="mt-3" />
              <h2>{t("Electronics")} | {t("New arrivals")}</h2>
              <hr />
              <Slider {...settings}>
                <div className="card border-0 ">
                  <img
                    src="../assets/images/Capture0.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Soundcore By Anker R50i True Wireless…
                    </p>
                    <span>Soundcore</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>1,109</h3>
                      </sub>
                      00
                    </div>
                    <span className="text-muted pt-3 text-decoration-line-through me-2">
                      {" "}
                      EGP1,399.00
                    </span>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (57)
                    </div>
                  </div>
                </div>
                <div className="card border-0 ">
                  <img
                    src="../assets/images/Capture1.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text-black">
                      Oraimo Smart watch OSW-16, BrightSilv…
                    </p>
                    <span>oriaimo</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>888</h3>
                      </sub>
                      00
                    </div>
                    <span className="text-muted pt-3 text-decoration-line-through me-2">
                      {" "}
                      EGP1,560.40
                    </span>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (9)
                    </div>
                  </div>
                </div>
                <div className="card border-0 m-3">
                  <img
                    src="../assets/images/Capture2.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      QUANXI M10 Wireless Bluetooth 5.1 Head…{" "}
                    </p>
                    <span>XFTOPSEXFTOPSE</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>278</h3>
                      </sub>
                      00
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (108)
                    </div>
                  </div>
                </div>

                <div className="card border-0">
                  <img
                    src="../assets/images/Capture3.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Portable Desk Fan with Night Light, 3… MOREKAMOREKA
                    </p>
                    <span>MOREKA</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>599</h3>
                      </sub>
                      00
                    </div>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarHalf color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                    <BsStar color="#FFA41C" /> <div> (10)</div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/Capture4.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Reioo 3M Original AirPods 3 Sm Original
                    </p>
                    <span>Reioo</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>540</h3>
                      </sub>
                      00
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (7)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/Capture6.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      HD Plus Glass Anti Shock with Black Fr…{" "}
                    </p>
                    <span>GenericGeneric</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>48</h3>
                      </sub>
                      07
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP65.00
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (8)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/777.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text fw-bolder">
                      iLock 3-way wall outlet adapter 350…
                    </p>
                    <span>iLOCK</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>33</h3>
                      </sub>
                      00
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (631)
                    </div>
                  </div>
                </div>
              </Slider>
              <h2 className="mt-4">{t("Electronics")} | {t("Best Sellers")}</h2>
              <hr />
              <Slider {...settings}>
                <div className="card border-0">
                  <img
                    src="../assets/images/111.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Adjustable Laptop Stand, Portable...
                    </p>
                    <span>MONADIKOS</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>125</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP130.00
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      (2,494)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/222.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Joyroom JR-BP560 Excellent Series Por…
                    </p>
                    <span>Joyroom</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>215</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP309.43
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStar color="#FFA41C" /> (130)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/333.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Hikvision 64 GB USB Flash Drive - HS-US…{" "}
                    </p>
                    <span>Hikvision</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>92</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP111.49
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      (10,917)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/444.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      iLOCK Travel Plug adapter Converter -…
                    </p>
                    <span>iLOCK</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>31</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP48.00
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (375)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/555.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Gp chargeable batteries - 1100 ma…
                    </p>
                    <span>GP</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>43</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP104.15
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (116)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/666.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      8.5 Inch digital drawing Tablet han…{" "}
                    </p>
                    <span>Newlight</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>60</h3>
                      </sub>
                      00
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        {" "}
                        EGP71.90
                      </span>
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (283)
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="../assets/images/777.PNG"
                    className="card-img-top1"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text fw-bolder">
                      iLock 3-way wall outlet adapter 350…
                    </p>
                    <span>iLOCK</span>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>33</h3>
                      </sub>
                      00
                    </div>
                    <div>
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      (631)
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="card mt-4">
                <div className="card-body">
                  <span>
                    {t("1-12 of over 70,000 results for")}{" "}
                    <span className="text-danger fw-bold">{t("Electronics")}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/1=.jpg"
                    className="card-img-top imgCard container-fluid justify-content-center align-content-center"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB
                      Storage, LTE, Black - 1 year Warranty
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      31
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>15,199</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP4,919.00
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Jul 31</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/1+.jpg"
                    className="card-img-top imgCard container-fluid justify-content-center align-content-center"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB
                      Storage, LTE, Black - 1 year Warranty
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      12
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>3,699</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP5,639.00
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Jul 31</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/11-.jpg"
                    className="card-img-top imgCard container-fluid justify-content-center align-content-center "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A24 Dual SIM, 4GB RAM, 128GB ROM, 4G LTE -
                      Silver
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      11
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>6,444</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP7,447.00
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Jul 31</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <hr />
                <div className="card" style={{ width: "21rem" }}>
                  <span className="bestSellerBadge2 card-subtitle ">
                    Best Seller
                  </span>
                  <img
                    src="../assets/images/2+.jpg"
                    className="card-img-top mt-5 container-fluid justify-content-center align-content-center imgCard"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung 50 inch 4k uhd smart led tv with built-in receiver
                      and remote control, black - ua50cu7000uxeg
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      19
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>10,899</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGPl1,299.40
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 1</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <span className="bestSellerBadge2 card-subtitle ">
                    Best Seller
                  </span>
                  <img
                    src="../assets/images/r1.jpg"
                    className="card-img-top container-fluid justify-content-center align-content-center imgcarrd"
                    style={{ marginTop: "8rem" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung 43 inch full hd smart led tv with built-in
                      receiver, black - ua43t5300auxeg, Wi-Fi
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                    </div>
                    21
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>599</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGPl,037.40
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 1</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/3+.jpg"
                    className="card-img-top container-fluid justify-content-center align-content-center imgCard mt-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A54 - Dual SIM Mobile Phone Android, 8GB
                      RAM, 256GB, 5G, Awesome White - 1 year Warranty
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      25
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>10,899</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGPl1,299.40
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 1</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <hr />
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/4+.jpg"
                    className="card-img-top mt-4 container-fluid justify-content-center align-content-center imgCard"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy Tab A7 Lite - 8.7 Inches Display, 3 GB RAM,
                      32 GB, 4G LTE, Grey - 1 year Warranty
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      21
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>3,399</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP4,9690
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 3</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <span className="bestSellerBadge2 card-subtitle ">
                    Best Seller
                  </span>

                  <img
                    src="../assets/images/22-.jpg"
                    className="card-img-top mt-5 container-fluid justify-content-center align-content-center imgCard"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Soundcore a3991h11 by anker life p2i true wireless
                      earbuds, ai-enhanced calls, 10mm drivers, 2 eq modes, 28h
                      playtime with fast charging, bluetooth
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />
                      131
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>1,089</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP1,540,01
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 4</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src="../assets/images/r1.jpg"
                    className="card-img-top my-5 container-fluid justify-content-center align-content-center imgcard"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung 40 inch full hd smart led tv with built-in
                      receiver, black
                    </p>
                    <div className="d-inline-block">
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarFill color="#FFA41C" />
                      <BsStarHalf color="#FFA41C" />
                      <BsStar color="#FFA41C" />4
                    </div>
                    <div className="d-flex">
                      EGP
                      <sub>
                        <h3>5,999</h3>
                      </sub>
                      00
                      <span className="pt-3 me-2">
                        List:{" "}
                        <span className="text-muted pt-3 text-decoration-line-through me-2">
                          {" "}
                          EGP11,299.40
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-start me-3">
                      <img
                        src="../assets/images/a.PNG"
                        style={{ width: "50px" }}
                      />
                      <h6>Get it as soon as tomorrow, Aug 4</h6>
                    </div>
                    <h6>Fulfilled by Amazon - FREE Shipping</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="btn mt-4 mb-5 seeAll" type="button">
                <h5>{t("See all results")}</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
