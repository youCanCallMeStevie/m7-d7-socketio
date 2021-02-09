import React, { useState, useEffect, useMemo, useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../Styles/ProfileDetailsCard.css";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfileDetailsButtons from "./ProfileDetailsButtons";
import DottedBox from "./DottedBox";
import { Link, withRouter } from "react-router-dom";
import AppContext from "../Context/app-context";

function ProfileDetailsCard({
  user,
  users,
  handleChangeImage,
  toggleProfileModal,
  currentUserPage,
  setUpUser,
  match,
}) {
  const { appState, updateCurrentUser } = useContext(AppContext);

  const [image, setImage] = useState("");

  useEffect(() => {
    console.log("current user", currentUserPage);
  }, []);

  return (
    <Row className="profileDetails_card">
      <div className="profileDetails_card__profile-bgr">
        <PhotoCameraIcon />
        <div className="profileDetails_card__profile-img">
          <label for="file-input">
            <img
              className=""
              src={
                match.params.user == "me"
                  ? appState.currentUser.currentUser.image
                  : user?.image
              }
            />
          </label>
        </div>
        <input
          id="file-input"
          type="file"
          className="d-none"
          onChange={async (e) => {
            handleChangeImage(e);
          }}
        />
      </div>

      <div className="profileDetails_card__body">
        <ProfileDetailsButtons toggleProfileModal={toggleProfileModal} />
        <div className="profileDetails__card-body-details mb-3">
          <h4>
            {user?.name} {user?.surname}
          </h4>
          <h5>{user?.title}</h5>
          <h6>
            {user?.area} -{" "}
            <Link to="/connections">
              <span className="blue-primary-color font-weight-bold">
                {users && users.length} Connections
              </span>
            </Link>
          </h6>
          <span className="blue-primary-color font-weight-bold">
            Contact Info
          </span>
          <div>
          <span className="blue-primary-color font-weight-bold">
      <a href="https://www.sejda.com/html-to-pdf?save-link">Save to PDF</a>
      </span>
          </div>
        </div>
        {match.params.user == "me" && (
          <DottedBox
            textBold="Show recruiters you're open to work"
            text="- you control who sees this"
            linkText="Get Started"
            currentUserPage={currentUserPage}
          />
        )}
      </div>
    </Row>
  );
}

export default withRouter(ProfileDetailsCard);
