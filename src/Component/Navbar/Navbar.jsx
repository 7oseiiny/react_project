import "./Navbar.css";
import { MdLocationPin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "../../../store/Slice/LanguageSlice";
import { getFilteredList } from "../../../store/Slice/filteredList";
import axiosInstance from "../../axiosConfig/instance";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  let { t, i18n } = useTranslation();
  let language = useSelector((state) => state.language.language);
  let [searchText, setSearchText] = useState("");
  let dispatch = useDispatch();
  let [category, setCategory] = useState([]);
  let handleLessThanReg=/^(lessThan|less Than|ارخص من)\s+(\d+)$/i;
  let match=searchText.match(handleLessThanReg);
  let handleGreaterThanReg=/^(greaterThan|greater Than|اغلي من)\s+(\d+)$/i;
  let matchGreater=searchText.match(handleGreaterThanReg);
  let discountRegEx=/^(discount|خصم اكبر من |خصم)\s+(\d+)$/i;
  let matchDiscount=searchText.match(discountRegEx);
  useEffect(function () {
    axiosInstance
      .get("category")
      .then((data) => {
        setCategory(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let [searchCategory, setSearchCategory] = useState();
  function logValue(e) {
    console.log(e.target.value);
    let selectedCategory = category.find(
      (item) => item.name_en == searchCategory
    );
    if (selectedCategory) {
      let categoryId = selectedCategory._id;
      console.log(categoryId);
    }
    setSearchCategory(e.target.value);
  }

  function handleSearch() {
    console.log(searchCategory);
    if (searchCategory == "all") {
      if(searchText.match(handleLessThanReg)){
        let price=match[2];
        axiosInstance
        .get(`searchAll/lessThan/${price}`)
        .then((data) => {
          dispatch(getFilteredList(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
      }else if(matchGreater){
        let price=matchGreater[2];
        axiosInstance
        .get(`searchAll/greaterThan/${price}`)
        .then((data) => {
          dispatch(getFilteredList(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
      }else if(matchDiscount){
        let discount=matchDiscount[2];
        axiosInstance
        .get(`searchAll/discount/${discount}`)
        .then((data) => {
          dispatch(getFilteredList(data.data));
        })
        .catch((err) => {
          console.log(err);
        });

      }else if(searchText){
        axiosInstance
        .get(`searchAll/${searchText}`)
        .then((data) => {
          dispatch(getFilteredList(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        axiosInstance
        .get("product")
        .then((data) => {
          dispatch(getFilteredList(data.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
      }
    } else {
      let selectedCategory = category.find(
        (item) => item.name_en == searchCategory
      );
      if (selectedCategory) {
        let categoryId = selectedCategory._id;
        if(matchGreater){
          let price=matchGreater[2];
          axiosInstance
          .get(`searchByCategory/${categoryId}/greaterThan/${price}`)
          .then((data) => {
            dispatch(getFilteredList(data.data));
          })
          .catch((err) => {
            console.log(err);
          });
        }else if(match){
          let price=match[2];
          axiosInstance
          .get(`searchByCategory/${categoryId}/lessThan/${price}`)
          .then((data) => {
            dispatch(getFilteredList(data.data));
          })
          .catch((err) => {
            console.log(err);
          });
        }else if(matchDiscount){
          let discount=matchDiscount[2];
          axiosInstance
          .get(`searchByCategory/${categoryId}/discount/${discount}`)
          .then((data) => {
            dispatch(getFilteredList(data.data));
          })
          .catch((err) => {
            console.log(err);
          });
        }else if(searchText){
          axiosInstance
          .get(`searchByCategory/${categoryId}/${searchText}`)
          .then((data) => {
            dispatch(getFilteredList(data.data));
          })
          .catch((err) => {
            console.log(err);
          });
        }else{
          axiosInstance
          .get(`category/${categoryId}`)
          .then((data) => {
            dispatch(getFilteredList(data.data.data.products));
          })
          .catch((err) => {
            console.log(err);
          });
        }
      }
    }
  }

  useEffect(() => {
    dispatch(getLanguage(i18n.language));
  }, [i18n.language, dispatch, language]);
  return (
    <>
      <div className="container-fluid px-0 bg-dark">
        <div className="row m-0 align-items-center justify-content-center">
          <div className="col-lg-2 col-sm-6  logo col-md-4 d-flex flex-wrap justify-content-between">
            <NavLink to={"/"} className="col-6">
              <img
                className="col-12"
                src="../assets/images/logoo1.png"
                alt="logo"
              />
            </NavLink>
            <div className="ps-3 col-lg-6 col-md-6 d-flex align-items-center">
              <div className="">
                <MdLocationPin color="white" size={20} />
              </div>
              <div className="text-white d-flex flex-column ps-2">
                <span className="text-white-50 fs-6">{t("Deliver To")}</span>
                <span className="fw-bold fs-">{t("Egypt")}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-6 col-md-8  py-md-0 pe-0">
            <div className="search-container">
              {location.pathname == "/" && (
                <select className="search-select" onClick={(e) => logValue(e)}>
                  (
                  <option value={"all"} selected={true}>
                    {t("all")}
                  </option>
                  )
                  {category.map((item) => {
                    return (
                      <option key={item._id} value={item.name_en}>
                        {item.name_en}
                      </option>
                    );
                  })}
                </select>
              )}
              {location.pathname !== "/" && (
                <select className="search-select" onClick={(e) => logValue(e)}>
                  {location.pathname == "/HomeProducts" ? (
                    <option value={"Home and Kitchen"}>
                      {"Home and Kitchen"}
                    </option>
                  ) : location.pathname == "/HomeProducts/Decor" ? (
                    <option value={"Home and Kitchen"}>
                      {"Home and Kitchen"}
                    </option>
                  ) : location.pathname == "/todayDeals" ? (
                    <option selected value={"Today Deals"}>
                      Today Deals
                    </option>
                  ) : location.pathname == "/mobile" ? (
                    <option selected value={"Mobile Phones"}>
                      {t("Mobile Phones")}
                    </option>
                  ) : location.pathname == "/fashion" ? (
                    <option selected value={"Fashion"}>
                      {t("Fashion")}
                    </option>
                  ) : location.pathname == "/videogames" ? (
                    <option selected value={"video Games"}>
                      {t("VideoGames")}
                    </option>
                  ) : location.pathname == "/Monitor" ? (
                    <option selected value={"Monitors"}>
                      {t("Monitor")}
                    </option>
                  ) : location.pathname == "/books" ? (
                    <option selected value={"books"}>
                      {t("books")}
                    </option>
                  ) : location.pathname == "/electronics" ? (
                    <option selected value={"Electronics"}>
                    {t("Electronics")}
                    </option>
                  ) : (
                    ""
                  )}
                </select>
              )}
              <input
                type="text"
                className="search-input "
                placeholder="Search Amazon for iti"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="search-icon">
                <FaSearch onClick={handleSearch} />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12  col-md-12 col-xs-12">
            <ul className="list-unstyled  d-flex flex-wrap text-white align-items-center justify-content-between flex-column flex-sm-row flex-sm-justify-content-center">
              <li className="col-2 col-xs-6 justify-content-start">
                <div className="dropdown">
                  <a
                    className="btn text-light dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/egypt_round_icon_640.png"
                      width="45px"
                      alt=""
                    />
                    EG
                  </a>
                  <ul
                    className="dropdown-menu px-2 "
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li className="py-2">
                      <input
                        type="radio"
                        name="lang"
                        id="ar"
                        onClick={() => {
                          i18n.changeLanguage("ar");
                        }}
                      />
                      <img
                        src="../assets/images/flag1.png"
                        width="19px"
                        alt=""
                      />
                      <label htmlFor="ar">Arabic</label>
                    </li>
                    <li className="py-2">
                      <input type="radio" name="lang" id="fr" />
                      <img
                        src="../assets/images/flag2.png"
                        width="19px"
                        alt=""
                      />
                      <label htmlFor="fr">France</label>
                    </li>
                    <li className="py-2">
                      <input
                        type="radio"
                        name="lang"
                        id="en"
                        onClick={() => {
                          i18n.changeLanguage("en");
                        }}
                      />
                      <img
                        src="../assets/images/flag3.png"
                        width="19px"
                        alt=""
                      />
                      <label htmlFor="en">English (US)</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="col-4 col-xs-6">
                <div className="dropdown">
                  <a
                    className="btn text-white dropdown-toggle text-start"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fw-normal">{t("Hello,sign in")}</span>{" "}
                    <br />
                    <span className="fw-bolder">{t("Account & Lists")}</span>
                  </a>

                  <div
                    className="dropdown-menu text-center"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <button
                      type="button"
                      className="btn btn-warning text-center w-50 "
                    >
                      <Link
                        className="btn btn-none text-dark fw-bold "
                        to="/login"
                        style={{ textDecoration: "none" }}
                      >
                        {t("Sign in")}
                      </Link>
                    </button>
                    <br />
                    <small>
                      {t("New customer")}
                      <Link
                        className="btn btn-none text-primary "
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                        {t("Start here.")}
                      </Link>{" "}
                    </small>
                    <div className="d-flex w-600px text-center">
                      <div>
                        <h5>{t("Your Lists")}</h5>
                        <Link
                          className="btn btn-none"
                          to="/"
                          style={{ textDecoration: "none", textColor: "black" }}
                        >
                          {t("Create a List")}
                        </Link>
                      </div>
                      <div>
                        <h5>{t("Your Account")}</h5>
                        <Link
                          className="btn btn-none"
                          to="/"
                          style={{ textDecoration: "none", textColor: "black" }}
                        >
                          {t("Your Account")}
                        </Link>
                        <br />
                        <Link
                          className="btn btn-none"
                          to="/"
                          style={{ textDecoration: "none", textColor: "black" }}
                        >
                          {t("Your Orders")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-2 col-xs-12 ">
                <div>
                  <span className="text-white-50 fs-6">{t("Returns")}</span>{" "}
                  <br />
                  <span className="fw-bold fs-">{t("Orders")}</span>
                </div>
              </li>
              <li className="col-3 col-xs-ms-2">
                <NavLink
                  className="links"
                  to="cart"
                  style={{ textDecoration: "none" }}
                >
                  <FaShoppingCart to="cart" color="white" size={25} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* sec nav bar */}
      <div className="container-fluid  navv p-2">
        <div className=" d-flex justify-content-between  ">
          <div className="d-flex flex-wrap">
            <NavLink
              className="links px-2"
              to="todayDeals"
              style={{ textDecoration: "none" }}
            >
              {t("todayDeals")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="mobile"
              style={{ textDecoration: "none" }}
            >
              {t("Mobile Phone")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="electronics"
              style={{ textDecoration: "none" }}
            >
              {t("Electronics")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="fashion"
              style={{ textDecoration: "none" }}
            >
              {t("Fashion")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="videogames"
              style={{ textDecoration: "none" }}
            >
              {t("VideoGames")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="HomeProducts"
              style={{ textDecoration: "none" }}
            >
              {t("Home")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="prime"
              style={{ textDecoration: "none" }}
            >
              {t("prime")}
            </NavLink>
            <NavLink
              className="links px-2"
              to="Monitor"
              style={{ textDecoration: "none" }}
            >
              {t("Monitor")}
            </NavLink>
            <NavLink
              className="links"
              to="books"
              style={{ textDecoration: "none" }}
            >
              {t("books")}
            </NavLink>
          </div>
          <div className=" text-white">{t("Shop deals in Electronics")}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
