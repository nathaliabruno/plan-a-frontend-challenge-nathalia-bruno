import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme, { GlobalStyle } from "./styles"
import styled, { ThemeProvider } from "styled-components"
import TopBar from "./components/TopBar"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  padding: 5rem;
  box-sizing: border-box;
  position: relative;
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homepage",
        element: <App />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <TopBar />
        <RouterProvider router={router} />
      </Main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)