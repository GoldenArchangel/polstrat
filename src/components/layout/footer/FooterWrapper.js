import styled from "styled-components"

const LayoutWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  border: 1px solid #383838;
  border-radius: 3px;

  .p-card-body {
    .p-card-content {
      padding: 0px 0;
    }
  }

  .footer-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .footer-logo {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translate(-50%, 0%);
      height: 35px;

      border: 1px solid #383838;
      border-top-right-radius: 100px;
      border-top-left-radius: 100px;
      border-bottom: 0;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      background-color: #1e1e1e;

      img {
        width: 65px;
        height: 65px;
        padding: 8px;
      }
    }

    .footer-title {
      h2 {
        padding-top: 20px;
        font-size: 28px;
        margin: auto;
        display: block;
        text-align: center;
        max-width: 200px;

        transform: scale(1, 1);

        -webkit-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      h2.color-anim {
        margin-top: 20px;
        text-align: center;
        margin: auto;
        display: block;

        color: #81c784;
        transform: scale(1.1, 1.1);

        -webkit-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      span {
        font-size: 18px;
        margin: auto;
        display: block;
        text-align: center;
        max-width: 200px;

        opacity: 0;

        -webkit-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      span.color-anim {
        font-size: 18px;
        margin: auto;
        display: block;
        text-align: center;
        max-width: 200px;

        opacity: 1;

        -webkit-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: all 2800ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }
    }

    .footer-links {
      font-size: 17px;
      text-align: center;
      margin: 20px 0 50px 0;
    }

    .footer-bottom {
      font-size: 13px;
      text-align: center;
    }
  }

  .p-scrolltop {
    margin-right: 0px;
    border: 1px solid #383838;
    border-radius: 3px;
    padding: 15px;
    color: #ffffff;

    :hover {
      border: 1px solid #81c784;
    }

    @media screen and (min-width: 576px) {
      margin-right: 20px;
    }
  }
`

export default LayoutWrapper
