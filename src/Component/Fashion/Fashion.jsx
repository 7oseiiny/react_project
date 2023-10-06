import Container from "react-bootstrap/Container";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Slider from "react-slick";
import "./Fashion.css";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./Fashion.css";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
export default function Fashion() {
  const { t } = useTranslation();
  let language=useSelector((state)=>state.language.language)
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <LiftSide categoryId={"6518280c6cc9fe1018cc500d"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>

        {/* Right side  */}
        <div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4 ">
          <h2 className="fw-bold fs-2">{t("Fashion")}</h2>
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
           src={language=='en' ?"../assets/images/o1.jpeg":"../assets/images/fashionArabicImag.jpg"}
            className="img-fluid veiw"
            width="100%"
          />

          <h2 className="fw-bold fs-5 m-4">
            {t("Fashion")} | {t("Up to 60% off")} | {t("Low Prices")}
          </h2>

          <div>
            <Slider {...settings}>
              <div className="card border-0">
                <img
                  src="../assets/images/o10.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Casio</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o11.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Men, & Women</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o22.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 32% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Kids Sleep Wear</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o13.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">EGP 139 and under</Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Stitch Socks</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o14.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 16% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Watches</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o19.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 24% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Men waer</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o16.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 20% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Men Pullovers</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o17.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 22% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Kida socks</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>

              <div className="card border-0">
                <img
                  src="../assets/images/o18.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "8rem", height: "12rem" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bolder colorfont ">
                    <Badge bg="danger">Up to 18% off </Badge> Deal
                  </p>
                  <p className="fw-bold ">Save on Levis women</p>
                  <img
                    src="../assets/images/images.png"
                    width="70px"
                    height="25px"
                  />
                </div>
              </div>
            </Slider>
          </div>

          <img
            src="../assets/images/o1o.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/o2.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/o3.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/qq1.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/o4.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/o5.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <Container>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/oo1.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/oo2.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/o7.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/o8.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/o9.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep1.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep2.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep3.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep4.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep5.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep6.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep7.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep8.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep9.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep10.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep11.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/deep12.jpg"
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
          </Container>

          <img
            src="../assets/images/o5.jpg"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <Container>
            <h3 className="text-center m-3">{t("Shop by Price")}</h3>
            <Row>
              <Col>
                {" "}
                <img
                  src={language=="en"? "../assets/images/za1.gif":"../assets/images/price_fashion-AR_199.gif"}
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src={language=="en" ?"../assets/images/za2.gif":"../assets/images/price_fashion-AR_200-499.gif"}
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                src={language=="en" ?"../assets/images/za3.gif":"../assets/images/price_fashion-AR_500-899.gif"}
                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                src={language=="en" ?"../assets/images/za4.gif":"../assets/images/price_fashion-AR_900.gif"}

                  className="img-fluid veiw"
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
          </Container>

          <h3 className="text-center m-3">{t("Shop by brand")}</h3>
          <img
            src="../assets/images/many.PNG"
            className="img-fluid veiw"
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <div className="card mt-4">
            <div className="card-body">
              <p className="fw-normal">
                {t("1-12 of over 70,000 results for")}{" "}
                <span className="text-danger fw-bold">{t("Fashion")}</span>
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

              {/* 3 row  */}

              {/* 4 row   */}
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
