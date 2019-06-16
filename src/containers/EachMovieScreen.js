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
            poster_path
            runtime
            vote_average
            overview
            release_date
        }  
    }
`;

const AddListFavorSubscription = gql`
    subscription addListFavor {
        addListFavor {
            listfv {
                id
                name
                type
            }
        }
    }
`

const RemoveListFavorSubscription = gql`
    subscription removeListFavor {
        removeListFavor {
            listfv {
                id
            }
        }
    }
` 

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
                        {({data: {user},loading:loadingTwo, error,subscribeToMore}) => {
                            if(loadingOne || loadingTwo) return (<div></div>)
                            const more = () => subscribeToMore({
                                document: AddListFavorSubscription,
                                updateQuery: (prev, {subscriptionData}) => {
                                    if(!subscriptionData.data) return prev;
                                    const newListFv = subscriptionData.data.addListFavor.listfv[0];
                                    // console.log(newListFv)
                                    // console.log([...prev.user.listfv,newListFv])
                                    return {
                                        user: {
                                            listfv: [...prev.user.listfv,newListFv],
                                            __typename: "User"
                                            },
                                        }
                                } 
                            })
                            const less = () => subscribeToMore({
                                document: RemoveListFavorSubscription,
                                updateQuery: (prev,{subscriptionData}) => {
                                    if(!subscriptionData.data) return prev;
                                    const listfv = prev.user.listfv;
                                    const objRemove = subscriptionData.data.removeListFavor.listfv[0];
                                    listfv.forEach((obj,index) => {
                                        if(obj.id === objRemove.id){
                                            listfv.splice(index);
                                        }
                                    })
                                    return {
                                        user: {
                                            listfv,
                                            __typename: "User"
                                        },
                                    };
                                }
                            })
                            return (<ContentEachMovie 
                                movie={getMovieByID} 
                                user={user} 
                                keyYt={this.state.keyYt}
                                subscriptionAddListfv={more}
                                subscriptionRmListfv={less}
                                />)
                        }}
                    </Query>
                )}  
            </Query>
        );
    }
}

export default EachMovieScreen;

 