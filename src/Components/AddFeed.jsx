import React, { Component } from "react";
import "../Styles/AddFeed.css";
import { ListGroup, Button, Image } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../Assets/LinkedIn-Logos/LI-Logo.png"
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeFooter from "./Homefooter";


export default class AddFeed extends Component {
  render() {
    return (
      <>
        <ListGroup className="feed-group" style={{ justifyContent: "space-between" }}>
          <ListGroup.Item className="feed-head">Add to your feed</ListGroup.Item>
          <ListGroup.Item className="feed-item">

            <Avatar alt="#" src="/static/images/avatar/2.jpg" />
            <strong>#motivation</strong>
            <Button
              variant="primary"
              className="rounded-pill"
              style={{ width: "100px", fontSize: "14px", height: "35px" }}
            >
              <AddIcon /> Follow
                  </Button>



          </ListGroup.Item>
          <ListGroup.Item className="feed-item" style={{ justifyContent: "space-between" }}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_200_200/0?e=1614816000&v=beta&t=ZPV9gwfzPQ8fSbUq1aQ26v1KUTNxyuDJuCgOCT74QNY" roundedCircle alt="Microsoft" style={{ width: "55px" }} />
            <strong>Microsoft</strong>
            <Button
              variant="primary"
              className="rounded-pill"
              style={{ width: "100px", fontSize: "14px", height: "35px" }}
            >
              <AddIcon /> Follow
                  </Button>
          </ListGroup.Item>
          <ListGroup.Item className="feed-item" style={{ justifyContent: "space-between" }}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4D0BAQHsKaIAjV0b0Q/company-logo_200_200/0/1602852073204?e=1614816000&v=beta&t=Jrx7pnSWshPC4Cxm3LYuFsWoO63gLl3Yy0b-zm_ZyBI" roundedCircle alt="CNBC" style={{ width: "55px" }} />
            <strong>CNBC</strong>
            <Button
              variant="primary"
              className="rounded-pill"
              style={{ width: "100px", fontSize: "14px", height: "35px" }}
            >
              <AddIcon /> Follow
                  </Button>
          </ListGroup.Item>
          <ListGroup.Item className="text-muted news-footer">Show all recommendations<ExpandMoreIcon /></ListGroup.Item>
        </ListGroup>
        <p className="copyright"><img src={Logo} alt="copyright" /><HomeFooter /></p>
      </>
    );
  }
}
