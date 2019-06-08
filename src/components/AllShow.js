import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import EachTvshow from './EachTvshow';

class AllShow extends Component {
    render() {
        const displayTvshow = this.props.tvshows.map((tvshow, index) => 
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