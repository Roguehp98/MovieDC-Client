import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EachMovie from './EachMovie';

class AllMovie extends Component {

    render() {
        const displayMovie = this.props.movies.map((movie, index) => 
            (
                <div className="col-md-4" key={movie.movieID}>
                    <Link to={`/movie/${movie.movieID}&${movie.keyYt}`} className="elementlink" style={{textDecoration: "none"}}>
                        <EachMovie content={movie} />
                    </Link>
                </div>
            )
        )
        return (
            <div >
                <div className="container" style={{position: "relative", backgroundColor:"rgb(30, 30, 30)"}}>
                    <div className="card-group mt-3 mb-3">
                        {displayMovie}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllMovie;