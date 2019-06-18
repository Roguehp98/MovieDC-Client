import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
// import searchbox from '../';

class Search extends Component {
    handleChange = (e) => {this.props.onChangeInput(e.target.value)}

    render() {
        return (
            <div className="containerBox mb-3 text-center mx-auto mt-5" style={{width:"80%", borderRadius: "20px"}}>
                {/* <input type="text"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                <div className="input-group-append my-auto" style={{color:"white"}}>
                    <FontAwesomeIcon icon={faSearch} className="size-icon" />
                </div> */}
                <div className="searchbox">
                    <input type="search" placeholder="Write movie you want" onChange={this.handleChange} style={{fontSize:"16px", fontWeight:"bold", fontStyle:"italic"}}/>
                    <div className="my-auto icon " style={{color:"red" }}>
                        <FontAwesomeIcon icon={faSearch} className="size-icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;