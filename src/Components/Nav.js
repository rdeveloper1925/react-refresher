import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {NavLink} from 'react-router-dom';

const CNav=props=>{
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3 mb-2">
            <Navbar.Brand><NavLink style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/">React Refresher</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><NavLink style={navStyle} to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={navStyle} to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={navStyle} to="/contact">Contact</NavLink></Nav.Link>
                    <NavDropdown title="Detailed Activities" id="collasible-nav-dropdown">
                        <NavDropdown.Item><NavLink style={navStyle} to="/searcher">Searchers</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink style={navStyle} to="/fake-profile">Fake Profile api</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink style={navStyle} to="/todo">Todo App</NavLink></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><NavLink style={navStyle} to="/context">Context App</NavLink></NavDropdown.Item>
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

    )
}

const navStyle={
    textDecoration:"none",
    color:"gray"
};

export default CNav;