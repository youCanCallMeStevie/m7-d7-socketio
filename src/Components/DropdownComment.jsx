import React, { Component, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import "../Styles/DropdownPost.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import LinkIcon from "@material-ui/icons/Link";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FlagIcon from "@material-ui/icons/Flag";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { deletePost } from "../Lib/fetches/posts";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AppContext from "../Context/app-context";

const DropdownComment = ({ toggleModal, post, userId, fetchAllPosts }) => {
  const { selectPost } = useContext(AppContext);
  return (
    <Dropdown className="dropdown-btn">
      <Dropdown.Toggle variant={"trasparent-grey-post"}>
        <MoreHorizIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-post">
        {userId === post.userId._id && (
          <>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                toggleModal(post);
                selectPost(post);
              }}
            >
              <TurnedInNotIcon /> <strong>Edit</strong>
              <p className="text-muted">Save for later</p>
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                deletePost(post._id);
                fetchAllPosts();
              }}
            >
              <DeleteForeverIcon /> <strong>Delete</strong>
              <p className="text-muted">Delete this post</p>
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComment;
