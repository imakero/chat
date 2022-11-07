import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading containing chat", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /chat/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
