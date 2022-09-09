import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a title message", () => {
  render(<App />);
  const info = screen.getByText(/What a nice code sample/i);
  expect(info).toBeInTheDocument();
});
