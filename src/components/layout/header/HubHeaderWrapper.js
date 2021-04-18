import styled from "styled-components"
import { Menubar } from "primereact/menubar"

const HeaderWrapper = styled(Menubar)`
  padding: 10px 15px;

  .p-menubar {
    width: 100%;
  }

  a.p-menubar-button {
    order: 3;
  }

  .name-display {
    font-family: "Share Tech Mono", monospace;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .user-info {
    display: none;
    visibility: hidden;

    @media screen and (min-width: 961px) {
      display: initial;
      visibility: initial;
    }
  }

  .user-info-mobile {
    display: initial;
    visibility: initial;

    border-top: 1px solid #383838;

    @media screen and (min-width: 961px) {
      display: none;
      visibility: hidden;
    }
  }

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      .header-title h3 {
        color: #81c784;
        font-size: 20.9px;

        -webkit-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      .header-title h5 {
        color: #ffffff;
        font-size: 0.96em;
        -webkit-transition: all 1800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 1800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 1800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 1800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 1800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      img {
        flex: 1;
        width: 40px;
        height: 40px;

        transform: rotate(0deg);

        -webkit-transition: all 3200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 3200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 3200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 3200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 3200ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }
    }

    img {
      flex: 1;
      width: 40px;
      height: 40px;

      transform: rotate(-360deg);

      -webkit-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      -moz-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      -ms-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      -o-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .header-title {
      flex: 2;
      display: flex;
      flex-direction: column;
      min-width: 120px;
      margin-left: 13px;
      margin-right: 40px;

      h3 {
        flex: 1;
        margin: 5px 0 0 0;
        padding: 0px;
        line-height: 18px;
        font-size: 20px;
        color: #ffffff;
        min-height: 18px;

        -webkit-transition: all 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      h5 {
        flex: 1;
        margin: 0px;
        min-height: 21px;

        -webkit-transition: all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }
    }
  }

  .p-menuitem-text {
    font-size: initial;

    @media screen and (min-width: 961px) {
      font-size: 15px;
    }
  }

  .p-menuitem-icon {
    margin-right: 3px !important;
  }

  .p-menuitem > .p-menuitem-link:focus {
    box-shadow: none !important;
  }
`

export default HeaderWrapper
