import React, { Component } from 'react';

class EachTvshow extends Component {
    render() {
        return (
            <div className="card mt-3 mb-3">
                <img className="card-img-top" src={`${this.props.content.poster_path}`}
                        alt={this.props.content.title} 
                    />
                <div className="card-body border border-secondary text-center">
                    <h5 style={{fontSize:"15px"}}>{this.props.content.title}</h5>
                    <p className="text-center">{this.props.content.release_date}</p> 
                </div>

            </div>
        );
    }
}

export default EachTvshow;