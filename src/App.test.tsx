import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders author link", () => {
  render(<App />);
  const titleElement = screen.getByText(
    /By Maxwell Wang, Eric Toreki and Joshua Strassle/i
  );

  expect(titleElement).toBeInTheDocument();
});
