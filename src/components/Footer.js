import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dc from '../img/dc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTumblr, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="mb-auto" style={{ backgroundColor: "rgb(26, 26, 26)" }}>
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
                    }
                    
                    .obj1 > div:nth-child(n){
                        margin-right:auto;
                    }
                    .obj2 > div:nth-child(n){
                        margin-left:auto;
                    }
                    `
                    }
                </style>
                <div className=" container-fluid sticky-bottom">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm ">
                            <div className="" style={{ display: "flex", backgroundColor:"rgb(26, 26, 26)", color:"white", justifyContent:"space-between" }}>
                                <div style={{ height: "58px", paddingTop: "5px" }} className="ml-2 mr-3">
                                    <img className="logo2 " src={dc} alt="logo" />
                                </div>
                                <div style={{ fontSize: "14px" }} className="my-auto">
                                    TM & © 2019 Warner Bros. Entertainment Inc. All rights reserved. Clone by Rogue <span role="img" aria-label="peguin">🐧</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3"></div>
                        <div className="col-md col-lg col-sm my-auto mx-sm-auto">
                            <div className="row obj2 mr-2" style={{display: "flex",color: "white", alignItems: "center"}}>
                                <div style={{ fontSize: "16px" }} className="ml-lg-2">
                                    Follow us:
                                </div>
                                <div className="mr-lg-2">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="mr-lg-2" >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div className="mr-lg-2">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className="mr-lg-2">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="mr-lg-2">
                                    <FontAwesomeIcon icon={faTumblr} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inFooter2 container-fluid" style={{ backgroundColor: "rgb(35, 35, 35)" }}>
                    <div className="col col-md-4 ">
                        <div className="row obj1">
                            <div style={{ fontSize: "16px" }}>About DC</div>
                            <div style={{ fontSize: "16px" }}>Help/FAQs</div>
                            <div style={{ fontSize: "16px" }}>Careers</div>
                            <div style={{ fontSize: "16px" }}>Privacy</div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col col-md ">
                        <div className="row obj2">
                            <div style={{ fontSize: "16px" }}>Internship</div>
                            <div style={{ fontSize: "16px" }}>Advertising</div>
                            <div style={{ fontSize: "16px" }}>Comics</div>
                            <div style={{ fontSize: "16px" }}>Toys</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;