import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import {Navbar, NavItem, Nav} from "react-bootstrap";


class MyNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fluid className="nav-custom">
        <Navbar.Header>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav pullRight>
         <NavItem>
              <HashLink to="/#projects">
                <li className="nav-links">projects</li>
              </HashLink>
            </NavItem>

            <NavItem>
              <HashLink to="/#skills">
                <li className="nav-links">skills</li>
              </HashLink>
            </NavItem>

            <NavItem>
              <HashLink to="/#connect">
                <li className="nav-links">connect</li>
              </HashLink>
            </NavItem>

               {/*<NavItem>
              <HashLink to="/">
                <li className="nav-links">home</li>
              </HashLink>
            </NavItem>*/}
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        );
    }
}

export default MyNavbar;