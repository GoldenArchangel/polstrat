import styled, { css } from "styled-components"

const ProfileContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .profile-header {
    flex: 1;
    display: flex;
    flex-direction: column;

    ${props =>
      !props.header &&
      css`
        display: none;
        visibility: hidden;
      `}

    .profile-page-title {
      flex: 1;

      h3 {
        border-bottom: 1px solid var(--dark-soft);
        text-align: center;
      }
    }

    .profile-presentation {
      flex: 1;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 992px) {
        flex-direction: row;
      }

      .profile-target {
        flex: ${props => (props.switchTarget ? 2 : 1)};

        display: flex;
        flex-direction: column;
        align-items: center;

        ${props =>
          props.tag
            ? css`
                margin-top: 0px;
              `
            : css`
                margin-top: 15px;
              `};

        @media screen and (min-width: 992px) {
          flex-direction: row;
          align-items: center;
        }

        .target-name {
          order: ${props => (props.switchTarget ? 1 : 2)};

          h1 {
            ${props =>
              props.switchTarget
                ? css`
                    margin-top: 30px;
                    margin-bottom: 0px;
                  `
                : css`
                    margin-top: 0px;
                    margin-bottom: 15px;
                  `};
          }

          @media screen and (min-width: 992px) {
            order: 1;

            h1 {
              font-size: 3.375em;
              line-height: 1.16666667em;
              margin-top: 0.38888889em;

              ${props =>
                props.description
                  ? css`
                      margin-bottom: 0em;
                    `
                  : css`
                      margin-bottom: 0.37777778em;
                    `};
            }
          }
        }

        .target-tag {
          order: ${props => (props.switchTarget ? 2 : 1)};

          h2 {
            font-size: 2.25em;
            line-height: 1.16666667em;
            ${props =>
              props.switchTarget
                ? css`
                    margin-top: 0px;
                    margin-bottom: 15px;
                  `
                : css`
                    margin-top: 25px;
                    margin-bottom: 0px;
                  `};
          }

          @media screen and (min-width: 992px) {
            order: 2;

            h2 {
              margin-top: 0.38888889em;
            }

            ${props =>
              props.description
                ? css`
                    margin-bottom: 0em;
                  `
                : css`
                    margin-bottom: 0.22777778em;
                  `};
          }
        }
      }

      .profile-buttons {
        flex: 1;

        display: flex;

        ${props =>
          props.description
            ? css`
                align-items: flex-end;
                margin-bottom: 13px;
              `
            : css`
                align-items: center;
              `};

        justify-content: center;

        @media screen and (min-width: 992px) {
          justify-content: flex-end;
        }

        .p-buttonset {
        }

        button:enabled:hover:not(:last-child) {
          border-right: 0 none;
        }
      }
    }
  }

  .profile-body {
    flex: 1;

    display: flex;
    flex-direction: column;

    & > .p-panel {
      margin-bottom: 15px;

      :last-child {
        margin-bottom: 0px;
      }
    }

    .profile-row {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 992px) {
        flex-direction: row;
      }

      .profile-column {
        flex: 1;

        :first-child {
          margin-right: 0px;

          @media screen and (min-width: 992px) {
            margin-right: 15px;
          }
        }

        :last-child {
          margin-left: 0px;

          @media screen and (min-width: 992px) {
            margin-left: 15px;
          }
        }
      }
    }

    .profile-title-separator {
      flex: 1;

      border-bottom: 1px solid var(--dark-hard);
      margin-bottom: 15px;
      text-align: center;

      h3 {
      }
    }
  }
`

export default ProfileContainerWrapper
