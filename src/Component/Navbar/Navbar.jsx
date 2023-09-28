import './Navbar.css'
import { MdLocationPin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>

      <div className="container-fluid px-0 bg-dark">
      <div className="row m-0 align-items-center justify-content-center">
          <div className="col-lg-2 col-sm-6  logo col-md-4 d-flex flex-wrap justify-content-between" >
              <img className="col-6" src="../assets/images/logoo1.png" alt="logo" />
            <div className="ps-3 col-lg-6 col-md-6 d-flex align-items-center">
              <div className=""><MdLocationPin color='white' size={20} /></div>
              <div className="text-white d-flex flex-column ps-2">
                <span className="text-white-50 fs-6">Deliver to</span>
                <span className="fw-bold fs-">EGYPT</span>
              </div>
            </div>

          </div>
          <div className="col-lg-5 col-sm-6 col-md-8  py-md-0 pe-0">
            <div className="search-container">
              <select className="search-select ">
                <option>All</option>
              </select>
              <input type="text" className="search-input " placeholder="Search Amazon for iti" />
              <div className="search-icon">
                <FaSearch />
              </div>

            </div>
          </div>
          <div className="col-lg-5 col-sm-12  col-md-12 col-xs-12">
            <ul className="list-unstyled  d-flex flex-wrap text-white align-items-center justify-content-between flex-column flex-sm-row flex-sm-justify-content-center">
              <li className="col-2 col-xs-6 justify-content-start">
                <div className="dropdown">
                  <a className="btn text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/images/egypt_round_icon_640.png" width="45px" alt="" />
                    EG
                  </a>
                  <ul className="dropdown-menu px-2 " aria-labelledby="dropdownMenuLink">
                    <li className="py-2">
                      <input type="radio" name="lang" id="ar" />
                      <img src="../assets/images/flag1.png" width="19px" alt="" />
                      <label htmlFor="ar">Arabic</label>
                    </li>
                    <li className="py-2">
                      <input type="radio" name="lang" id="fr" />
                      <img src="../assets/images/flag2.png" width="19px" alt="" />
                      <label htmlFor="fr">France</label>
                    </li>
                    <li className="py-2">
                      <input type="radio" name="lang" id="en" />
                      <img src="../assets/images/flag3.png" width="19px" alt="" />
                      <label htmlFor="en">English (US)</label>
                    </li>

                  </ul>
                </div>
              </li>
              <li className="col-4 col-xs-6">
                <div className="dropdown">
                  <a className="btn text-white dropdown-toggle text-start" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="fw-normal">Hello,sign in</span> <br />
                    <span className="fw-bolder">Account & Lists</span>
                  </a>

                  <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                    <button type="button" className="btn btn-warning text-center">Warning</button>
                    <h2>dsfghjk</h2>
                    <div className="d-flex w-600px">
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maxime
                          enim
                          cum nam dolor, incidunt quis iure maiores, dolore impedit
                          , hic sunt distinctio earum eaque officia perspiciatis tenetur
                          perferendis
                          porro.</p>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni nemo
                          suscipit, quia dicta odio, ratione quos illum omnis quis hic la
                          bore voluptatibus. Tempora expedita libero necessitatibus nesciunt quas
                          minima.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-2 col-xs-12 ">
                <div>
                  <span className="text-white-50 fs-6">Returns</span> <br />
                  <span className="fw-bold fs-">&Orders</span>
                </div>
              </li>
              <li className="col-3 col-xs-ms-2">
                <FaShoppingCart color='white' size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* sec nav bar */}
      <div className="container-fluid  navv p-2">
        <div className=" d-flex justify-content-between  ">
          <div className="d-flex flex-wrap">
            <NavLink className="links px-2" to="todayDeals" style={{ textDecoration: "none", }}>Today s Deals</NavLink>
            <NavLink className="links px-2" to="mobile" style={{ textDecoration: "none", }}>Mobile Phone</NavLink>
            <NavLink className="links px-2" to="electronics" style={{ textDecoration: "none", }}>Electronics</NavLink>
            <NavLink className="links px-2" to="fashion" style={{ textDecoration: "none", }}>Fashion</NavLink>
            <NavLink className="links px-2" to="videogames" style={{ textDecoration: "none", }}>VideoGames</NavLink>
            <NavLink className="links px-2" to="HomeProducts" style={{ textDecoration: "none", }}>Home</NavLink>
            <NavLink className="links px-2" to="prime" style={{ textDecoration: "none", }}>prime</NavLink>
            <NavLink className="links px-2" to="Monitor" style={{ textDecoration: "none", }}>Monitor</NavLink>
            <NavLink className="links" to="books" style={{ textDecoration: "none" }}>books</NavLink>

          </div>
          <div className=" text-white">Shop deals in Electronics</div>
        </div>

      </div>






    </>
  )
}

export default Navbar