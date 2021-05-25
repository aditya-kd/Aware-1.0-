import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { NavStyle } from "./navbarStyle";

const NavbarIndex = () => {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <NavStyle> */}
              <Nav.Link>
                <Link
                  to="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/diary"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  Your diary
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  Answer few questions
                </Link>
              </Nav.Link>{" "}
              <Nav.Link>
                <Link
                  to="/about"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  About Us
                </Link>
              </Nav.Link>
                  {/* <div style={{float:"right"}}> */}
              <Nav.Link>
                <Link
                  to="/signup"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                    
                  }}
                >
                 Sign Up
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/login"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                
                  }}
                >
                  Login
                </Link>
              </Nav.Link>
              {/* </div> */}

              {/* </NavStyle> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  );
};
export default NavbarIndex;
