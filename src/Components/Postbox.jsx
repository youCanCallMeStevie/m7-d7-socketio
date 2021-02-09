import React from 'react';
import { Card, Container, Button, Row, Col } from "react-bootstrap"
import PhotoIcon from '@material-ui/icons/Photo';
import AddBoxIcon from '@material-ui/icons/AddBox';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import "../Styles/postbox.css"

export default function Postbox({ toggleModal }) {
    return (

        <Card id="cardd">
            <Card.Body className="start-postbox">
                <Button id="startPost" onClick={() => toggleModal()} >
                    <label style={{ marginTop: "5px" }}>
                        <AddBoxIcon />
                Start a post
              </label>
                </Button>
            </Card.Body>
            <Card.Body className="post-icons">
                <Row style={{ marginTop: "-15px" }}>
                    <Col>
                        <Button className="add-btn">
                            <label id="photo-btn">
                                <PhotoIcon />
                    Photo
                  </label>
                        </Button>
                    </Col>
                    <Col>
                        <Button className="add-btn">
                            <label id="video-btn">
                                <YouTubeIcon />
                    Video
                  </label>
                        </Button>
                    </Col>
                    <Col>
                        <Button className="add-btn">
                            <label id="event-btn">
                                <EventIcon />
                    Event
                  </label>
                        </Button>
                    </Col>
                    <Col className="d-xs-none">
                        <Button className="add-btn d-xs-none">
                            <label id="article-btn">
                                <FormatAlignLeftIcon />
                    Article
                  </label>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    );
}
