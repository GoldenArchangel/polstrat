import styled from "styled-components"

const DashboardWrapper = styled.div`
  .dashboard-body {
    display: flex;
    .left {
      flex: 1;

      display: flex;
      justify-content: space-around;
    }
    .right {
      flex: 1;
    }
  }
`

export default DashboardWrapper
