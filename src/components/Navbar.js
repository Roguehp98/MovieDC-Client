import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dc from '../img/dc.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilm,faTv,faHeart,faUser,faNewspaper} from '@fortawesome/free-solid-svg-icons';
import ButtonLogin from './ButtonLogin';

class Navbar extends Component {
   
    render() {
        const Authed = this.props.isAuthenticated() ? (
            <ButtonLogin />
        ) : 
        (
            <div className="login mt-2 ">
                <FontAwesomeIcon icon={faUser} className="size-icon"/>
                <Link to ={"/login"} className="text-white">Login</Link>
            </div>
        )
        return (
            <div className="container-fluid nav inRow">
                    <div className="logo ">
                        <Link to={"/"} >
                            <img className="logo size-16 ml-3 mr-5" src={dc} alt="logo" />
                        </Link>
                    </div>
                    <div className="mt-2 element text-center">
                        <FontAwesomeIcon icon={faFilm} className="size-icon"/>
                        <Link to={"/movie"} className="text-white" style={{textDecoration: "none"}}>Movies</Link>
                    </div>
                    <div className="mt-2 element text-center">
                        <FontAwesomeIcon icon={faTv} className="size-icon"/>
                        <Link to={"/tvshow"} className="text-white" style={{textDecoration: "none"}}>TV Shows</Link>
                    </div>
                    <div className="mt-2 element text-center">
                        <FontAwesomeIcon icon={faHeart} className="size-icon"/>
                        <Link to={"/fv"} className="text-white" style={{textDecoration: "none"}}>Favorites</Link>
                    </div>
                    <div className="mt-2 element text-center">
                        <FontAwesomeIcon icon={faNewspaper} className="size-icon"/>
                        <Link to={"/news"} className="text-white" style={{textDecoration: "none"}}>News</Link>
                    </div>
                    {Authed
                    }
                </div>      
        );
    }
}

export default Navbar;