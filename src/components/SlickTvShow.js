import React, { Component } from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import TvShow from './TvShow';

class SlickTvShow extends Component {
    render() {
        const allImages = this.props.displayTv.map(tvshow => 
            <div className="" key={tvshow.idTv}>
                <Link to={`/tvshow/${tvshow.idTv}&${tvshow.keyYt}`}>
                    <TvShow tvshow={tvshow} />
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
                <h1 className="font-weight-bold m-4 text-white">Current Season</h1>
                <Slider {...settings}>
                    {allImages}
                    
                </Slider>
            </div>
        );
    }
}

export default SlickTvShow;