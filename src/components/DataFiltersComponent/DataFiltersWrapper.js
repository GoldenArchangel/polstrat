import styled from "styled-components"

const DataFiltersWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 34px;

  @media screen and (min-width: 430px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }

  .order-description {
    margin-top: 5px;
    margin-left: 0px;
    font-weight: 600;
    font-size: 0.9em;
    order: 2;

    @media screen and (min-width: 430px) {
      margin-left: 15px;
      margin-top: 0px;
    }

    @media screen and (min-width: 768px) {
      order: 1;
      margin-right: 15px;
    }
  }

  .buttons {
    order: 1;
    margin-top: 15px;

    @media screen and (min-width: 768px) {
      order: 2;
      margin-top: 0px;
    }

    .p-button:focus {
      box-shadow: 0 0 0 0px #ffffff;
    }
  }
`

export default DataFiltersWrapper
