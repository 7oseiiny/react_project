import "./Mobile.css";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
export default function Mobile() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
  return (
    <>
      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        
          <LiftSide
            categoryId={"651827dc6cc9fe1018cc5009"}
            lessThan={999}
            between1={[1000, 1999]}
            between2={[2000, 2999]}
            between3={[3000, 4999]}
            greaterThan={5000}
          />
        {/* Right Side  */}
        <div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4">
          <h2 className="fw-bold fs-2">{t("Cell Phones")}</h2>
          <img
            src={
              language == "en"
                ? "../assets/images/ha.jpg"
                : "../assets/images/videoGamesMainIamages.jpg"
            }
            className="img-fluid veiw"
            width="100%"
          />
          <div
            className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small "
            style={{ width: "100%", height: "80px" }}
          >
            <p className="h6 fw-bold">
              {t(
                "Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today"
              )}
            </p>
            <button
              type="button"
              className="btn btn-warning btn-sm  ms-5 bootn"
            >
              {t("Try Prime FREE htmlFor 30 days")}
            </button>
          </div>
          <div>
            <p
              className="h1 fw-bold text-center mt-5 heading "
              style={{ color: "blueviolet" }}
            >
              {t("Flagship brands")}
            </p>
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
                <div className="row ps-1 ps-md-0">
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
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/17.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB
                      Storage, LTE, Black - 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>6,444</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP7,447.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/10.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB
                      Storage, LTE, Black, 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3> 3,699</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP5,639.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/10.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB
                      Storage, LTE, Black, 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3> 3,699</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP5,639.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>
              {/* row 2  */}
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/12.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB
                      Storage, LTE, Black, 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>3,099</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP4,529.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/16.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      SAMSUNG Galaxy A04 Dual SIM Smartphone- 4GB RAM, 64GB
                      Storage, LTE, Black, 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>3,399</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP4,969.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/18.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A73 Android Smartphone, Dual SIM, 8GB RAM,
                      256GB Storage, 5G, Awesome White - 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>17,950</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP20,850.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 row  */}
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/13.jpg"
                    className="card-img-top h-75 w-75 ms-3 ps-5"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Nokia 106 Dual Sim, black , 256GB Storage, 5G, Awesome - 1
                      year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>600</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP859.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/15.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A04s, Dual SIM, 4GB RAM, 128GB Storage,
                      LTE, Black - 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>4,799</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP5,276.00
                      </span>
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/19.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A23 Dual SIM, 4GB RAM, 128GB 4G - Blue - 1
                      year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>6,199</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP6,691.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>
              {/* 4 row   */}
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/ee.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A73 Android Smartphone, Dual SIM, 8GB RAM,
                      256GB Storage, 5G, Awesome White - 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>17,950</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP20,850.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/17.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A24 5G Android Smartphone, Dual SIM, 6GB
                      RAM, 128GB Storage, Silver
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-regular fa-star text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>7,474</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP7,890.00
                      </span>{" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src="../assets/images/12.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Samsung Galaxy A14 LTE, 128GB Storage, 4GB RAM, Silver,
                      Dual SIM, Android Smartphone - 1 year Warranty
                    </p>
                  </div>
                  <div className="d-inline-block">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3> 5,400</h3>
                    </sub>
                    00
                    <span className="pt-3 me-2">
                      List:
                      <span className="text-muted pt-3 text-decoration-line-through me-2">
                        EGP5,999.00
                      </span>
                    </span>
                  </div>
                  <div className="d-flex align-items-start me-3">
                    <img
                      src="../assets/images/images.png"
                      width="80px"
                      height="25px"
                    />
                    <p>
                      Get it as soon as <b>tomorrow, Jul 31</b>
                      Fulfilled by Amazon - FREE Shipping
                    </p>
                  </div>
                </div>
              </div>
              {/* end cards htmlFor phones  */}
            </div>
          </div>

          {/* End right side  */}
        </div>
      </div>

      {/* <script src="bootstrap-5.3.0-dist/js/bootstrap.bundle.min.js"></script> */}
    </>
  );
}
