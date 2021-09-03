import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.jpg";
import { Container, Jumbotron, Image } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="p-0">
        <Jumbotron className="pb-10">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                <Image
                  src={Logo}
                  roundedCircle
                  className="m-2"
                  height="60px"
                  width="60px"
                  style={{ objectFit: "cover", border: "1px solid #000" }}
                />
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <img
            src="https://react-bootstrap.github.io/TheresaKnott_castle.svg"
            alt="castle-img"
            className="rounded mx-auto d-block"
            fluid
          />
          <h1 className="text-center">Home</h1>
        </Jumbotron>
      </Container>
    </>
  );
};

export default HomePage;
