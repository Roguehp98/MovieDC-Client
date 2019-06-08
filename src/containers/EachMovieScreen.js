import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ContentEachMovie from '../components/ContentEachMovie';
// import Slider from "react-slick";
// import SlickVideo from '../components/SlickVideo';

const User = gql`
    query User($idUser: String!){
        user(idUser: $idUser) {
            listfv {
                id 
                name
                type
            }
        }
    }
`;

const EachMovie = gql`
    query getMovie($id: String!){
        getMovieByID(id: $id) {
            id
            title
            genres
            homepage
            imdb_id
            backdrop_path
            poster_path
            runtime
            vote_average
            overview
            release_date
        }  
    }
`;

class EachMovieScreen extends Component {
   constructor(props){
    super();
    this.state = {
        keyYt: null,
    }
   }
    
    componentDidMount(){
        const keyYt = this.props.match.params.keyYt;
        this.setState({keyYt});       
    }
    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        const id = this.props.match.params.IdMovie;
    
        return (
            <Query query={EachMovie} variables={{id}} >
                {({data: {getMovieByID},loading:loadingOne}) => (
                    <Query query={User} variables={{idUser}} >
                        {({data: {user},loading:loadingTwo, error}) => {
                            if(loadingOne || loadingTwo) return (<div></div>)
                            return (<ContentEachMovie movie={getMovieByID} user={user} keyYt={this.state.keyYt}/>)
                        }}
                    </Query>
                )}  
            </Query>
        );
    }
}

export default EachMovieScreen;

 