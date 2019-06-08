import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import LoginForm from '../components/LoginForm';

const loginMutation = gql`
    mutation login($username: String!, $pwd: String!){
        login(username: $username,pwd: $pwd) {
            username,
            id
        }
    }
`
const LoginScreen = () => {
    return (
        <Mutation mutation={loginMutation}>
            {(login, {data,loading,error}) => {
                return (<LoginForm login={login} error={error}/>)
            }}
        </Mutation>
    )}                                                                                            

export default LoginScreen;

