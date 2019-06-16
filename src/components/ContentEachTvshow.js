import React, { Component } from 'react';
import AddOrRemoveFavor from './AddOrRemoveFavor';

class ContentEachTvshow extends Component {
    state = {
        tvshowfv: false
    }
    componentDidMount(){
        this.props.subscriptionAddListfv();
        this.props.subscriptionRmListfv();
        if(sessionStorage.getItem('status')){
            const listfv = this.props.user.listfv;
            const id = this.props.tvshow.idTv;
            listfv.forEach(tvshow => {
                if(tvshow.id === id){
                    this.setState({tvshowfv: true})
                }
            })
        }
    }

    onChangeFavor = (e) => {this.setState({tvshowfv: !this.state.tvshowfv})};
    render() {
        const {tvshow,keyYt} =  this.props;
        //  show genre movie
        var genre ='';
        genre = genre.concat(tvshow.genres);
        var producer = '';
        producer = producer.concat(tvshow.producer);
        // set props for button add/remove tvshow favorite
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : ""
        const id = tvshow.idTv;
        const name = tvshow.name;
        const type = "TV Show";
        const info = {id,name,type};
        return (
            <div className="text-white">
                <style>
                    {
                        `.obj {
                            margin-right: 30px; 
                        }
                        .navbar-intro > div:nth-child(1)  {
                            margin-right: auto;
                        }
                        .arrow {
                            background: white;
                            color: black;
                            position: relative;
                            display: inline-block;
                            padding: 0 100px 0 10px!important;
                            line-height: 30px;
                            // width: 19%;
                        }
                        .arrow::after {
                            content: ' ';
                            background: white;
                            position: absolute;
                            top: 4px; right: -11px;
                            width: 21px;
                            height: 21px;
                            transform: rotate(45deg);
                        }
                        `
                    }
                </style>
                <div className="text-white content"> 
                    <div className="trailer" style={{position: "relative"}}>
                        <div className="video embed-responsive embed-responsive-16by9">
                            <iframe className="card-img-top embed-responsive-item" title={`${keyYt}`} src={`https://www.youtube.com/embed/${keyYt}`} ></iframe>
                        </div>
                    </div>
                    <div></div>
                    <div className="navbar-intro" style={{position: "relative", marginTop: "480px",backgroundColor:"rgb(26, 26, 26)"}}>
                        <div className="obj mt-auto mb-auto arrow">TV Show|{tvshow.name}</div>
                        <div className="obj mt-auto mb-auto">About</div>
                        <div className="obj mt-auto mb-auto">Videos</div>
                        <div className="obj mt-auto mb-auto">Featured</div>
                    </div>
                    <div className="nav-review ">
                        <div className="card " style={{maxWidth: "75%", color: "black", backgroundColor:"rgb(30, 30, 30)"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={tvshow.poster_path} className="card-img" alt={tvshow.name} style={{padding:"30px"}}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title text-muted">ABOUT</h5>
                                        <p className="card-text">{tvshow.overview}</p>
                                        <p className="card-text"><a className="text-white" href={tvshow.homepage} rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>Homepage</a></p>
                                        <p className="card-text"><small className="text-muted">Runtime: {tvshow.first_air_date}</small></p>
                                        <p className="card-text"><small className="text-muted">Episode: {tvshow.episode_run_time}</small></p>
                                        <p className="card-text"><small className="text-muted">Number seasons: {tvshow.number_of_seasons}</small></p>
                                        <p className="card-text"><small className="text-muted">Producer: {producer}</small></p>
                                        <p className="card-text favorite">Favourite: <AddOrRemoveFavor user={idUser} info={info} status={this.state.tvshowfv} onChangeFavor={this.onChangeFavor}/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-white " style={{backgroundColor: "rgb(17, 19, 28)", padding: "20px",width: "25%"}}>
                            <h3 style={{fontWeight: "900", lineHeight:"22.5px"}}>GENRE:</h3> 
                            <p><small>{genre}</small></p>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ContentEachTvshow;