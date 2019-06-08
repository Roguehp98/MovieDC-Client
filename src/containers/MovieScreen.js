import React, { Component } from 'react';
import AllMovie from '../components/AllMovie';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const MovieQuery = gql`
    query getMovies{
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
    }
`

class MovieScreen extends Component { 
    render() {
        return (
            <Query query={MovieQuery}>
                {({data,loading}) => {
                    const movies = data.getAllMovie
                    if(loading) return (<div></div>)
                    return (
                        <div>
                            <AllMovie movies = {movies} />
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default MovieScreen;