import React, { useContext, useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Linkedin from "../Assets/LinkedIn-Logos/linkedin.png";
import LiLogo from "../Assets/LinkedIn-Logos/LI-Logo.png";
import "../Styles/navbar.css";
import {
  Navbar,
  Row,
  Col,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { Avatar, Badge } from "@material-ui/core";
import withUser from "./withUser";
import "../Styles/ham-navbar.css";
import AppContext from "../Context/app-context";

function NavBar({ history }) {
  const { logoutUser, appState } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    if (appState.isAuth && appState.currentUser) {
      setCurrentUser(appState.currentUser.currentUser);
    }
  }, [appState.currentUser]);

  // useMemo(() => function, input)

  return (
    <div>
      {appState.isAuth && (
        <>
          <Nav>
            <Container className="fluid ml-5">
              <Dropdown className=" hamburger-menu position-fixed ">
                <img alt="icon" src={LiLogo} className="lilogo" />
                <Dropdown.Toggle
                  className="text-right"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  variant="mycolor"
                >
                  <MenuIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  aria-labelledby="navbarDropdown"
                  className="dropdown-hamb"
                >
                  <Dropdown.Item className="dropdown-me" href="/profile/me">
                    <Avatar
                      className="navbar-avatar"
                      alt={currentUser?.image}
                      src={currentUser?.image}
                    />
                    Me
                  </Dropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item href="/feeds">
                    <HomeIcon className="icons" />
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <PeopleAltIcon className="icons" />
                    My Network
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <WorkIcon className="icons" />
                    Jobs
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <ChatBubbleIcon className="icons" />
                    Messaging
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <NotificationsIcon className="icons" />
                    Notifications
                  </Dropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Nav>
          <Navbar expand="lg" className=" mynavbar">
            <Container>
              <Navbar.Brand href="/feeds" className=" position-sticky logo">
                <img alt="icon" src={Linkedin} className="logo" />
              </Navbar.Brand>
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: "inputRoot",
                    input: " inputInput",
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <div className="navbar-item">
                    <Nav.Link href="/feeds">
                      <Badge badgeContent={21} color="error">
                        <HomeIcon className="icons" />
                      </Badge>
                      Home
                    </Nav.Link>
                  </div>
                  <div className="navbar-item">
                    <Nav.Link href="#network">
                      <PeopleAltIcon className="icons" />
                      My Network
                    </Nav.Link>
                  </div>
                  <div className="navbar-item">
                    <Nav.Link href="#jobs">
                      <WorkIcon className="icons" />
                      Jobs
                    </Nav.Link>
                  </div>
                  <div className="navbar-item">
                    <Nav.Link href="#messages">
                      <Badge badgeContent={4} color="error">
                        <ChatBubbleIcon className="icons" />
                      </Badge>
                      Messaging
                    </Nav.Link>
                  </div>
                  <div className="navbar-item">
                    <Nav.Link href="#notif">
                      <NotificationsIcon className="icons" />
                      Notifications
                    </Nav.Link>
                  </div>
                  <div className="navbar-itemMe">
                    <Avatar
                      className="navbar-avatar"
                      alt={currentUser?.image}
                      src={currentUser?.image}
                    />

                    <NavDropdown
                      title={currentUser.name}
                      id="basic-nav-dropdown"
                      className="avatar-dd"
                    >
                      <Row>
                        <Col lg={2}>
                          <Avatar
                            className="navbar-avatar"
                            alt={currentUser?.image}
                            src={currentUser?.image}
                          />
                        </Col>
                        <Col lg={10}>
                          <p className="name-title">
                            <strong>
                              {currentUser?.name} {currentUser?.surname}
                            </strong>
                          </p>
                          <p className="name-title">{currentUser.title}</p>
                        </Col>
                      </Row>
                      <button
                        className="button-profile"
                        onClick={() => history.push("/profile/me")}
                      >
                        View profile
                      </button>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.3">
                        <p>
                          <strong>Account</strong>
                        </p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Settings & Privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Help
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Language
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        className="dropdown-item-strong"
                        href="#action/3.4"
                      >
                        <p>
                          <strong>Manage</strong>
                        </p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Posts & Activity
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Job Posting Account
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action/3.4"
                        onClick={() => {
                          logoutUser();
                          history.push("/login");
                        }}
                      >
                        Sign out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="navbar-item navbar-item-work ">
                    <Nav.Link href="#work">
                      <AppsOutlinedIcon className="icons" />
                      Work
                    </Nav.Link>
                  </div>
                  <div className="navbar-item">
                    <Nav.Link href="#learning">
                      <MenuBookIcon className="icons" />
                      Linkedin Learning
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </div>
  );
}

export default withUser(withRouter(NavBar));
