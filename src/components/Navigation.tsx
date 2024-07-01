import React from 'react';
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";
import { greetings, socialLinks } from '../constants/portfolio';
import Headroom from "headroom.js";
import DarkModeToggle from './DarkModeToggle';
export type INavigationProps = {

}

const Navigation: React.FC<INavigationProps> = (props) => {
    const [collapseClasses, setCollapseClasses] = React.useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");

    const onExited = () => setCollapseClasses("");
    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    });

    return (
        <>
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    container="lg"
                    id="navbar-main" >

                    <NavbarBrand href="/" className="mr-lg-5">
                        <h2 className="text-white" id="nav-title">
                            {greetings.name}
                        </h2>
                    </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        aria-label="navbar_toggle"
                        id="navbar_global"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        toggler="#navbar_global"
                        navbar
                        className={collapseClasses}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <h3
                                        className="text-black"
                                        id="nav-title"
                                    >
                                        {greetings.name}
                                    </h3>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        id="navbar_global"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav
                            className="align-items-lg-center ml-lg-auto"
                            navbar
                        >
                        
                          
                            {socialLinks?.github && (
                                <NavItem>
                                    <NavLink
                                        rel="noopener"
                                        aria-label="Github"
                                        className="nav-link-icon"
                                        href={socialLinks?.github}
                                        target="_blank"
                                    >
                                        <i style={{ fontSize: 20 }} className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Github
                                        </span>
                                    </NavLink>
                                </NavItem>
                            )}
                            {socialLinks?.linkedin && (
                                <NavItem>
                                    <NavLink
                                        rel="noopener"
                                        aria-label="Linkedin"
                                        className="nav-link-icon"
                                        href={socialLinks?.linkedin}
                                        target="_blank"
                                    >
                                        <i style={{ fontSize: 20 }} className="fa fa-linkedin" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Linkedin
                                        </span>
                                    </NavLink>
                                </NavItem>
                            )}
                       
                            <NavItem>
                                <DarkModeToggle />
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>

                </Navbar>
            </header>
        </>
    );
}

export default Navigation