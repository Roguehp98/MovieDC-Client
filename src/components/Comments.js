import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import DropCmtButton from './DropCmtButton';
import AddCommentInput from './AddCommentInput';


class Comments extends Component {
    componentDidMount(){
        this.props.subscriptionRmCmt();
        this.props.subscriptionAddCmt();
    }
     
    render() {
        const listComments = this.props.comments.map((comment,index) => {
            const displayButton = (sessionStorage.getItem('id')===comment.owner.id) ? "block" : "none"
            return (
                <div key={index} className="card mx-2" style={{backgroundColor:"rgb(26,26,26)",color: "white"}} >
                    <div className="card-body ">
                        <div className="card-title cmtRow row" style={{maxWidth:"100%"}}>
                            <div><FontAwesomeIcon icon={faUser} className="size-icon" />  {comment.owner.username}</div>
                            <DropCmtButton comment={comment} idMovie={this.props.idMovie} displayButton={displayButton}/>
                        </div>
                        <p className="card-text ml-4">{comment.title}.</p>
                    </div>
                </div>
            )
        
        })
        
        return (
            <div className="mt-3 text-white" >
                <style>{
                    `
                    .cmtRow > div:nth-child(2){
                        margin-left:auto;
                    }
                    .btnCmt > div:nth-child(2){
                        margin-left:auto;
                    }
                    `
                }
                </style>
                <div className="mx-4 mb-2" style={{fontWeight:"bold"}}>{this.props.comments.length} comments</div>
                <div className=" mt-4 mx-4" style={{borderTop:"0.09rem solid gray"}}>
                    <AddCommentInput idMovie={this.props.idMovie}/>
                    {listComments}
                </div>
                
            </div>
        );
    }
}

export default Comments;