import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";

import "../Styles/AboutCard.css";

export default function Promoted({ bio }) {
  return (
    <div className="mt-3">
      <Card className="about-card-container">
        <Card.Body className="mx-2">
          <Col>
            <Row className="justify-content-between">
              <Card.Title classname="general-card-title">About </Card.Title>
            </Row>
            <Row>
              <Card.Text>{bio}</Card.Text>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
}
