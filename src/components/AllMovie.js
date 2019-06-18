import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EachMovie from './EachMovie';
import Search from './Search';

class AllMovie extends Component {
    state = {
        searchString: ""
    }
    
    onChangeInput = (text) => {
        this.setState({searchString: text});
    }

    render() {
        const displayMovie = this.props.movies.filter(movie => 
            movie.title.includes(this.state.searchString)
        ).map((movie, index) => 
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
                <Search onChangeInput={this.onChangeInput} />
                <br />
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