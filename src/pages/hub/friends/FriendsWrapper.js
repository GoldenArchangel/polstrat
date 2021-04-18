import styled from "styled-components"

export const FriendsContainerWrapper = styled.div`
  .friends-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
      margin-top: 15px;
    }

    .friends-header {
      flex: 1;
      display: flex;
      margin-bottom: 15px;
      padding-bottom: 10px;
      flex-direction: column;
      border-bottom: 1px solid var(--dark-soft);

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      .description {
        flex: 1;
        display: flex;
        align-items: flex-end;
        font-weight: 600;

        i {
          margin-right: 7px;
          padding-bottom: 2px;
        }
      }
    }

    .friends-body {
      width: 100%;
    }
  }

  .friends-spinner {
    width: 100%;
    min-height: 50vh;
    display: flex;

    align-items: center;
    justify-content: center;
  }
`
