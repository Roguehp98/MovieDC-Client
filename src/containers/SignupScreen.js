import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import SignupForm from '../components/SignupForm';

const Signup = gql`
    mutation createUser($username: String!,$name: String!,$password: String!,$gender: String!,$age: Int!){
        createUser(username: $username,name: $name, password: $password,gender: $gender,age: $age){
            id
            username
        }
    }
`
class SignupScreen extends Component {
    render() {
        return (
            <Mutation mutation={Signup}>
            {(createUser, {data,loading,error}) => {
                return (<SignupForm createUser={createUser} error={error}/>)
            }}
        </Mutation>
        );
    }
}

export default SignupScreen;