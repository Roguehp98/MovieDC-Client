import React, { Component } from 'react';
import {Input,Button} from 'reactstrap';
import {UncontrolledPopover,PopoverBody,PopoverHeader} from 'reactstrap';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const addedComment = gql`
    mutation addComment($idMovie: String!,$idUser: String!,$contentCmt: String!){
        addComment(idMovie: $idMovie,idUser: $idUser,contentCmt: $contentCmt){
            comments{
                title
                owner{
                  username
                }
                createdAt
              }
        }
    }
`

class AddCommentInput extends Component {
    state = {
        comment: ""
    }
    handleChange = (e) => {
        this.setState({comment: e.value})
    }
    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        var popOver1 = !sessionStorage.getItem("status") 
        ? (<span>
            <UncontrolledPopover trigger="focus" placement="bottom-end" target="popover1">
                    <PopoverHeader><span role="img" aria-label="warning">⚠️⚠️⚠️Alert!!!⚠️⚠️⚠️</span></PopoverHeader>
                    <PopoverBody><span role="img" aria-label="rocket">You need to login first🚀</span></PopoverBody>
                </UncontrolledPopover>
            </span>)
        : ""
        return (
            <Mutation mutation={addedComment}>
                {(addComment,{data,loading,error}) => {
                    return(
                        <div className="btnCmt" >
                             {popOver1}
                            <Input className="mt-3" 
                                placeholder="Add new comment" 
                                style={{borderWidth: "0 0 0.09em 0",backgroundColor:"rgb(26,26,26)",color: "white"}}
                                onChange = {e => this.handleChange(e.target)}
                                
                                />
                            <div className="mt-2 " id="popover1" style={{display:"flex"}}>
                                <div style={{marginLeft: "auto"}}><Button onClick={() => addComment({
                                    variables: {
                                        idMovie: this.props.idMovie,
                                        idUser,
                                        contentCmt: this.state.comment
                                    }
                                }).then(

                                ).catch(err => {
                                    console.log(err)
                                })}>Send</Button></div>
                            </div>
                        </div>
                    )
                }}
            </Mutation>
        );
    }
}

export default AddCommentInput;