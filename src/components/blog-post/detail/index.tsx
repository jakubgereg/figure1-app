import React from "react";

import "./styles.scss";
import Author from "../../author";
import PostInfo from "../../post-info";
import CommentPost from "../../comment-post";
import { BlogPostDetailComponentProps, CommentUserModel } from "../../../types";

class BlogPostDetail extends React.Component<BlogPostDetailComponentProps> {
  render() {
    const {
      username,
      userImageUrl,
      blogPostImageUrl,
      caption,
      comments
    } = this.props;

    return (
      <div className="post-detail">
        <div className="left-side">
          <h2>{caption}</h2>
          <div className="post-info">
            <Author image={userImageUrl} username={username} />
            <div className="separator">|</div>
            <PostInfo {...this.props} />
          </div>
          <img src={blogPostImageUrl} />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              id venenatis felis. Integer ullamcorper consectetur nisl, sed
              faucibus nunc malesuada nec. Praesent in massa ornare, lacinia ex
              at, lobortis enim. Nullam mi justo, pharetra sit amet mollis quis,
              viverra quis ex. Nam sit amet euismod mi. Mauris a est in dolor
              pharetra consectetur vitae vel felis. In eleifend libero vitae
              sollicitudin vulputate. Aenean feugiat, nunc vel facilisis
              lacinia, leo elit efficitur erat, et fringilla nunc risus at
              ipsum.
            </p>
            <p>
              Nunc pulvinar augue et rutrum scelerisque. Morbi cursus dolor
              nibh, eget suscipit leo iaculis at. Praesent nec nisl ultrices,
              faucibus dolor a, iaculis erat. Morbi commodo placerat
              condimentum. Etiam tincidunt eros vitae velit euismod, non
              imperdiet eros cursus. Duis dolor sapien, tristique nec tincidunt
              id, semper sit amet felis. Aliquam sit amet purus neque.
              Pellentesque vitae eros in felis ullamcorper suscipit non eu orci.
              Integer non aliquam nisl, vitae elementum est. Integer scelerisque
              orci erat, ac pharetra est pulvinar nec.
            </p>
            <p>
              Vestibulum sollicitudin tellus est, ac ultrices justo iaculis a.
              Integer eleifend justo a congue iaculis. Nam semper lobortis
              sollicitudin. Phasellus dolor ex, bibendum nec consequat a,
              accumsan non tellus. Etiam neque libero, congue quis dui non,
              fermentum blandit ex. Curabitur luctus mollis nunc eget ultricies.
              Vivamus id augue vitae felis bibendum ultrices. Nam laoreet eget
              nisl eu interdum. Phasellus iaculis lacus velit, a aliquet odio
              semper quis. Donec convallis ut enim sit amet consectetur. Duis
              finibus arcu at vestibulum vestibulum. Aliquam quis ante nec odio
              convallis feugiat. Morbi nunc mauris, ultrices nec velit vitae,
              tincidunt tincidunt nisi.
            </p>
            <p>
              Etiam lobortis posuere sagittis. Pellentesque a gravida justo.
              Nullam tincidunt tristique lobortis. Phasellus iaculis nisl
              tristique, finibus nulla ac, efficitur elit. Etiam odio ipsum,
              dapibus at lorem sed, tincidunt vulputate sem. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed vestibulum turpis ac
              erat facilisis porttitor. Maecenas nibh nibh, pellentesque in
              condimentum vitae, vehicula in lacus. Maecenas a porttitor sem.
              Integer at condimentum elit. Praesent semper nisi enim, euismod
              commodo libero porta non. Sed condimentum elit sit amet feugiat
              condimentum. Nunc dapibus eros id nisl feugiat condimentum. Proin
              consectetur consequat porttitor. Vivamus bibendum id nisi non
              ullamcorper. Suspendisse luctus risus ac lectus elementum
              pellentesque.
            </p>
          </div>
          <div className="comments-list">
            <h3>Comments</h3>
            {comments && this.displayComments(comments)}
          </div>
        </div>
        <div className="side-info">
          <div className="section-wrapper">
            <h3>Related blog posts</h3>
            <div className="links-wrapper">
              <a href="#">Sed ullamcorper condimentum mauris</a>
              <a href="#">Ac tristique ante vestibulum et</a>
              <a href="#">Ante vestibulum et vestibulum eleifend</a>
              <a href="#">Tristique tortor In pellentesque</a>
              <a href="#">Lacus vel imperdiet sed ullamcorper</a>
              <a href="#">More...</a>
            </div>
          </div>
          <div className="section-wrapper">
            <h3>Not so related blog posts</h3>
            <div className="links-wrapper">
              <a href="#">Sed ullamcorper condimentum mauris</a>
              <a href="#">Ac tristique ante vestibulum et</a>
              <a href="#">Ante vestibulum et vestibulum eleifend</a>
              <a href="#">Tristique tortor In pellentesque</a>
              <a href="#">Lacus vel imperdiet sed ullamcorper</a>
              <a href="#">More...</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  displayComments(comments: CommentUserModel[]) {
    if (comments.length > 0) {
      return comments.map(comment => {
        return (
          <CommentPost
            key={comment.id}
            commentDate={comment.date}
            text={comment.text}
            username={comment.author}
            userImageUrl={comment.authorImageUrl}
          />
        );
      });
    } else {
      return <div>No Comments</div>;
    }
  }
}

export default BlogPostDetail;
