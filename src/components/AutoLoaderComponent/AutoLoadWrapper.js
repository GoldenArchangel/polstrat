import styled from "styled-components"

const AutoLoadWrapper = styled.div`
  .infinite-scroll-component {
  }

  .autoload-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    .no-results {
      width: 100%;

      min-height: 50vh;

      .no-results-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--dark-hard);

        i {
          font-size: 0.8em;
          margin-right: 10px;
        }
      }
      .no-results-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .description {
          flex: 1;

          font-size: 0.9em;

          i {
            margin-right: 10px;
          }
        }
        .search {
          flex: 1;
          width: 100%;
          margin-bottom: 50px;

          @media screen and (min-width: 768px) {
            width: 50%;
          }
        }
      }
    }
  }

  .load-content {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0px;
      font-weight: 600;
    }
  }
`

export default AutoLoadWrapper
