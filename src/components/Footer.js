import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dc from '../img/dc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook,faTumblr,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="mb-auto" style={{backgroundColor:"rgb(26, 26, 26)"}}>
                <style>
                {
                    `.inFooter {
                        display: flex;
                        backgroundColor:rgb(26, 26, 26);
                        color: white;
                        justify-content:center;
                        align-items: center;
                    }
                    .inFooter2 {
                        display: flex;
                        background-color: black;
                        color: white;
                        justify-content:center;
                        align-items: center;
                    }
                    .inFooter > div:nth-child(2){
                        margin-right:auto;
                    }
                    .inFooter2 > div:nth-child(3){
                        margin-right:auto;
                    }
                    .obj {
                        margin-right: 30px;
                    }
                    `
                }
                </style>
                <div className="inFooter container-fluid">
                    <div style={{height:"58px", paddingTop:"5px"}}>
                        <img className="logo2 size-16 ml-3 mr-5 " src={dc} alt="logo" />
                    </div>
                    <div style={{fontSize:"16px"}}>
                       TM & © 2019 Warner Bros. Entertainment Inc. All rights reserved.
                    </div>
                    <div style={{fontSize:"16px"}} className="obj">
                        Follow us: 
                    </div>
                    <div className="obj">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="obj">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="obj">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="obj">
                        <FontAwesomeIcon icon={faYoutube} /> 
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faTumblr} />
                    </div>
                </div>
                <div className="inFooter2 container-fluid" style={{backgroundColor:"rgb(35, 35, 35)"}}>
                    <div className="obj" style={{fontSize:"16px"}}>
                        About DC
                    </div>
                    <div className="obj" style={{fontSize:"16px"}}>
                        Help/FAQs
                    </div>
                    <div className="obj" style={{fontSize:"16px"}}>
                        Careers
                    </div>
                    <div className="obj" style={{fontSize:"16px"}}>
                        Internship
                    </div>
                    <div className="obj" style={{fontSize:"16px"}}>
                        Advertising
                    </div>
                    <div className="obj" style={{fontSize:"16px"}}>
                        Comics
                    </div>
                    <div className="" style={{fontSize:"16px"}}>
                        Toys
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;