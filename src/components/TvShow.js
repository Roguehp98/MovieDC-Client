import React, { Component } from 'react';

class TvShow extends Component {
    render() {
        return (
            <div >
            <img className="img-fluid row" 
                alt={this.props.tvshow.title}
                src={`${this.props.tvshow.poster_path}`}
            />
         </div>
        );
    }
}

export default TvShow;