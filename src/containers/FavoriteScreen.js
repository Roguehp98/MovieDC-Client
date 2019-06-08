import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import TableListFv from '../components/TableListFv';

const ListFavor = gql`
    query listfv($idUser: String!){
        user(idUser: $idUser) {
            listfv {
                id 
                name
                type
            }
        }
    }
`

const ListFavorSubscription = gql`
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

class FavoriteScreen extends Component {
  
    render() {    
        // console.log("B")

        const id = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : ""   ;        
        return (
            <Query query={ListFavor} variables={{idUser: id}}>
                {({data: {user},loading, subscribeToMore}) => {
                    if(loading) return (<div></div>)
                    const more = () => subscribeToMore({
                        document: ListFavorSubscription,
                        updateQuery: (prev, {subscriptionData}) => {
                            console.log("B")
                            console.log(prev)
                            console.log(subscriptionData)
                            if(!subscriptionData.data) return prev;
                            const newListfv = subscriptionData.data.addListFavor;
                            return{
                                user: [...prev.user,newListfv]
                            }
                        }
                    })
                
                    return (
                        <div>     
                            <TableListFv moviefv={user} subscribeToNewListfv={more}
                            />
                        </div>  
                    )
                }}
            </Query>
        );
    }
}

export default FavoriteScreen;
