import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Landing from "../Landing/landingIndex";
import Diary from "../Diary/diaryIndex";
import About from "../About/aboutIndex";
import Question from "../Question/questionIndex"
import LoginPage from "../Auth/AuthApp"

const NavbarIndex = () => {
  return (
    <div >
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
             
              <Nav.Link>
                <Link
                  to="/"
                  style={{
                    color: "black",
                    fontFamily: 'inherit',
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
                    fontFamily:'inherit',
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  Your diary
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/question" style={{
                    color: "black",
                    fontFamily:'inherit',
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}>
                  Answer few questions
                </Link>
              </Nav.Link>{" "}
              <Nav.Link>
                <Link
                  to="/about"
                  style={{
                    color: "black",
                    fontFamily:'inherit',
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                  }}
                >
                  Your Journey
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/login"
                  style={{
                    color: "black",
                    fontFamily:'inherit',
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem",
                    
                  }}
                >
                 Sign In/Sign Out
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
      <Route path="/diary">
        <Diary/>
      </Route>

      <Route path="/" exact>
        <Landing/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/question">
        <Question/>
      </Route>
      
      <Route path="/login">
                  <LoginPage/>
      </Route>
      </Switch>
      </Router>
     
    </div>
  );
};
export default NavbarIndex;