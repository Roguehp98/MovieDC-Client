import React, { Component } from 'react';
import AddOrRemoveFavor from './AddOrRemoveFavor';

class ContentEachMovie extends Component {
    state = {
        moviefv: false
    }
    componentDidMount(){
        this.props.subscriptionAddListfv();
        this.props.subscriptionRmListfv();
        if(sessionStorage.getItem('status')){
            const listfv = this.props.user.listfv;
            const id = this.props.movie.id;
            listfv.forEach(movie => {
                if(movie.id === id){
                    this.setState({moviefv: true})
                }
            })
        }
    }

    onChangeFavor = (e) => { 
        this.setState({moviefv: !this.state.moviefv})};

    render(){
        const {movie,keyYt} =  this.props;
        //  show genre movie
        var genre ='';
        genre = genre.concat(movie.genres);
        // set props for button add/remove movie favorite
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : ""
        const id = movie.id;
        const name = movie.title;
        const type = "Movie";
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
                    <div className="obj mt-auto mb-auto arrow">Movie|{movie.title}</div>
                    <div className="obj mt-auto mb-auto">About</div>
                    <div className="obj mt-auto mb-auto">Videos</div>
                    <div className="obj mt-auto mb-auto">Featured</div>
                </div>
                <div className="nav-review ">
                    <div className="card " style={{maxWidth: "75%", color: "black", backgroundColor:"rgb(30, 30, 30)"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={movie.poster_path} className="card-img" alt={movie.title} style={{padding:"30px"}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-white">
                                    <h5 className="card-title text-muted">ABOUT</h5>
                                    <p className="card-text">{movie.overview}</p>
                                    <p className="card-text"><a className="text-white" href={movie.homepage} rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>Homepage</a></p>
                                    <p className="card-text"><small className="text-muted">Runtime: {movie.runtime}</small></p>
                                    <p className="card-text"><small className="text-muted">Release Date: {movie.release_date}</small></p>
                                    <p className="card-text"><small className="text-muted">Vote average: {movie.vote_average}</small></p>
                                    <p className="card-text favorite">Favourite: <AddOrRemoveFavor user={idUser} info={info} status={this.state.moviefv} onChangeFavor={this.onChangeFavor}/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white " style={{backgroundColor: "rgb(17, 19, 28)", padding: "20px", width: "25%"}}>
                        <h3 style={{fontWeight: "900", lineHeight:"22.5px"}}>GENRE:</h3> 
                        <div><small>{genre}</small></div>
                    </div>
                </div>
            </div>
        </div>)
    }  
}

export default ContentEachMovie;