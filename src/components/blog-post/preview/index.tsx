import React from "react";
import { BlogPostComponentProps } from "../../../types";

import { Link } from "react-router-dom";

import "./styles.scss";

import Author from "../../author";
import PostInfo from "../../post-info";

class BlogPostPreview extends React.Component<BlogPostComponentProps> {
  public render() {
    const {
      username,
      userImageUrl,
      blogPostImageUrl,
      reversed,
      postDetailPath,
      trimmedCaption,
      postDate
    } = this.props;

    return (
      <article className={reversed ? "blog-post rev" : "blog-post"}>
        <div className="meta">
          <div className="photo">
            <img src={blogPostImageUrl} alt={username + " post"} />
          </div>
        </div>
        <div className="content">
          <h2>{trimmedCaption}</h2>
          <p className="post-date">{postDate.toLocaleDateString()}</p>
          <p className="text-preview">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <div className="info">
            <Author image={userImageUrl} username={username} />
            <div className="separator">|</div>
            <PostInfo {...this.props} />
          </div>
          <div className={"read-more"}>
            <Link to={postDetailPath}>Read More</Link>
          </div>
        </div>
      </article>
    );
  }
}

export default BlogPostPreview;
