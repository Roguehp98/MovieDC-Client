import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { Alert } from 'reactstrap';
import {Link} from 'react-router-dom';
import AddOrRemoveFavor from './AddOrRemoveFavor';

function checkMovie(element){
    return element === true ? <FontAwesomeIcon icon={faHeart} className="size-icon-v2"/> : <FontAwesomeIcon icon={faHeartBroken} className="size-icon-v2"/>       
}

class TableListFv extends Component {
    state = {
        moviefv: [], 
        movieId: [],
        movieStatus: [],
        height: "0px"
    }
    componentDidMount(){
        // console.log(this.props.subscribeToNewListfv())
        this.props.subscribeToNewListfv();
        if(sessionStorage.getItem('id')){
            const listfv = this.props.moviefv.listfv;
            var listId = [];
            var listStatus = [];
            for(var i = 0;i < listfv.length;i++)
                listStatus.push(true)
            listfv.forEach(movie => {
                listId.push(movie.id);
            })
            if(listfv && listfv.length > 0)
                this.setState({
                    moviefv: listfv,
                    movieId: listId,
                    movieStatus: listStatus
                })
            else 
                this.setState({
                    moviefv: listfv,
                    movieId: listId,
                    movieStatus: listStatus,
                    height: "500px"
                })           
        }
      
    }

    onChangeFavor = (index) => {
        // console.log(index)
        // var movieStatus = this.state.movieStatus;
        // movieStatus[0] = !movieStatus[0];
        // this.setState({movieStatus});
    }

    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        var listFv = this.state.moviefv.map((movie,index) => {
            const id = movie.id;
            const name = movie.name;
            const type = movie.type;
            const info = {id,name,type};
            return (
                (<tr key={movie.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{movie.name}</td>
                    <td>{movie.type}</td>
                    <td className='text-center'><AddOrRemoveFavor user={idUser} info={info} status={this.state.movieStatus[index]} onChangeFavor={this.onChangeFavor(index)} /></td>
                </tr>)
            )
        }
            
        )

        const tableFavour = (this.state.moviefv && this.state.moviefv.length > 0) 
                        ? (
                            <Table striped style={{color:"white"}}>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th className='text-center'>Like/Unlike</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {listFv}
                                </tbody>
                            </Table>
                        ) 
                        : <Alert className="mx-auto" color="primary" style={{maxWidth:"50%", lineHeight: "10px",marginTop: "100px"}}><h4 className=" text-center">List favourite is empty</h4></Alert> 
        
        var alertUser = (sessionStorage.getItem('id')) 
                        ? tableFavour
                        : (<Alert className="mx-auto" color="primary" style={{maxWidth:"50%", lineHeight: "10px",marginTop: "100px"}}>
                                <h4 className=" text-center">
                                    You need to 
                                        <Button variant="contained" size="medium" color="primary" className="mr-2 ml-2">
                                            <Link to={"/login"} style={{color:"white", textDecoration:'none'}}>Log in</Link>
                                        </Button>
                                    or
                                        <Button variant="contained" size="medium" color="primary" className="mr-2 ml-2">
                                                Sign up
                                        </Button>
                                </h4>
                            </Alert>) 
       
        return (
                <div className="my-4" style={{color:"white", height: `500px`}}>
                    <h3 className="text-center white">List favourite</h3>
                    {alertUser}
                </div>
        );
    }
}

export default TableListFv;