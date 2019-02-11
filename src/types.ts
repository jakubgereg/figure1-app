//COMPONENTS
export interface AppComponentState {
  data: DataModel;
}

export interface BlogPostComponentProps {
  username: string;
  userImageUrl: string;
  blogPostImageUrl: string;
  caption: string;
  trimmedCaption: string;
  reversed?: boolean;
  starred: boolean;
  starCount: number;
  viewCount: number;
  followCount: number;
  postDetailPath: string;
  postDate: Date;
  starClickHandler(e: any): void;
}

export interface BlogPostDetailComponentProps {
  username: string;
  userImageUrl: string;
  blogPostImageUrl: string;
  caption: string;
  starred: boolean;
  starCount: number;
  viewCount: number;
  followCount: number;
  postDate: Date;
  starClickHandler(e: any): void;
  comments?: CommentUserModel[];
}

export interface CommentPostComponentProps {
  username: string;
  userImageUrl: string;
  commentDate: Date;
  text: string;
}

export interface AuthorComponentProps {
  image: string;
  username: string;
}

export interface PostInfoComponentProps {
  starred: boolean;
  starCount: number;
  viewCount: number;
  followCount: number;
  starClickHandler(e: any): void;
}

//CONTAINERS

export interface BlogPostContainerProps {
  match: any;
  data: DataModel;
}

export interface BlogPostContainerState {
  starredArray: Array<BlogStars>;
}

export interface BlogPostDetailContainerProps {
  match: any;
  data: DataModel;
}

export interface BlogPostDetailContainerState {
  starred: boolean;
}

//MODELS
export interface BlogStars {
  id: string;
  starred: boolean;
  index: number;
}

export interface CommentUserModel {
  id: string;
  author: string;
  authorImageUrl: string;
  date: Date;
  text: string;
}

//API MODELS
export interface DataModel {
  feed?: Array<FeedModel>;
}

export interface FeedModel {
  id: string;
  username: string;
  type: PostType;
  caption: string;
  image: ImageModel;
  stats: StatsModel;
  postID?: string;
  comments?: Array<CommentModel>;
}

export interface CommentModel {
  id: string;
  text: string;
}

export interface ImageModel {
  profile: string;
  post: string;
}

export interface StatsModel {
  star: number;
  follow: number;
  views: number;
}

enum PostType {
  Post = "post",
  Comment = "comment"
}
