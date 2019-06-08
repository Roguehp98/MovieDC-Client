import React, { Component } from 'react';
import CarouselsIntroMovie from './CarouselsIntroMovie';
import SlickMovie from './SlickMovie';
import SlickTvShow from './SlickTvShow';


class MainContent extends Component {
    render() {
        return (
            <div>
                <CarouselsIntroMovie />
                <SlickMovie displayMovies = {this.props.displayMovies} />
                <SlickTvShow displayTv = {this.props.displayTv} />
            </div>
        );
    }
}

export default MainContent;