import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../Styles/dashboard.css";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default function Dashboard() {
  return (
    <>
      <Card id="dashCard">
        <Card.Body>
        <Row className="justify-content-between">
              <Col className="d-flex justify-content-start">
                <Card.Title classname="card-title-expereince d-flex justify-content-start">
                Your Dashboard
                </Card.Title>
              </Col>

              <Col className="d-flex justify-content-end">
              <StarBorderIcon /> All Star
              </Col>
            </Row>
            <Row className="ml-2"><div className="text-muted mutedText" id="privText">
            Private to you 
          </div></Row>
          <Row>
            <Col>
              <Card className="dashCardStats">
                <Card.Body>
                  <h2 className="zeroText">206</h2>
                  <p>Who viewed your profile</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="dashCardStats">
                <Card.Body>
                  <h2 className="zeroText">93</h2>
                  <p>Post views</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="dashCardStats">
                <Card.Body>
                  <h2 className="zeroText">30</h2>
                  <p>Search appearances</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card id="dashCardComponent">
            <Card.Body>
              <label>
              <AccountBalanceIcon className= "mr-2" />
                Salary insights
                <p className="text-muted mutedText mt-1" id="trackText">
See how your salary compares to others in the community                </p>
                  <hr></hr>
                <BookmarkIcon  className= "mr-2" />
                My items
                <p className="text-muted mutedText mt-1" id="trackText">
                  Keep track of your jobs, courses and articles
                </p>
              </label>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
}
