import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: "/",
    route: "/",
    asPath: "/",
    query: "",
  }));

  it("renders a heading containing chat", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /chat/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
