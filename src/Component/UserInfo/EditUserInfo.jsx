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
  const [email, setEmail] = useState(user.email);
  const [lastName, setLastname] = useState(user.lastName);


  useEffect(() => {
    console.log(user.name)
    dispatch(fetchuser());

  }, []);




  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, address,email,lastName }));
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
              <label htmlFor="email">
                <h4>Email</h4>
              </label>
              <input type="text" className="form-control" id="email" value={email||''} onChange={(e) => { setEmail(e.target.value); }} />

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
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
