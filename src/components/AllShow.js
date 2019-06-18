import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import EachTvshow from './EachTvshow';
import Search from './Search';

class AllShow extends Component {
    state = {
        searchString: ""
    }
    
    onChangeInput = (text) => {
        this.setState({searchString: text});
    }

    render() {
        const displayTvshow = this.props.tvshows.filter(movie => 
            movie.title.includes(this.state.searchString)
        ).map((tvshow, index) => 
            (
                <div className="col-md-4" key={tvshow.idTv}>
                    <Link to={`/tvshow/${tvshow.idTv}&${tvshow.keyYt}`} className="elementlink">
                        <EachTvshow content={tvshow} />
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
                        {displayTvshow}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllShow;