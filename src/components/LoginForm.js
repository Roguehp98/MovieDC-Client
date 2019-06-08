import React, { Component } from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';

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
            <div style={{height: "500px",width:"100%"}}> 
                {/* <Navbar isAuthenticated={this.props.isAuthenticated}/> */}
                <div className="mx-auto" style={{width:"30%", backgroundColor:"#cce5ff"}}>
                    <Form >
                        <FormGroup>
                            <Label for="exampleEmail" style={{marginLeft: "20%"}}>Email</Label>
                            <Input
                                type="email"
                                name="username"
                                id="exampleEmail"
                                className="mx-auto"
                                style={{width: "60%"}}
                                placeholder="with a placeholder"
                                onChange={e => this.handleChange(e.target)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword mx-auto" style={{marginLeft: "20%"}}>Password</Label>
                            <Input
                                type="password"
                                className="mx-auto"
                                name="password"
                                id="examplePassword"
                                placeholder="password placeholder"
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
                </div>
                
            </div>
        );
    }
}

export default withRouter(LoginForm);