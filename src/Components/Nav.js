import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/transparent-logo.png";
import {Image} from 'react-bootstrap';

const CNav = (props) => {
  //TODO: Refactor these to be more dynamic.
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3 mb-2"
    >
      <Navbar.Brand>
        <NavLink
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          to="/"
        >
          <Image src={logo} className="logo" alt="transparent-logo" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {/**TODO - implement active for links */}
          <Nav.Link>
            <NavLink style={navStyle} to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink style={navStyle} to="/about">
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink style={navStyle} to="/contact">
              Contact
            </NavLink>
          </Nav.Link>
          <NavDropdown style={navStyle} title="Detailed Activities" id="collasible-nav-dropdown">
            <NavDropdown.Item >
              <NavLink style={detailedSyle} to="/searcher" >
                Searcher
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/maps">
                Maps
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/fake-profile">
                Fake Profile api
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/todo">
                Todo App
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/context">
                Context App
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/formik">
                Formik App
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/students-app">
                Students App
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink style={detailedSyle} to="/users">
                User Management App
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const navStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold"
};

const detailedSyle = {
  textDecoration: 'none',
  color: 'black',
}

export default CNav;
