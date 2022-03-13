/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render Header", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("sould render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Deigo")).toBeInTheDocument();
    expect(getByText("Juan")).toBeInTheDocument();
    expect(getByText("Pedro")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);
    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Add to list");

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });
});
