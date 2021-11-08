import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test
it("renders properly", function() {
  render(<Carousel />);
});

// snapshot test
it("matches snapshot", function() {
  const r = render(<Carousel />);
  expect(r.asFragment()).toMatchSnapshot();
});

it("correctly navigates with left and right arrows", function() {
  const r = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(r.getByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(r.queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = r.getByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(r.queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(r.getByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = r.getByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(r.getByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(r.queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it("should wrap array boundaries", function () {
  const r = render(<Carousel />);
  const leftArrow = r.getByTestId("left-arrow");
  fireEvent.click(leftArrow);
  
  // expect the last image to show, but not the first
  expect(r.getByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();
  expect(r.queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

  const rightArrow = r.getByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the first image to show, but not the last
  expect(r.queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
  expect(r.getByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});
