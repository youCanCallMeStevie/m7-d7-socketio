import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "../Styles/ELearning.css";

export default function Promoted() {
  return (
    <div className="mt-3">
      <Card className="elearning-card-container">
        <Card.Body>
          <Col className="d-flex justify-content-start">
            <Row>
              <Card.Title
                classname="card-title-learning"
                style={{ textTransform: "capitalize" }}
              >
                <LinkedInIcon style={{color: "rgb(12,102,194)"}}/> Learning
              </Card.Title>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card.Text style={{ fontSize: "14px" }}>
                Add new skills with these courses
              </Card.Text>
            </Row>
          </Col>
          <List>
            <ListItem>
              <div>
                <span>
                  <PlayCircleOutlineIcon className="video-play-button" style={{ fontSize: "50px" }} />
                </span>
                <Image
                  src="https://via.placeholder.com/100x75"
                  className="mr-3"
                />
              </div>

              <ListItemText primary="Vue.js Essential Training" secondary="12,557 viewers" />
              
            </ListItem>
            <Divider />
            <ListItem>
            <div>
                <span>
                  <PlayCircleOutlineIcon className="video-play-button" style={{ fontSize: "50px" }} />
                </span>
                <Image
                  src="https://via.placeholder.com/100x75"
                  className="mr-3"
                />
              </div>

              <ListItemText primary="CSS: Variables and Fluid Layouts" secondary="3,068 viewers" />
              
            </ListItem>
            <Divider />
            <ListItem>
            <div>
                <span>
                  <PlayCircleOutlineIcon className="video-play-button" style={{ fontSize: "50px" }} />
                </span>
                <Image
                  src="https://via.placeholder.com/100x75"
                  className="mr-3"
                />
              </div>
              <ListItemText primary="Job Interview Strategies for UX Designers" secondary="21,506 viewers" />
              
            </ListItem>
          </List>
        </Card.Body>
        <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-center"
        >
          Show more on LinkedIn
        </ListItem>
      </Card>
    </div>
  );
}
