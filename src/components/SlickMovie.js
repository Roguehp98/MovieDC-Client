import React, { Component } from 'react';
import Movie from './Movie';
import Slider from "react-slick";
import {Link} from 'react-router-dom';


class SlickMovie extends Component {
    render() {
        const allImages = this.props.displayMovies.map(movie => 
            <div className="" key={movie.movieID}>
                <Link to={`/movie/${movie.movieID}&${movie.keyYt}`}>
                    <Movie movie={movie} />
                </Link>
            </div>
        )

        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipe: false,
            centerMode: true
        };
        return (
            <div className="slickMovie" style={{marginBottom: "20px"}}>
                <br />
                <h1 className="font-weight-bold m-4 text-white" style={{fontSize: "35px"}}>Whats Hot</h1>
                <Slider {...settings}>
                    {allImages}
                </Slider>
            </div>
          
        );
      }
}

export default SlickMovie;