import React from "react";
import ObjectID from "bson-objectid";

import {
  BlogPostContainerProps,
  BlogPostContainerState,
  FeedModel
} from "../../types";
import BlogPostPreview from "../../components/blog-post/preview";
import { trimExcess } from "../../utils";

class BlogPostPreviewContainer extends React.Component<
  BlogPostContainerProps,
  BlogPostContainerState
> {
  constructor(props: BlogPostContainerProps) {
    super(props);

    this.state = {
      starredArray: []
    };
  }

  render() {
    const { data } = this.props;
    if (data && data.feed) {
      return this.renderPosts(data.feed);
    } else {
      return <div>Loading...</div>;
    }
  }

  renderPosts(data: FeedModel[]) {
    let posts = this.getPosts(data);
    if (posts) {
      let inc = 0;
      return posts.map(post => {
        inc++;
        let reversed = inc % 2 === 0;
        return this.renderPost(post, reversed);
      });
    } else {
      return <div>No Posts found!</div>;
    }
  }

  renderPost(post: FeedModel, reversed: boolean) {
    const timestamp = new ObjectID(post.id).getTimestamp();
    const readMePath = `/post/${post.id}`;
    const trimmedCaption = trimExcess(post.caption, 60);

    const starred = this.getStarredStatus(post.id);
    const actualStarCount = starred ? post.stats.star + 1 : post.stats.star;

    return (
      <BlogPostPreview
        key={post.id}
        {...post}
        reversed={reversed}
        userImageUrl={post.image.profile}
        blogPostImageUrl={post.image.post}
        starClickHandler={e => {
          this.starClickHandler(e, post.id);
        }}
        starCount={actualStarCount}
        starred={starred}
        viewCount={post.stats.views}
        followCount={post.stats.follow}
        postDetailPath={readMePath}
        trimmedCaption={trimmedCaption}
        postDate={new Date(timestamp)}
      />
    );
  }

  getPosts(data: FeedModel[]) {
    return data.length > 0 ? data.filter(post => post.type === "post") : null;
  }

  starClickHandler(e: any, id: string) {
    //Here we should be sending data to API. This is just dummy logic.
    e.preventDefault();
    const { starredArray } = this.state;

    let found = this.state.starredArray.find(p => p.id === id);
    if (!found) {
      let newelement = {
        id,
        starred: true,
        index: starredArray.length
      };
      this.setState(prevState => ({
        starredArray: [...prevState.starredArray, newelement]
      }));
    } else {
      let newArray = this.state.starredArray.slice();

      newArray[found.index] = {
        id: found.id,
        starred: !found.starred,
        index: found.index
      };

      this.setState({
        starredArray: newArray
      });
    }
  }

  getStarredStatus(id: string) {
    const found = this.state.starredArray.find(p => p.id === id);
    return found ? found.starred : false;
  }
}

export default BlogPostPreviewContainer;
