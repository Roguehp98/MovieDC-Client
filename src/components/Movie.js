import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div >
                <img className="img-fluid row" 
                    alt={this.props.movie.title}
                    src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
                    
                />
                {/* <p className="text-center movie">{this.props.movie.title}</p> */}
             </div>
        );
    }
}

export default Movie;