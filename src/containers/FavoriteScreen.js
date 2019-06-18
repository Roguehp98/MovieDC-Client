import React from 'react';
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

const FavoriteScreen = () => {
        const id = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : ""   ;        
        return (
            <Query query={ListFavor} variables={{idUser: id}}>
                {({data: {user },loading,subscribeToMore}) => {
                    if(loading) return (<div></div>)
                    // console.log(user)
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
                            // console.log(listfv)
                            listfv.forEach((obj,index) => {
                                if(obj.id === objRemove.id){
                                    listfv.splice(index,1);
                                }
                            })
                            // console.log(listfv)
                            return {
                                user: {
                                    listfv,
                                    __typename: "User"
                                },
                            };
                        }
                    })
                    return (
                        <div>     
                            <TableListFv 
                            moviefv={user} 
                            subscriptionAddListfv={more}
                            subscriptionRmListfv={less}
                            />
                        </div>  
                    )
                }}
            </Query>
        );
}


export default FavoriteScreen;
