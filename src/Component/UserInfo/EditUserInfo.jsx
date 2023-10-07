import { useDispatch, useSelector } from "react-redux";
import { fetchuser, updateUser } from "../../../store/Slice/userSlice";
import React, { useEffect, useState } from "react";
import "./userInfo.css";
export default function EditUserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  //   const status = useSelector((state) => state.user.status);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);

  useEffect(() => {
    console.log(user.name)
    dispatch(fetchuser());

  }, []);




  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, address }));
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
      {/* <div className="container-container-fluid">
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Update Profile</h1>
                        <div className="form-group">
                            <label htmlFor="name_field">Name</label>
                            <input 
                                type="name" 
                                id="name_field" 
                                className="form-control"
                                name='name'
                                value=''
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value=''
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src=''
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3">Update</button>
                    </form>
                </div>
            </div>
        </div> */}
      <div className="container-fluid">
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="name">
                <h4>First name</h4>
              </label>
              <input type="text" className="form-control" id="name" value={name || ''} onChange={(e) => { setName(e.target.value); }} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="last_name">
                <h4>Last name</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
                placeholder="last name"
                title="enter your last name if any."
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="email">
                <h4>Email</h4>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="you@email.com"
                title="enter your email."
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="address">
                <h4>Address</h4>
              </label>
              <input type="text" className="form-control" id="address" value={address || ''} onChange={(e) => { setAddress(e.target.value); }} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-12">
              <br />
              <button className="btn btn-lg btn-success pull-right" type="submit">
                <i className="glyphicon glyphicon-ok-sign"></i> Save
              </button>
              {/* <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
