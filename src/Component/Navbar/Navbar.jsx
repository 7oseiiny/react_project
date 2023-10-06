import './Navbar.css'
import { MdLocationPin } from "react-icons/md";
import { ImHeart } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../../store/Slice/cartSlice';
import { useContext } from 'react';
import { AuthContext } from '../../Context/user-auth';
import { fetchuser } from '../../../store/Slice/userSlice';
import { fetchfavorite } from '../../../store/Slice/favorite';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Navbar() {
  const { setIslogged } = useContext(AuthContext);

  let user = useSelector((state) => { return state.user.data })
  // console.log(user);


  // for (const item of items ) { totalItems += item.quantity }



  var items = useSelector((state) => { return state.cart.data })
  var fav = useSelector((state) => { try { return state.favorite.data.productId } catch { } })
  let [totalItems, settotalItems] = useState(0)
  let [totalItems_fav, settotalItems_fav] = useState(0)

  try {
    for (const item of items) { totalItems += item.quantity }

  } catch (err) { console.log(err) }


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
    dispatch(fetchuser())
    dispatch(fetchfavorite())

  }, [dispatch])

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
                    <span className="fw-normal">Hello,{user.name}</span> <br />
                    <span className="fw-bolder">Account & Lists</span>
                  </a>

                  <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                    <button type="button" className="btn btn-warning text-center w-50 "><Link className="btn btn-none text-dark fw-bold " to="/login" style={{ textDecoration: "none" }}>Sign in</Link></button>
                    <br />
                    <small>New Customers?<Link className="btn btn-none text-primary " to="/" style={{ textDecoration: "none" }}>Start here.</Link> </small>
                    <div className="d-flex w-600px text-center">
                      <Container>
                        <Row>
                          <Col>
                            <Link className="btn btn-none" to="/" style={{ textDecoration: "none", textColor: "black" }}>Home</Link>
                          </Col>
                          <Col>
                            <h5>Your Account</h5>
                            <Link className="btn btn-none" to="profile" style={{ textDecoration: "none", textColor: "black" }}>Your Account</Link><br />
                            <Link className="btn btn-none" to="tracking" style={{ textDecoration: "none", textColor: "black" }}>Your Order</Link>
                          </Col>
                        </Row>

                      </Container>


                    </div>
                  </div>
                </div>
              </li>
              <li className="col-2 col-xs-12 ">
                <div>
                  <Link className="btn btn-dark fw-bold fs-5" to="tracking" style={{ textDecoration: "none", textColor: "white" }}>Order</Link>
                </div>
              </li>
              <li className="col-3 col-xs-ms-2">

                <NavLink className="links mx-3" to="favorite" style={{ textDecoration: "none" }}> <ImHeart className='mx-1' to='favorite' color='white' size={20} />{fav ? fav.length : ""}</NavLink>


                <NavLink className="links" to="cart" style={{ textDecoration: "none" }}><FaShoppingCart to='cart' color='white' size={25} /> {totalItems}</NavLink>


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
            <NavLink className="links px-2" to="books" style={{ textDecoration: "none" }}>books</NavLink>
            <NavLink className="links px-2" to="profile" style={{ textDecoration: "none" }}>Profile</NavLink>
            <NavLink className="links px-2" to="login" onClick={() => { localStorage.removeItem('token');localStorage.removeItem('userId'); localStorage.removeItem('userData'); setIslogged(false) }} style={{ textDecoration: "none", color: "white" }}>Logout</NavLink>

          </div>

          {/* <div style={{ color: "white", fontWeight: "bold" }}>Welcome {userData.userName}</div> */}
          {/* <div className=" text-white">welcome {user.name}</div> */}
        </div>

      </div>






    </>
  )
}

export default Navbar
