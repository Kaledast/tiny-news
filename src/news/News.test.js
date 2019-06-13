import React from "react";
import News from "./News.js";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
/*
describe("News Component", () => {
  it("renders a News-Article with, timestamp, image, title and description", () => {
    const component = renderer.create(
      <News key="article id or '404 not found'" article="article object" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("triggers the callback when heart-icon is clicked", () => {
    const callback = jest.fn();
    const news = shallow(<News onSave={callback} />);
    news.find("input").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
*/
