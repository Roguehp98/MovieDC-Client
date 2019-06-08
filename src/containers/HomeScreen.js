import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from '../components/MainContent';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const HomeQuery  = gql`
    query getAll{
        getAllMovie {
            movieID,
            title,
            poster_path,
            backdrop_path,
            overview,
            vote_average,
            release_date,
            keyYt
        }
        getAllTvshow {
            idTv,
            title,
            poster_path
            keyYt
        }
    }
`

const HomeScreen = () => {
    return (
        <Query query={HomeQuery}>
                {({data,loading}) => {
                    if(loading) return (<div></div>)
                    return (<Screen movies={data.getAllMovie} tvshow={data.getAllTvshow} />)
                }}
        </Query>
    )
}

class Screen extends Component {
    render() {
        const {movies,tvshow} = this.props;
        return (
           <div>
                <MainContent displayMovies={movies} displayTv={tvshow}/>           
           </div>
        );
    }
}

export default HomeScreen;