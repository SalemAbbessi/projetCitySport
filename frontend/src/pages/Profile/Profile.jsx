import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

function Profile() {
  let user = useSelector((state) => state.authReducer.user);
  if ( user && user.payload ) {
    user = user.payload
  }
  const navigate = useNavigate();
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              height={100}
              width={100}
              alt=""
            />
          </button>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            {" "}
            <span className="idd1">{user && user.name_user}</span>{" "}
            <span>
              <i className="fa fa-copy" />
            </span>{" "}
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            {" "}
            <span className="idd1">{user && user.email_user}</span>{" "}
            <span>
              <i className="fa fa-copy" />
            </span>{" "}
          </div>
          <div className=" d-flex mt-2">
            <button
              className="btn1 btn-dark"
              onClick={() => navigate("/user/editprofile")}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
