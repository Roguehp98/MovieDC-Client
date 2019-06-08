import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import Fab from '@material-ui/core/Fab';
import {UncontrolledPopover,PopoverBody,PopoverHeader} from 'reactstrap';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const AddFavor = gql`
    mutation addListFv($idUser: String!,$idMovie: String!,$nameMovie: String!, $typeMovie: String!){
        addListFv(idUser: $idUser, idMovie: $idMovie, nameMovie: $nameMovie, typeMovie: $typeMovie){
            id
        }
    }
`

const RemoveFavor = gql`
    mutation removeListfv($idUser: String!,$idMovie: String!){
        removeListfv(idUser: $idUser, idMovie: $idMovie){
            id
            username
        }
    }
`

class ButtonAdd extends Component {
    render(){
        return(
            <Mutation mutation={AddFavor}>
                {(addListFv,{data,loading,error}) => {
                    return (
                    <Fab className="ml-2" 
                         id="popover" 
                         onClick={() => addListFv({
                            variables: {
                                idUser: this.props.user,
                                idMovie: this.props.info.id,
                                nameMovie: this.props.info.name,
                                typeMovie: this.props.info.type
                            }
                         }).then(res => {
                            this.props.onChangeFavor();
                            // console.log("A")
                            // console.log(this.props.status)
                        }).catch(err => {return <div></div>})
                        }
                         size="small" color="secondary" 
                         aria-label="Add" 
                         style={{backgroundColor:"rgb(33, 33, 33)"
                         }}>
                        <FontAwesomeIcon icon={faHeartBroken} className="size-icon-v2"/>
                    </Fab>)
                }}
            </Mutation> 
        )
    }
}

class ButtonRemove extends Component {
    render(){
        return(
            <Mutation mutation={RemoveFavor}>
            {(removeListfv,{data,loading,error}) => {
                return (
                <Fab className="ml-2" 
                     id="popover" 
                     onClick={() => removeListfv({
                        variables: {
                            idUser: this.props.user,
                            idMovie: this.props.info.id,
                            
                        }
                     }).then((res) => {
                         this.props.onChangeFavor();
                            // console.log(this.props.status)
                    }).catch(err => {
                        return <div></div>
                    })
                }
                     size="small" color="secondary" 
                     aria-label="Add" 
                     style={{backgroundColor:"rgb(33, 33, 33)"
                     }}>
                    <FontAwesomeIcon icon={faHeart} className="size-icon-v2"/>
                </Fab>)
            }}
        </Mutation> 
        )
    }
}

class AddOrRemoveFavor extends Component {
    
    render() {
        // console.log(this.props.info)
        const movieFavour = (this.props.status === true) 
                            ? <ButtonRemove user={this.props.user} info={this.props.info} onChangeFavor={this.props.onChangeFavor} status={this.props.status}/>
                            : <ButtonAdd user={this.props.user} info={this.props.info} onChangeFavor={this.props.onChangeFavor} status={this.props.status}/>
        var popOver = !sessionStorage.getItem("status") 
            ? (<span>
                <UncontrolledPopover trigger="focus" placement="right" target="popover">
                        <PopoverHeader><span role="img" aria-label="warning">⚠️⚠️⚠️Alert!!!⚠️⚠️⚠️</span></PopoverHeader>
                        <PopoverBody><span role="img" aria-label="rocket">You need to login first🚀</span></PopoverBody>
                    </UncontrolledPopover>
                </span>)
            : ""
        return (
            <span>
                {movieFavour}
                {popOver}
            </span>
        );
    }
}

export default AddOrRemoveFavor;