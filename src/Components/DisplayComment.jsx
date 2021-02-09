import React, { useEffect, useState } from "react";
import "../Styles/Comment.css";
import { postNewComment } from "../Lib/fetches/comments";
import {getUserById} from '../Lib/fetches/users'
import DropdownComment from "./DropdownComment";

class DisplayComment extends React.Component {
  
  state = {
    authorImage: "",
    disabled: "disabled"
  };


  async fetchCommentAuthor(id){
    const author = await getUserById(id);
    this.setState({authorImage: author.image});
    console.log(author);
  };

  componentDidMount = () => {
      const authorId = this.props.image.userId;
      this.fetchCommentAuthor(authorId)
  }

  render() {
    return (
      <>
        <div className="wrapper d-flex flex-direction-col">
          <img src={this.state.authorImage} />
          {/*<p style={{ width: "85%" }}>{this.props.text}</p>*/}
          <input 
                    type='text' 
                    disabled = {this.state.disabled}
                    onKeyDown={this.handleKeyDown} 
                    value={this.props.text} 
                    onChange={this.handleChange}/>
          {console.log("author image::::::::", this.state.authorImage)}
          {/*<DropdownComment
            fetchAllPosts={this.state.authorImage}
            toggleModal={this.state.authorImage}
            post={this.state.authorImage}
            userId='6012a2ecfbb3d02fa8d52a14'
          ></DropdownComment>*/}
        </div>
      </>
    );
  }
}

export default DisplayComment;
