import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const RemoveComment = gql`
    mutation deleteComment($idMovie: String!,$idUser: String!,$time: String!){
        deleteComment(idMovie: $idMovie,idUser: $idUser,time: $time){
            comments{
                title
            }
        }
    }
`

class DropCmtButton extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount(){
     
    }
    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        
        return (
            <Mutation mutation={RemoveComment}>
                {(deleteComment,{data,loading,error}) => {
                    return ( <div>
                        <Dropdown className="buttonCmt" isOpen={this.state.dropdownOpen} toggle={this.toggle} direction='down' style={{display:`${this.props.displayButton}`}}>
                            <DropdownToggle style={{backgroundColor:"rgb(26, 26, 26)",color: "white",border: "0px"}}>
                                <FontAwesomeIcon icon={faEllipsisV} className="size-icon ml-auto" />
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem id="popover1" onClick={() => deleteComment({
                                    variables: {
                                        idMovie: this.props.idMovie,
                                        idUser,
                                        time: this.props.comment.createdAt
                                    }
                                }).then(

                                ).catch(err => {
                                   
                                })}>Remove</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>                        
                    </div>)
                }}
            </Mutation>
           
        );
    }
}

export default DropCmtButton;