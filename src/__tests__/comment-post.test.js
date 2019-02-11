import React from "react";
import ReactDOM from "react-dom";
import CommentPost from "../components/comment-post";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CommentPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders date text correctly", () => {
  const wrapper = shallow(
    <CommentPost
      commentDate={new Date(2018, 1, 1, 12, 30, 40)}
      username="Jakub"
    />
  );
  const should = <div> on 2/1/2018 said:</div>;
  expect(wrapper.contains(should)).toEqual(true);
});

it("renders a snapshot", () => {
  const wrapper = shallow(
    <CommentPost
      commentDate={new Date(2018, 1, 1, 12, 30, 40)}
      username="Jakub"
    />
  );
  expect(wrapper).toMatchSnapshot();
});
