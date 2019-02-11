import React from "react";
import ReactDOM from "react-dom";
import PostInfo from "../components/post-info";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PostInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders views correctly", () => {
  const wrapper = shallow(<PostInfo viewCount="20" />);
  const should = <span className="views">20</span>;
  expect(wrapper.contains(should)).toEqual(true);
});

it("renders a snapshot", () => {
  const wrapper = shallow(
    <PostInfo viewCount={20} starCount={1} followCount={4} />
  );
  expect(wrapper).toMatchSnapshot();
});
