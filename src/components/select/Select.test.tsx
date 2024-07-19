import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Select, Option } from "./Select";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Select", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders the select component with options", () => {
    renderWithTheme(
      <Select value="" onChange={() => {}}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = jest.fn();

    renderWithTheme(
      <Select value="" onChange={handleChange}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "option1" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("renders with the selected value", () => {
    renderWithTheme(
      <Select value="option1" onChange={() => {}}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    expect(screen.getByRole("combobox")).toHaveValue("option1");
  });
});
