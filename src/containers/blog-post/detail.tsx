import React from "react";
import {
  BlogPostDetailContainerProps,
  BlogPostDetailContainerState,
  FeedModel,
  CommentUserModel
} from "../../types";
import BlogPostDetail from "../../components/blog-post/detail";
import ObjectID from "bson-objectid";

class BlogPostDetailContainer extends React.Component<
  BlogPostDetailContainerProps,
  BlogPostDetailContainerState
> {
  constructor(props: BlogPostDetailContainerProps) {
    super(props);
    this.state = {
      starred: false
    };

    this.starClickHandler = this.starClickHandler.bind(this);
  }

  render() {
    const { match, data } = this.props;
    if (data && data.feed) {
      return this.renderPost(match.params.id, data.feed);
    } else {
      return <div>Loading...</div>;
    }
  }

  renderPost(id: string, posts: FeedModel[]) {
    const { starred } = this.state;
    let post = posts.find(post => post.type === "post" && post.id === id);

    let comments = this.getAllComments(id, posts);

    if (post) {
      const timestamp = new ObjectID(post.id).getTimestamp();
      return (
        <BlogPostDetail
          username={post.username}
          userImageUrl={post.image.profile}
          blogPostImageUrl={post.image.post}
          caption={post.caption}
          starred={starred}
          starCount={starred ? post.stats.star + 1 : post.stats.star}
          followCount={post.stats.follow}
          viewCount={post.stats.follow}
          postDate={new Date(timestamp)}
          starClickHandler={this.starClickHandler}
          comments={comments}
        />
      );
    } else {
      return <div>NOT FOUND</div>;
    }
  }

  getAllComments(id: string, data: FeedModel[]): Comment[] {
    let filtered = data.filter(post => {
      if (post.postID) {
        return post.postID === id;
      }
      return false;
    });

    let result = Array<Comment>();

    //data aggregation
    filtered.map(user => {
      user.comments &&
        user.comments.forEach(val => {
          const timestamp = new ObjectID(val.id).getTimestamp();
          result.push(
            new Comment(
              val.id,
              user.username,
              user.image.profile,
              new Date(timestamp),
              val.text
            )
          );
        });
    });

    //before we send it to view we should sort it by date
    return result.sort(function(a, b) {
      return b.date.getTime() - a.date.getTime();
    });
  }

  //Here we should be sending data to API. This is just dummy logic.
  starClickHandler(e: any) {
    e.preventDefault();
    this.setState(prevState => ({
      starred: !prevState.starred
    }));
  }
}

class Comment implements CommentUserModel {
  id: string;
  author: string;
  authorImageUrl: string;
  date: Date;
  text: string;
  constructor(
    id: string,
    author: string,
    authorImageUrl: string,
    date: Date,
    text: string
  ) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.text = text;
    this.authorImageUrl = authorImageUrl;
  }
}

export default BlogPostDetailContainer;
