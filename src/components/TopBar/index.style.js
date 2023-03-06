import styled from "styled-components"
import { ReactComponent as LogoSVG } from "../../images/logo.svg"

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
`

export const Logo = styled(LogoSVG)`
  max-height: 4rem;
`
