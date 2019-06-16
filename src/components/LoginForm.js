import React, { Component } from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    state = {
        username: "",
        pwd: ""
    }

    handleChange = (e) => {
        const param = e.name
        if(param === "username")
            this.setState({username: e.value}) 
        if(param === "password")
            this.setState({pwd: e.value})
    }

    render() {
        return (
            <div className="mx-auto mb-5" style={{width:"50%", backgroundColor:"rgb(30, 30, 30)", marginTop: "10%"}}> 
                <h3 className="text-white text-center pt-2">Log in</h3>
                <br />
                <Form >
                    <FormGroup>
                        <Label for="exampleEmail" style={{marginLeft: "20%", color: "white"}}>Username</Label>
                        <Input
                            type="email"
                            name="username"
                            id="exampleEmail"
                            className="mx-auto"
                            style={{width: "60%"}}
                            placeholder="username"
                            onChange={e => this.handleChange(e.target)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword mx-auto" style={{marginLeft: "20%",color:"white"}}>Password</Label>
                        <Input
                            type="password"
                            className="mx-auto"
                            name="password"
                            id="examplePassword"
                            placeholder="***********"
                            style={{width: "60%"}}
                            onChange={e => this.handleChange(e.target)}
                        />
                    </FormGroup>   
                </Form>
                <div className="text-center" style={{marginBottom:"20px"}}>
                    <Button color="danger" onClick={() => this.props.login({
                        variables: {
                            username: this.state.username,
                            pwd: this.state.pwd
                        }
                    }).then(res => {
                        const data = res.data.login;
                        sessionStorage.setItem("id",data.id);
                        sessionStorage.setItem("status", true);
                        sessionStorage.setItem("username", data.username);
                        this.props.history.push("/");
                    }).catch(err => console.log(err))}>Log in</Button>
                </div>
                <div className="text-white text-center pb-3">Or you don't have account? 
                <Link to={"/signup"} style={{textDecoration:'none'}}><Button color="danger" className="mx-2">Sign up</Button></Link>
                now</div>
            </div>
        );
    }
}

export default withRouter(LoginForm);