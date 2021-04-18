import styled, { css } from "styled-components"
import { Card } from "primereact/card"

export const RequestsCardWrapper = styled(Card)`
  ${props =>
    props.new
      ? css`
          border: 0.1px solid #a7d8a9;
        `
      : css`
          border: 0.1px solid #1e1e1e;
        `}

  .requests-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 680px) {
      flex-direction: row;
    }
  }

  width: 100%;
  margin-bottom: 15px;

  .p-card-body {
    padding: 0px;

    .p-card-content {
      padding: 15px 25px;

      .card-start {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;

        .card-name {
          a {
            font-size: 1.5em;
          }

          i {
            font-size: 1.2em;
            margin-right: 5px;
          }
        }

        .card-date {
          font-size: 0.9em;
          line-height: 1.2em;

          .title {
            font-size: 0.85em;
            margin-left: 0px;
          }
          .date {
            font-size: 0.85em;
            margin-left: 5px;
          }

          .p-tag {
            font-size: 0.7em;
            position: absolute;
            padding: 0px 5px;
            margin-left: 5px;
          }
        }
      }

      .card-end {
        flex: 1;

        .card-menu {
          flex: 2;
          display: flex;
          justify-content: flex-start;
          margin-top: 15px;

          @media screen and (min-width: 680px) {
            justify-content: flex-end;
            margin-top: 3px;
          }

          .p-button {
            margin-right: 5px;

            &:last-child {
              margin-right: 0px;
            }

            @media screen and (min-width: 300px) {
              margin-right: 10px;
            }
          }

          .p-button-label {
            display: none;
            visibility: hidden;
          }

          .p-button-icon-left {
            margin-right: 0px;
          }

          @media screen and (min-width: 880px) {
            .p-button-label {
              display: initial;
              visibility: visible;
            }

            .p-button-icon-left {
              margin-right: 0.5em;
            }
          }
        }
      }
    }
  }
`
