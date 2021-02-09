import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../Styles/ProfileDetailsButtons.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import { withRouter } from "react-router-dom";

function ProfileDetailsButtons({ toggleProfileModal, match }) {
  console.log(match);
  return (
    <div className="profileDetailsButtons">
      <Button variant="primary">
        Add Profile Section <ArrowDropDownIcon />
      </Button>
      <Button variant="trasparent-grey">
        More <MoreHorizIcon />
      </Button>
      {match.params.user == "me" && (
        <span className="pen">
          <CreateTwoToneIcon onClick={() => toggleProfileModal()} />
        </span>
      )}
    </div>
  );
}

export default withRouter(ProfileDetailsButtons);
