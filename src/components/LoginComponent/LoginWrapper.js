import styled from "styled-components"

const LoginWrapper = styled.div`
  min-width: 230px;

  @media screen and (min-width: 768px) {
    min-width: 350px;
  }

  .title-label {
    margin-top: 0px;
    margin-bottom: 20px;
    border-bottom: 0.5px solid #121212;
  }

  .username-field {
    margin-bottom: 20px;
  }
  .password-field {
    margin-bottom: 10px;
  }
  .username-field small,
  .password-field small,
  .checkbox-field small {
    font-size: 13px;
  }

  .username-field small i,
  .password-field small i {
    font-size: 0.75rem;
    margin-left: 2px;
  }

  .checkbox-field {
    margin-bottom: 25px;

    small {
      margin-left: 10px;
    }
  }

  .warning-message {
    & > .p-inline-message {
      width: 100%;
      margin-bottom: 15px;

      span {
        font-size: 0.9rem;
      }
    }
  }

  .register-button {
    margin-bottom: 20px;
  }

  .register-button,
  .submit-button {
    button {
      width: 100%;

      span {
        font-size: 15px;
      }
    }
  }

  .separator {
    margin: 10px 0;
    text-align: center;
  }

  .forgot-password {
    text-align: center;
    font-size: 15px;
    border-top: 0.5px solid #121212;
    padding-top: 10px;

    i {
      font-size: 0.75rem;
      margin-left: 2px;
    }
  }

  & > .p-card-content {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .login-fieldset {
    width: 100%auto;
  }

  .login-spinner {
    display: flex;
    flex-direction: column;
    min-height: 280px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    .login-spinner-title {
      text-align: center;
      display: block;
    }

    .login-spinner-error {
      margin-top: 40px;
      text-align: center;

      i {
        font-size: 40px;
      }

      .login-spinner-error-title {
        display: block;
        font-size: 20px;
        margin-bottom: 20px;
      }

      .login-spinner-error-sub {
        display: block;
        font-size: 14px;
      }
    }
  }
`

export default LoginWrapper
