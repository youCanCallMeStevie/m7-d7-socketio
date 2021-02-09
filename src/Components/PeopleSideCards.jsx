import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Divider from "@material-ui/core/Divider";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import "../Styles/PeopleSideCards.css";

export default function Promoted({ users, following }) {
  console.log("following", following);
  return (
    <div>
      <Card className="people-card-container">
        <Card.Body>
          <Row>
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title">People you follow</Card.Title>
            </Col>
          </Row>
          <List>
            {following &&
              following.slice(0, 4).map(following => (
                <>
                  <Row>
                    <ListItem
                    // style=
                    // {{justifyContent:"space-around"}}
                    >
                      <Col>
                        <Image
                          src={`${following.image}`}
                          roundedCircle
                          className="mr-3 avatar-image"
                        />
                      </Col>
                      <Col>
                        <Link to={`/profile/${following.username}`}>
                          <ListItemText
                            primary={`${following.name} ${following.lastName}`}
                            secondary={following.title}
                          />{" "}
                        </Link>
                      </Col>
                      {/* <ListItemAvatar>
                        <PersonAddIcon />
                    </ListItemAvatar> */}
                    </ListItem>
                  </Row>
                  <Divider variant="inset" component="li" />
                </>
              ))}
          </List>
        </Card.Body>
        <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-center"
        >
          Show More ▾
        </ListItem>
      </Card>
    </div>
  );
}
