import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

export default function Fashion() {
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
              <BsStarFill   color='#FFA41C' />
              <BsStarFill   color='#FFA41C'/>
              <BsStarFill   color='#FFA41C'/>
              <BsStarFill   color='#FFA41C'/>
              <BsStarFill   color='#FFA41C'/>

            </div><small className="fw-bold">Only</small>
          </div>
          <div>
            <div className="d-inline-block">
              <BsStarFill  color='#FFA41C'/>
              <BsStarFill  color='#FFA41C'/>
              <BsStarFill  color='#FFA41C'/>
              <BsStarFill  color='#FFA41C'/>
              <BsStar      color='#FFA41C'/>
            </div><small className="fw-bold">& Up</small>
          </div>
          <div>
            <div>
              <div className="d-inline-block">
                <BsStarFill  color='#FFA41C'/>
                <BsStarFill  color='#FFA41C'/>
                <BsStarFill  color='#FFA41C'/>
                <BsStar      color='#FFA41C'/>
                <BsStar      color='#FFA41C'/>
              </div><small className="fw-bold">& Up</small>
            </div>
          </div>
          <div>
            <div>
              <div className="d-inline-block">
                <BsStarFill color='#FFA41C' />
                <BsStarFill color='#FFA41C' />
                <BsStar     color='#FFA41C'/>
                <BsStar     color='#FFA41C' />
                <BsStar     color='#FFA41C' />
              </div><small className="fw-bold">& Up</small>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="d-inline-block">
                  <BsStarFill  color='#FFA41C'/>
                  <BsStar  color='#FFA41C'/>
                  <BsStar  color='#FFA41C'/>
                  <BsStar  color='#FFA41C'/>
                  <BsStar  color='#FFA41C'/>
                </div><small className="fw-bold">& Up</small>
              </div>
            </div>
          </div>
          {/* End  Customer Review   */}
        </div>
        {/* Right side  */}
        < div className="col-10  sideRight justify-content-center align-content-center " >





        </div >



      </div>








    </>
  )
}
