import styled from "styled-components"

const HubContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .hub-header {
    flex: 1;
    display: flex;
    flex-direction: column;

    .hub-title {
      flex: 1;

      h3 {
        border-bottom: 1px solid var(--dark-soft);
        text-align: center;
      }
    }

    .hub-subheader {
      flex: 1;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      .hub-subtitle {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 768px) {
          flex-direction: row;
          align-items: center;
        }
      }

      .hub-menu {
        flex: 2;

        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px) {
          justify-content: flex-end;
        }

        button:enabled:hover:not(:last-child) {
          border-right: 0 none;
        }
      }
    }
  }

  .hub-body {
    flex: 1;
  }
`

export default HubContainerWrapper
