import { useContext } from "react";
import { AuthContext } from "../../Context/user-auth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchuser } from "../../../store/Slice/userSlice";
import React, { useEffect, useState } from "react";
import "./userInfo.css";
export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  //   const status = useSelector((state) => state.user.status);
  

  useEffect(() => {
   dispatch(fetchuser());
  }, [dispatch]);



  const { userData } = useContext(AuthContext);
  const [avatarSrc, setAvatarSrc] = useState("");
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

  

  /////////////////////////

  // const ImageComponent = () => {
  //     const [imageUrl, setImageUrl] = useState('');

  //     useEffect(() => {
  //       const fetchImage = async () => {
  //         try {
  //           const response = await axios.get('./image/user.webp'); // Replace with your image URL
  //           setImageUrl(response.data.imageUrl);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       };

  //       fetchImage();
  //     }, []);
  // }

  return (
    <>
      {/* {userData.name && <p> {userData.name}</p>}
            {userData.userName && <p>Username: {userData.userName}</p>}
            {userData.email && <p>Email: {userData.email}</p>} */}
      <div className="m-5">
        <div className="wallpeper">
          <img className="img-fluid imgProFile" src="../assets/images/user.webp" width="22%" />
        </div>
        <div className="p-4 fs-4 fw-bold ">
          <>
            <div className="container">
              <div className="row">
                <div className="col-sm-10"></div>
              </div>
              <div className="row">
                <div className="col-sm-4 layout-profile">
                  <span>
                    <h4>Name : {user.name}</h4>
                    <h4>email : {user.email}</h4>
                    <h4>Address : {user.address}</h4>
                    <button className="btn btn-warning">
                      <Link className="text-light text-decoration-none" to="/profile/edit">
                        Edit your Profile
                      </Link>
                    </button>
                  </span>

                  <hr />
                  <br />
                  <ul className="list-group">
                    <li className="list-group-item text-muted">Activity </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Wish List</strong>
                      </span>{" "}
                      5
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Favorite</strong>
                      </span>{" "}
                      10
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Orders</strong>
                      </span>{" "}
                      2
                    </li>
                  </ul>
                </div>
                <div className="col-sm-9">
                  <div className="tab-content">
                    <div className="tab-pane" id="settings">
                      <hr />

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
