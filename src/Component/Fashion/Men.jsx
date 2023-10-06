import React from "react";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import Container from "react-bootstrap/Container";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Fashion.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
export default function Men() {
  const { t } = useTranslation();
  let language= useSelector((state)=>state.language.language)
  return (
    <>
      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <LiftSide categoryId={"6518280c6cc9fe1018cc500d"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>
        {/* Right Side  */}
        <div className="col-10  sideRight justify-content-center align-content-center mt-4 ">
          <h2 className="fw-bold fs-2">{t("Men Fashion")}</h2>
          <div
            className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small mb-2"
            style={{ width: "100%", height: "80px" }}
          >
            <p className="h6 fw-bold ">
              {t("Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today")}
            </p>
            <button
              type="button"
              className="btn btn-warning btn-sm  ms-5 bootn"
            >
              {t("Try Prime FREE htmlFor 30 days")}
            </button>
          </div>
          <img
            src={language=='en'? "../assets/images/o1.jpeg":"../assets/images/fashionArabicImag.jpg"}
            className="img-fluid  mt-2"
            width="100%"
          />

          <img
            src="../assets/images/men1.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men2.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men3.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men4.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men5.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men6.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men7.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men8.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <Container>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr1.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr2.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr3.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr4.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
          </Container>

          <h3 className="text-center m-3">Shop by brand</h3>
          <img
            src="../assets/images/many.PNG"
            className="img-fluid "
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <div className="card mt-2">
            <div className="card-body">
              <p className="fw-normal">
                1-12 of over 30,000 results for{" "}
                <span className="text-warning fw-bold">Men</span>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "17rem" }}
                >
                  <img
                    src="../assets/images/a1.webp"
                    className="card-img-top h-57 "
                  />
                  <div className="d-inline-block">
                    <p className="card-text">White wipes</p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>21</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "17rem" }}
                >
                  <img
                    src="../assets/images/sa1.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="d-inline-block">
                    <p className="card-text">Black shoe</p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>200</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "17rem" }}
                >
                  <img
                    src="../assets/images/o21.jpg"
                    className="card-img-top h-57 "
                  />
                  <div className="d-inline-block">
                    <p className="card-text mt-5"> Black shoe </p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>1000</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>
              {/* row 2  */}

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "15rem" }}
                >
                  <img
                    src="../assets/images/a3.webp"
                    className="card-img-top h-57 "
                  />

                  <div className="d-inline-block">
                    <p className="card-text mt-1">Cap</p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>65</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "15rem" }}
                >
                  <img
                    src="../assets/images/a6.webp"
                    className="card-img-top h-57 "
                  />
                  <div className="d-inline-block">
                    <p className="card-text mt-2">SAVFOX Wallet</p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>230</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                <div
                  className="card border-0"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <img
                    src="../assets/images/a7.webp"
                    className="card-img-top h-57 "
                  />
                  <div className="d-inline-block">
                    <p className="card-text mt-4">Storage Bags</p>
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStarFill color="#FFA41C" />
                    <BsStar color="#FFA41C" />
                  </div>
                  <div className="d-flex">
                    EGP{" "}
                    <sub>
                      <h3>199</h3>
                    </sub>
                    00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn mt-4 mb-5"
              style={{ backgroundColor: "#ebeaea", color: "rgb(62, 110, 130)" }}
              type="button"
            >
              <h5>{t("See all results")}</h5>
            </button>
          </div>

          {/* ending counteiner  */}
        </div>
      </div>
    </>
  );
}
