import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App tests", () => {
  it("should render the title", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("should render the counter", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("should increment the count on button click", async () => {
    render(<App />);
    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});
