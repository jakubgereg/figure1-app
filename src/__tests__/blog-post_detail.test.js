import React from "react";
import ReactDOM from "react-dom";
import BlogPostDetail from "../components/blog-post/detail";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BlogPostDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders caption as h2 tag", () => {
  const wrapper = shallow(<BlogPostDetail caption="hello" />);
  const should = <h2>hello</h2>;
  expect(wrapper.contains(should)).toEqual(true);
});

it("renders a snapshot", () => {
  const wrapper = shallow(<BlogPostDetail caption="hello" />);
  expect(wrapper).toMatchSnapshot();
});
