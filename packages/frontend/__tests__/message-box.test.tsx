import { render, screen } from "@testing-library/react";
import MessageBox from "../components/message-box";
import { messageStub } from "../test-stubs/messageStub";

describe("MessageBox", () => {
  it("renders the username in a heading", () => {
    render(<MessageBox message={messageStub()} />);

    const heading = screen.getByRole("heading", {
      name: messageStub().user.username,
    });

    expect(heading).toBeDefined();
  });

  it("render the correct message text in a paragraph", () => {
    render(<MessageBox message={messageStub()} />);

    const paragraph = screen.queryAllByText(messageStub().text);

    expect(paragraph).toHaveLength(1);
  });
});
