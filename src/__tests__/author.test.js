import React from "react";
import ReactDOM from "react-dom";
import Author from "../components/author";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Author />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders username correctly", () => {
  const wrapper = shallow(<Author username={"Jakub"} />);
  const welcome = <span className="user-name">Jakub</span>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders a snapshot", () => {
  const wrapper = shallow(<Author />);
  expect(wrapper).toMatchSnapshot();
});
