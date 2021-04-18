import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"
import styled, { css } from "styled-components"
import polHubLogo from "../../assets/images/polhub-white.png"
import { Card } from "primereact/card"

const SpinnerWrapper = styled(ProgressSpinner)`
  @keyframes p-progress-spinner-color {
    100%,
    0% {
      stroke: #81c784;
    }

    66% {
      stroke: #81c784;
    }
    80%,
    90% {
      stroke: #ffffff;
    }
  }

  ${props =>
    props.type === "subpage" &&
    css`
      width: 100%;
      min-height: 50vh;
      display: flex;

      align-items: center;
      justify-content: center;

      svg {
        width: 50px;
        height: 50px;
      }
    `}

  ${props =>
    props.type === "medium" &&
    css`
      svg {
        width: 50px;
        height: 50px;
      }
    `}

  ${props =>
    props.type === "small" &&
    css`
      width: 30px;
      height: 30px;

      svg {
        width: 25px;
        height: 25px;
      }
    `}
`
const PageSpinnerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0px;

  // if is authenticated show top bar

  height: 100vh;
  width: 100vw;

  background-color: #121212;
  overscroll-behavior: contain;

  opacity: 1;
  visibility: visible;

  -webkit-transition: opacity 500ms, visibility 500ms;
  -moz-transition: opacity 500ms, visibility 500ms;
  -ms-transition: opacity 500ms, visibility 500ms;
  -o-transition: opacity 500ms, visibility 500ms;
  transition: opacity 500ms, visibility 500ms;

  ${props =>
    !props.show &&
    css`
      opacity: 0;
      visibility: hidden;
    `}

  .page-p-progress-spinner {
    position: fixed;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  .page-spinner-logo {
    position: fixed;

    img {
      margin-top: 4px;
      width: 60px;
      height: 60px;
    }
  }
`

const SpinnerComponent = ({
  type,
  strokeWidth = "5",
  strokeColor = "#81c784",
  show,
  topBar,
  cardMarginTop,
}) => {
  if (type === "page") {
    return (
      <PageSpinnerWrapper show={show}>
        <div className="page-spinner-logo">
          <img src={polHubLogo} alt="Logo" />
        </div>

        <SpinnerWrapper
          type={type}
          strokeColor={strokeColor}
          strokeWidth={"3"}
        />
      </PageSpinnerWrapper>
    )
  } else if (type === "subpage") {
    return (
      <Card style={{ marginTop: cardMarginTop ? cardMarginTop : "0px" }}>
        <SpinnerWrapper
          type={type}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </Card>
    )
  } else {
    return (
      <SpinnerWrapper
        type={type}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
      />
    )
  }
}

export default SpinnerComponent
