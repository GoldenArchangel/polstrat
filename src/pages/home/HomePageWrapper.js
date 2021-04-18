import styled from "styled-components"

const HomePageWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 10px;
  margin-top: 40px;

  grid-template-areas:
    "home-logo"
    "home-header"
    "login"
    "home-text"
    "home-links"
    "home-social";

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 15px;
    grid-template-areas:
      "home-header home-logo"
      "home-text login"
      "home-text home-social"
      "home-text ."
      "home-links .";
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 15px;
    grid-template-areas:
      "home-header home-logo"
      "home-text login"
      "home-links home-social";
  }

  .home-header {
    grid-area: home-header;

    .home-title {
      padding-top: 0px;

      @media screen and (min-width: 768px) {
        padding-top: 20px;
      }

      h1 {
        font-size: 1.85em;
        text-align: center;

        @media screen and (min-width: 768px) {
          text-align: left;
          font-size: 2.15em;
        }

        @media screen and (min-width: 992px) {
          font-size: 2.65em;
        }
      }

      h4 {
        font-size: 0.85em;
        text-align: center;
        margin-bottom: 25px;

        @media screen and (min-width: 576px) {
          font-size: 1.05em;
        }

        @media screen and (min-width: 768px) {
          font-size: 0.9em;
          margin-bottom: 0px;
          text-align: left;
        }

        @media screen and (min-width: 992px) {
          font-size: 1.05em;
        }
      }
    }
  }

  .home-logo {
    grid-area: home-logo;

    img {
      width: 70px;
      height: 70px;
      text-align: center;

      display: block;
      margin: auto;

      @media screen and (min-width: 768px) {
        width: 150px;
        height: 150px;
      }
    }
  }

  .home-text {
    grid-area: home-text;

    h3 {
      margin-top: 0px;
    }
  }

  .home-links {
    grid-area: home-links;
  }

  .login {
    grid-area: login;
  }

  .home-social {
    grid-area: home-social;

    .p-button {
      width: 100%;
    }
  }
`

export default HomePageWrapper
