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
        <div className="row m-0 align-items-center">
          <div className="col-12 col-md-2 logo d-flex flex-wrap">
            <img className="col-6" src="../assets/images/logoo1.png" alt="logo" />
            <div className="ps-3 col-6 d-flex align-items-center">
              <div className=""><MdLocationPin color='white' size={20} /></div>
              <div className="text-white d-flex flex-column ps-2">
                <span className="text-white-50 fs-6">Deliver to</span>
                <span className="fw-bold fs-">EGYPT</span>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 py-2 py-md-0 pe-0">
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
          <div className="col-12 col-md-4">
            <ul className="list-unstyled  d-flex flex-wrap text-white align-items-center justify-content-evenly m-0">
              <li className="col-2 justify-content-start m-0">
                <div className="dropdown">
                  <a className="btn text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./img/egypt_round_icon_640.png" width="20px" alt="" />
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
              <li className="col-5">
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
              <li className="col-2">
                <div>
                  <span className="text-white-50 fs-6">Returns</span> <br />
                  <span className="fw-bold fs-">&Orders</span>
                </div>
              </li>
              <li className="col-3">
                <FaShoppingCart color='white' size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* sec nav bar */}
      <div className="container-fluid  navv p-2">
        <div className=" d-flex justify-content-between  ">
          <div className="">
            <NavLink className="links" to="todayDeals" style={{ textDecoration: "none", marginLeft: '6px' }}>Today's Deals</NavLink>
            <NavLink className="links" to="mobile" style={{ textDecoration: "none", marginLeft: '6px' }}>Mobile Phone</NavLink>
            <NavLink className="links" to="electronics" style={{ textDecoration: "none", marginLeft: '6px' }}>Electronics</NavLink>
            <NavLink className="links" to="fashion" style={{ textDecoration: "none", marginLeft: '6px' }}>Fashion</NavLink>
            <NavLink className="links" to="videogames" style={{ textDecoration: "none", marginLeft: '6px' }}>VideoGames</NavLink>

          </div>
          <div className=" text-white">Shop deals in Electronics</div>
        </div>

      </div>






    </>
  )
}

export default Navbar