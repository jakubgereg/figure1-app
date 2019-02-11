import React from "react";
import { AuthorComponentProps } from "../../types";

import "./styles.scss";

class Author extends React.Component<AuthorComponentProps> {
  render() {
    const { image, username, children } = this.props;

    return (
      <div className="author">
        <img src={image} alt={username + " profile"} className="profile" />
        <span className="user-name">{username}</span>
        {children}
      </div>
    );
  }
}

export default Author;
