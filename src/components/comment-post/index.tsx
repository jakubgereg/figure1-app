import React from "react";
import { CommentPostComponentProps } from "../../types";
import Author from "../author";

import "./styles.scss";

class CommentPost extends React.Component<CommentPostComponentProps> {
  render() {
    const { commentDate, username, userImageUrl, text } = this.props;
    let date = commentDate ? commentDate : new Date();
    return (
      <div className="comment-post">
        <div className="author-header">
          <Author image={userImageUrl} username={username} />
          <div> on {date.toLocaleDateString()} said:</div>
        </div>
        <div className="comment-content">{text}</div>
      </div>
    );
  }
}

export default CommentPost;
