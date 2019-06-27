import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ContentEachMovie from '../components/ContentEachMovie';
import Comments from '../components/Comments';
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
        getInfoMovie(id: $id) {
            movieID
            title
            genres
            homepage
            poster_path
            overview
            runtime
            vote_average
            release_date
            comments{
                __typename
                title
                owner{
                    id
                    username
                }
                createdAt
            }
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

const RemoveCommentSubscription = gql`
    subscription removedComment{
        removedComment{
            comments {
                owner {
                    id
                }
                createdAt
            }
        }
    }
`

const AddCommentSubscription = gql`
    subscription addedComment{
        addedComment {
            comments {
                title
                owner {
                    id
                    username
                }
                createdAt
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
                {({data: {getInfoMovie},loading:loadingOne,subscribeToMore}) => {
                    // console.log(getInfoMovie)
                const removeCmt = () => subscribeToMore({
                    document:RemoveCommentSubscription,
                    updateQuery: (prev,{subscriptionData}) => {
                        if(!subscriptionData.data) return prev;
                        const comments = prev.getInfoMovie.comments;
                        const objRemove = subscriptionData.data.removedComment.comments[0];
                        comments.forEach((cmt,index) => {
                            if(cmt.owner.id === objRemove.owner.id && cmt.createdAt === objRemove.createdAt)
                                comments.splice(index,1);
                        })
                        return {
                            getInfoMovie: { 
                                movieID: prev.getInfoMovie.movieID,
                                title: prev.getInfoMovie.title,
                                genres: prev.getInfoMovie.genres,
                                homepage: prev.getInfoMovie.homepage,
                                poster_path: prev.getInfoMovie.poster_path,
                                runtime: prev.getInfoMovie.runtime,
                                overview: prev.getInfoMovie.overview,
                                vote_average: prev.getInfoMovie.vote_average,
                                release_date: prev.getInfoMovie.release_date,
                                comments,
                                __typename: "Movie"
                            }
                        };
                    }
                })
                const addCmt = () => subscribeToMore({
                    document: AddCommentSubscription,
                    updateQuery: (prev,{subscriptionData}) => {
                        if(!subscriptionData.data) return prev;
                        const newCmt = subscriptionData.data.addedComment.comments[0];  
                        return {
                            getInfoMovie: {
                                movieID: prev.getInfoMovie.movieID,
                                title: prev.getInfoMovie.title,
                                genres: prev.getInfoMovie.genres,
                                homepage: prev.getInfoMovie.homepage,
                                poster_path: prev.getInfoMovie.poster_path,
                                runtime: prev.getInfoMovie.runtime,
                                overview: prev.getInfoMovie.overview,
                                vote_average: prev.getInfoMovie.vote_average,
                                release_date: prev.getInfoMovie.release_date,
                                comments: [newCmt, ...prev.getInfoMovie.comments],
                                __typename: "Movie"
                            }
                        };
                    }
                })
                return (
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
                            
                            return (<div><ContentEachMovie 
                                movie={getInfoMovie} 
                                user={user} 
                                keyYt={this.state.keyYt}
                                subscriptionAddListfv={more}
                                subscriptionRmListfv={less}
                                />
                                <Comments comments = {getInfoMovie.comments} idMovie={id}
                                    subscriptionRmCmt={removeCmt}
                                    subscriptionAddCmt={addCmt}
                                />
                                </div>)
                        }}
                    </Query>
                )} } 
            </Query>
        );
    }
}

export default EachMovieScreen;

 