import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { themeOptions } from "./theme";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme(themeOptions);

describe("App component", () => {
  test("it renders", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(
      screen.getByText("Click here to get started 😄")
    ).toBeInTheDocument();
  });
});
