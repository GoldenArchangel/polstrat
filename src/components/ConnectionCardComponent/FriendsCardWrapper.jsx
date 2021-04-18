import styled from "styled-components"
import { Card } from "primereact/card"

export const FriendsCardWrapper = styled(Card)`
  width: 100%;
  margin-bottom: 15px;

  @media screen and (min-width: 992px) {
    width: calc(50% - 7.5px);

    :nth-child(odd) {
      margin-right: 7.5px;
    }

    :nth-child(even) {
      margin-left: 7.5px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }

  .p-card-body {
    padding: 0px;

    .p-card-content {
      padding: 15px 25px 20px 25px;
      display: flex;

      flex-direction: column;

      .card-start {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        .card-name {
          flex: 1;

          margin-top: 5px;

          a {
            font-size: 1.5em;
          }

          i {
            font-size: 1.2em;
            margin-right: 5px;
          }

          .card-tag {
          }
        }

        .card-date {
          flex: 1;

          font-size: 0.9em;

          .title {
            font-size: 0.85em;
            margin-right: 5px;
          }
          .date {
            font-size: 0.85em;
            margin-right: 5px;
          }
        }
      }

      .card-end {
        flex: 1;

        .card-menu {
          flex: 2;

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

          @media screen and (min-width: 466px) {
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
