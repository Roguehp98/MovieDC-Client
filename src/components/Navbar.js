import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dc from '../img/dc.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faHeart, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import ButtonLogin from './ButtonLogin';

class NavbarMenu extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        // const nameuser = (this.props.isAuthenticated() && this.state.collapsed === false) ? (
        //     <NavItem className="navbar-extend-lg"><small>Welcome {sessionStorage.getItem("username")}</small></NavItem>
        // ) : <div></div>
        const Authed = this.props.isAuthenticated() ? (
            <ButtonLogin collapsed={this.state.collapsed} />
        ) :
            (
                <div className=" mt-2 login ml-auto-lg ">
                    <FontAwesomeIcon icon={faUser} className="size-icon" />
                    <Link to={"/login"} className="text-white" style={{ textDecoration: "none" }}>Login</Link>
                </div>
            )

        return (
            <div>
                <Navbar className="container-fluid navbar navbar-expand-lg inRow" light>
                    <div className="logo navbar-brand">
                        <Link to={"/"} >
                            <img className="logo ml-3 mr-5" src={dc} alt="logo" />
                        </Link>
                    </div>
                    <NavbarToggler onClick={this.toggleNavbar} className="bg-secondary ml-auto" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="inRow " navbar>
                            {/* {nameuser} */}
                            <NavItem>
                                <div className="mt-2 element text-center-lg ">
                                    <FontAwesomeIcon icon={faFilm} className="size-icon" />
                                    <Link to={"/movie"} className="text-white" style={{ textDecoration: "none" }}>Movies</Link>
                                </div>
                            </NavItem>
                            <NavItem>
                                <div className="mt-2 element text-center-lg">
                                    <FontAwesomeIcon icon={faTv} className="size-icon" />
                                    <Link to={"/tvshow"} className="text-white" style={{ textDecoration: "none" }}>TV Shows</Link>
                                </div>
                            </NavItem>
                            <NavItem>
                                <div className="mt-2 element text-center-lg">
                                    <FontAwesomeIcon icon={faHeart} className="size-icon" />
                                    <Link to={"/fv"} className="text-white" style={{ textDecoration: "none" }}>Favorites</Link>
                                </div>
                            </NavItem>
                            <NavItem>
                                <div className="mt-2 element text-center-lg">
                                    <FontAwesomeIcon icon={faNewspaper} className="size-icon" />
                                    <Link to={"/news"} className="text-white" style={{ textDecoration: "none" }}>News</Link>
                                </div>
                            </NavItem>
                        </Nav>
                        {Authed}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarMenu;