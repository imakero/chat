import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { useEventSource, useEventSourceListener } from "../lib/event-source";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../lib/event-source", () => ({
  useEventSource: jest.fn(),
  useEventSourceListener: jest.fn(),
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

  useEventSource.mockImplementation(() => [undefined]);
  useEventSourceListener.mockImplementation(() => {});

  it("renders a heading containing chat", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /chat/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
