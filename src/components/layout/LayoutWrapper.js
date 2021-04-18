import styled, { css } from "styled-components"

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 15px;

  grid-template-areas:
    "content"
    "footer";

  margin: 0 15px;

  @media screen and (min-width: 576px) {
    margin: 0 35px;
  }

  @media screen and (min-width: 992px) {
    margin: 0 55px;
  }

  @media screen and (min-width: 1200px) {
    max-width: ${props => props.maxWidth || "1125px"};
    margin: auto;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
    align-self: end;
  }

  ${props =>
    props.lock &&
    css`
      display: none;
    `}
`

export default LayoutWrapper
