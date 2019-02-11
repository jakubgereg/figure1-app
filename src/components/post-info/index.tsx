import React from "react";
import { PostInfoComponentProps } from "../../types";

import "./styles.scss";

class PostInfo extends React.Component<PostInfoComponentProps> {
  render() {
    const {
      starred,
      starCount,
      viewCount,
      followCount,
      starClickHandler
    } = this.props;

    return (
      <div className="links">
        <span
          className={starred ? "star link active" : "star link"}
          onClick={starClickHandler}
        >
          {starCount}
        </span>
        <span className="views">{viewCount}</span>
        <span className="follow">{followCount}</span>
      </div>
    );
  }
}

export default PostInfo;
