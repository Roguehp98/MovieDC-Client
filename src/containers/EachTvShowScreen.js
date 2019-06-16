import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ContentEachTvshow from '../components/ContentEachTvshow';

const User =  gql`
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

const EachTvshow = gql`
    query getTvshow($id: String!){
        getTvshowByAPI(id: $id){
            idTv
            name
            poster_path
            first_air_date
            genres
            episode_run_time
            number_of_seasons
            homepage
            overview
            producer
        }
    }
`

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

class EachTvShowScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyYt: null,
        }; 
    }

    componentDidMount(){
        const keyYt = this.props.match.params.keyYt;
        this.setState({keyYt})
       
    }
    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        const id = this.props.match.params.IdtvShow;

        return (
           <Query query={EachTvshow} variables={{id}}>
               {({data:{getTvshowByAPI},loading: loadingOne}) => (
                    <Query query={User} variables={{idUser}} >
                        {({data: {user},loading: loadingTwo, error, subscribeToMore}) => {
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
                            return (<ContentEachTvshow 
                                tvshow={getTvshowByAPI} 
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

export default EachTvShowScreen;



