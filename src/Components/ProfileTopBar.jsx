import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Styles/ProfileTopBar.css";
import ProfileDetailsButtons from "./ProfileDetailsButtons";

function ProfileTopBar({ user }) {
  
    return (
      <div
        className={"profileTopBar justify-content-between align-items-center d-none"}
        
      >
        <div className="d-flex">
          <div className="profileTopBar__img">
            <img src={user?.image} alt="profile-thumb" className="img-fluid" />
          </div>
          <div>
            <h6 className="font-weight-semiBold">
              {user?.name} {user?.lastName}
            </h6>
            <p>{user?.title}</p>
          </div>
        </div>
        <div>
          <ProfileDetailsButtons />
        </div>
      </div>
    );
}

export default ProfileTopBar;
