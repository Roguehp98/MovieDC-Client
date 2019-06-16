import React, { Component } from 'react';
import {Form,FormGroup,Label,Input,Button,UncontrolledPopover,PopoverBody,PopoverHeader} from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Signup extends Component {
    state = {
        username:"",
        name: "",
        password: "",
        age: 0,
        gender:"",
        valid: true
    }

    handleChange = (e) => {
        const param = e.name
        if(param === "username")
            this.setState({username: e.value}) 
        if(param === "password")
            this.setState({password: e.value})
        if(param === "name")
            this.setState({name: e.value})
        if(param === "age"){
            this.setState({age: parseInt(e.value)})
        }
        if(param === "gender")
            this.setState({gender: e.value})
    }
   
    render() {
        const valid = this.state.valid === true ? "" 
        : (
            <span>
            <UncontrolledPopover trigger="focus" placement="right" target="popover">
                    <PopoverHeader><span role="img" aria-label="warning">⚠️⚠️⚠️This username is something wrong!Try again⚠️⚠️⚠️</span></PopoverHeader>
                    <PopoverBody><span role="img" aria-label="rocket">Blank username cannot be null or duplicated</span></PopoverBody>
                </UncontrolledPopover>
            </span>
        )
        const optionAge = [];
        for(var i = 0; i < 60;i++){
            optionAge.push((<option key={i}>{i + 1}</option>))
        }
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
                            placeholder=""
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
                            style={{width: "60%"}}
                            onChange={e => this.handleChange(e.target)}
                        />
                    </FormGroup>  
                    <FormGroup>
                        <Label for="exampleEmail" style={{marginLeft: "20%", color: "white"}}>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="exampleEmail"
                            className="mx-auto"
                            style={{width: "60%"}}
                            placeholder=""
                            onChange={e => this.handleChange(e.target)}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Label for="examplePassword mx-auto" style={{marginLeft: "20%", color: "white"}}>Age</Label>
                            <Input type="select" name="age" id="age" onChange={e => this.handleChange(e.target)} style={{width: "60%"}} className="mx-auto">
                                {optionAge}
                            </Input>
                        </FormGroup> 
                    <FormGroup>
                            <Label for="examplePassword mx-auto" style={{marginLeft: "20%", color: "white"}}>Gender</Label>
                            <Input type="select" name="gender" id="age" onChange={e => this.handleChange(e.target)} style={{width: "60%"}} className="mx-auto">
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        </FormGroup>  
                </Form>
                {valid}
                <div className="text-center" style={{marginBottom:"20px"}}>
                    <Button color="danger" id="popover" onClick={() => this.props.createUser({
                        variables: {
                            username: this.state.username,
                            password: this.state.password,
                            name: this.state.name,
                            gender: this.state.gender,
                            age: this.state.age
                        }
                    }).then(res => {
                        const data = res.data.createUser;
                        if(data){
                            sessionStorage.setItem("id",data.id);
                            sessionStorage.setItem("status", true);
                            sessionStorage.setItem("username", data.username);
                            this.props.history.push("/");
                        }else {
                            this.setState({valid: false})
                        }
                    }).catch(err => console.log(err))}>Sign up</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);