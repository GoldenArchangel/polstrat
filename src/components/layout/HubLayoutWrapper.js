import styled, { css } from "styled-components"

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  row-gap: 15px;

  grid-template-areas:
    "header"
    "content"
    "footer";

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
    margin: 0 15px;
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

  @media screen and (min-width: 576px) {
    .content {
      margin: 0 20px;
    }
  }

  @media screen and (min-width: 992px) {
    .content {
      margin: 0 25px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: ${props => props.maxWidth || "1266px"};
    margin: auto;
  }
`

export default LayoutWrapper
