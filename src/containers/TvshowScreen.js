import React, { Component } from 'react';
import AllShow from '../components/AllShow';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const TvshowQuery = gql`
    query getTvshows{
        getAllTvshow {
            idTv
            title
            poster_path
            keyYt
        }
    }
`
class TvshowScreen extends Component {
    render() {
        return (
            <Query query={TvshowQuery}>
                {({data,loading}) => {
                    const tvshows = data.getAllTvshow;
                    if(loading) return (<div></div>)
                    return (
                        <div>
                            <AllShow tvshows = {tvshows} />
                         </div> 
                    )
                }}
            </Query>
        );
    }
}


export default TvshowScreen;