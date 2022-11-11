import { render, screen, waitFor } from "@testing-library/react";
import ChatInput from "../components/chat-input";
import Link from "../components/link";

describe("Link", () => {
  const linkText = "search";
  const linkUrl = "http://www.google.com/";

  beforeEach(() => {
    render(<Link href={linkUrl}>{linkText}</Link>);
  });

  it("renders the correct link text", () => {
    const linkElement = screen.getByRole("link") as HTMLAnchorElement;
    expect(linkElement.text).toBe(linkText);
  });

  it("has the right url", () => {
    const linkElement = screen.getByRole("link") as HTMLAnchorElement;
    expect(linkElement.href).toBe(linkUrl);
  });
});
