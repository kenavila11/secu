import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends Component {
    state = {
        currentRoute: (window.location.pathname).split("/").pop()
    }

    getCurrentUrl = () => {
        let that = this;
        setTimeout(function() {
            that.setState({
                currentRoute: (window.location.pathname).split("/").pop()
            });
        }, 1)
    }
    
    render() { 
        return (
            <div className={`secu-header ${this.state.currentRoute}`}>
                <div className="container">
                    <Navbar bg="transparent" expand="lg" className="px-0">
                        <Navbar.Brand href="#home">SEC-U</Navbar.Brand>
                        <span className="contactNumber">+62 202 555 0117</span>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                { this.props.links.map((link, i) =>
                                    <Link 
                                        key={i} 
                                        to={link.route}
                                        className={`nav-link ${link.customClass}`}
                                        role="button"
                                        onClick={this.getCurrentUrl}
                                        >
                                            {link.text}
                                    </Link>
                                )}
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}
 
export default Header;