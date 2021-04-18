import React from "react"
import LayoutComponent from "../../components/layout/LayoutComponent"
import LoginComponent from "../../components/LoginComponent/LoginComponent"
import { Link } from "react-router-dom"
import polstratLogo from "../../assets/images/polstrat-white.png"
import HomePageWrapper from "./HomePageWrapper"
import { Button } from "primereact/button"

const HomePage = props => {
  return (
    <LayoutComponent>
      <HomePageWrapper>
        <div className="home-header">
          <div className="home-title">
            <h1 className="share-tech-mono primary">
              Welcome to Polstrat Community Hub
            </h1>
            <h4>
              Please log in or <Link to="/register">create</Link> a new account
              to gain further access.
            </h4>
          </div>
        </div>

        <div className="home-logo">
          <img src={polstratLogo} alt="polstrat-logo" />
        </div>

        <div className="home-text">
          <h3 className="share-tech-mono">Resume</h3>

          <p className="share-tech-mono primary">
            The Polstrat Community Hub was developed to improvise the networking
            of "aware" people who share our concerns about the future of th
            West, and those who want to find friends or communities, or who want
            to form their own communities with people who are willing to join.
          </p>
          <p className="share-tech-mono primary">
            Our social network portal was designed to help people find each
            other in real world, while at the same time, we care about users
            privacy and security, keeping our users maximally anonymous. We also
            provide tips on how to address each other or how to meet at an
            offered opportunity while caring about users security.
          </p>
          <p className="share-tech-mono primary">
            This improvised social network portal was introduced into
            realization due to worsening social and economic situation in our
            western world, as well because we cannot proceed into the
            development of the Polstrat Platform until we establish our first
            business company from the plan.
          </p>
        </div>

        <div className="home-links">
          <h3>Other Links</h3>
          <p>
            To learn more about our plan please watch: <Link to="/">Link</Link>
          </p>

          <p>
            Or check this document if you prefer to read:{" "}
            <Link to="/">Link</Link>
          </p>
          <p>
            In case of any troubles or ideas, please share your feedback with us
            at our email: <Link to="/">Link</Link>
          </p>
        </div>

        <div className="login">
          <LoginComponent {...{ props }} />
        </div>

        <div className="home-social p-text-center">
          <h3 className="share-tech-mono">Other Networks</h3>
          <Button label="Guilded" className="p-button-link p-button-text" />
          <Button label="YouTube" className="p-button-link p-button-text" />
          <Button label="Twitter" className="p-button-link p-button-text" />
          <Button label="Bitchute" className="p-button-link p-button-text" />
          <Button label="MINDS" className="p-button-link p-button-text" />
          <Button label="Gab" className="p-button-link p-button-text" />
        </div>
      </HomePageWrapper>
    </LayoutComponent>
  )
}

export default HomePage
