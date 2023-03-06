import { createGlobalStyle } from "styled-components"

const theme = {
  color: {
    background: "#FFFFFF",
    primary: {
      main: "#ff5800",
      contrastText: "#FFFFFF",
      hover: "#f9681b",
      pressed: "#ae4b17",
    },
    secondary: {
      main: "#62a329",
      contrastText: "#FFFFFF",
      hover: "#8ed64e",
      pressed: "#436922",
    },
    disabled: {
      background: "#EDEEF0",
      color: "#FFFFFF",
    },
    error: "#F54545",
    border: "#898E9A",
    navy: "#141E35",
  },
  font: {
    size: {
      caption: "0.75",
      label: "0.875rem",
      title: "2rem",
      subtitle: "1.5rem",
    },
    family: {
      sans: "Inter",
      mono: "JetBrains Mono",
    },
  },
}

export default theme

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: regular;
  }
`
