import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Timer from "./Timer";
import { theme } from "@/styles/theme";
import { getTimerProperties } from "./utils";
import { StatusType } from "@/types";

jest.mock("./utils");

describe("Timer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render finished timer", () => {
    (getTimerProperties as jest.Mock).mockReturnValue({
      content: "FT",
      color: theme.colors.green,
      progress: 100,
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Timer status={StatusType.finished} liveStatus="" />
      </ThemeProvider>
    );

    expect(getByText("FT")).toBeInTheDocument();
  });

  it("should render in-progress HT timer", () => {
    (getTimerProperties as jest.Mock).mockReturnValue({
      content: "HT",
      color: theme.colors.green,
      progress: 50,
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Timer status={StatusType.inprogress} liveStatus="HT" />
      </ThemeProvider>
    );

    expect(getByText("HT")).toBeInTheDocument();
  });

  it("should render in-progress minute timer", () => {
    (getTimerProperties as jest.Mock).mockReturnValue({
      content: "28'",
      color: theme.colors.light,
      progress: 30,
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Timer status={StatusType.inprogress} liveStatus="28" />
      </ThemeProvider>
    );

    expect(getByText("28'")).toBeInTheDocument();
  });

  it("should render default timer", () => {
    (getTimerProperties as jest.Mock).mockReturnValue({
      content: "",
      color: theme.colors.light,
      progress: 0,
    });

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Timer status={StatusType.notstarted} liveStatus="" />
      </ThemeProvider>
    );

    expect(container.querySelector("text")?.textContent).toBe("");
  });
});
