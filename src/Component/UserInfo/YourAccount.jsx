import React, { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../../Context/user-auth";
import { Link, Outlet } from "react-router-dom";
import './userInfo.css';
export default function YourAccount() {
    const { userData } = useContext(AuthContext);
    const [avatarSrc, setAvatarSrc] = useState('');
// console.log(userData)
    // const readURL = (input) => {
    //     if (input.files && input.files[0]) {
    //         const reader = new FileReader();
    //         reader.onload = function (e) {
    //             setAvatarSrc(e.target.result);
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }

    // const handleFileChange = (event) => {
    //     readURL(event.target);
    // };



////////////////////

const [fileData, setFileData] = useState();

const fileChangeHandler = (e) => {
  setFileData(e.target.files[0]);
};

const onSubmitHandler = (e) => {
  e.preventDefault();

  // Handle File Data from the state Before Sending
  const data = new FormData();

  data.append("image", fileData);

  fetch("http://localhost:3300/user/single", {
    method: "POST",
    body: data,
  })
    .then((result) => {
      console.log("File Sent Successful");
    })
    .catch((err) => {
      console.log(err.message);
    });
};



    return (
        <>
            {/* {userData.name && <p> {userData.name}</p>}
            {userData.userName && <p>Username: {userData.userName}</p>}
            {userData.email && <p>Email: {userData.email}</p>} */}
            <div className="m-5">
                <h1>Profile</h1>
                <div className="p-4 fs-4 fw-bold ">
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-10"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 layout-profile">
                                <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button className="btn btn-success" type="submit">Submit File to Backend</button>
      </form>
                                    <hr /><br />
                                    <ul className="list-group">
                                        <li className="list-group-item text-muted">Activity </li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Wish List</strong></span> 5</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Favorite</strong></span>  10</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Orders</strong></span> 2</li>
                                    </ul>
                                
                                </div>
                                <div className="col-sm-9">

                                    <div className="tab-content">
                               
                                        <div className="tab-pane" id="settings">
                                            <hr />
                                            <form className="form" action="##" method="post" id="registrationForm">
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="first_name"><h4>First name</h4></label>
                                                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="last_name"><h4>Last name</h4></label>
                                                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="phone"><h4>Phone</h4></label>
                                                        <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="mobile"><h4>Mobile</h4></label>
                                                        <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="email"><h4>Email</h4></label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="email"><h4>Location</h4></label>
                                                        <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="password"><h4>Password</h4></label>
                                                        <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <label htmlFor="password2"><h4>Verify</h4></label>
                                                        <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <br />
                                                        <button className="btn btn-lg btn-success pull-right" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                                        {/* <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <button className="btn btn-success"><Link className='text-light text-decoration-none' to="/profile/edit">Edit your Profile</Link></button>
            </div>
            <Outlet />


        </>
    )
}
