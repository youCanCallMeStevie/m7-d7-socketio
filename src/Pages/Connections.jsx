import { Col, Container, ListGroup, Row, Navbar, NavDropdown, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../Styles/connections.css";

class Connections extends Component {
  state = {
    allUsers: [],
  };

  fetchAllUsers = async () => {
    const {
      REACT_APP_PROFILE,
      REACT_APP_TOKEN,
      REACT_APP_PROFILELIST,
    } = process.env;
    console.log(REACT_APP_PROFILE);
    try {
      const res = await fetch(REACT_APP_PROFILELIST, {
        headers: {
          Authorization: "Bearer " + REACT_APP_TOKEN,
        },
      });
      if (res.ok) {
        let users = await res.json();
        this.setState({ allUsers: users });
        console.log(users);
      } else {
        console.log("there is an error");
      }
    } catch (err) {
      console.log("there is an error");
    }
  };
  componentDidMount() {
    this.fetchAllUsers();
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="connections-navbar">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <NavDropdown title="People" id="people-nav-dropdown">
                </NavDropdown>
                <NavDropdown title="1st" id="number-nav-dropdown">
                </NavDropdown>
                <NavDropdown title="Current companies" id="company-nav-dropdown">
                </NavDropdown>
                <NavDropdown title="Locations" id="location-nav-dropdown">
                </NavDropdown>
                <Nav.Link>All Filters</Nav.Link>
                <Nav.Link>Clear</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="container-conn mb-5">
          <ListGroup className="connections-list mb-5">
            <ListGroup.Item>
              <p className="text-muted results">
                {this.state.allUsers.length} results
              </p>
            </ListGroup.Item>
            {this.state.allUsers.map((user) => (
              <ListGroup.Item className="connections-item">
                <Row className="conn-row d-flex align-items-center">
                  <Col md={2} lg={1} className="avatar-col">
                    <Avatar alt={user.image} src={user.image} />
                  </Col>
                  <Col md={3} lg={3} className="info-col">
                    <Row className="name-col">
                      {user.name} {user.surname}
                    </Row>
                    <Row className="title-col">{user.title}</Row>
                    <Row className="area-col text-muted"> {user.area}</Row>
                  </Col>

                  <Link
                    to={`/profile/${user.username}`}
                    className="message-btn text-center"
                  >
                    Message
                  </Link>
                  <Link />
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default Connections;
