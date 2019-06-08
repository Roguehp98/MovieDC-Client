import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ContentEachTvshow from '../components/ContentEachTvshow';

const User =  gql`
    query User($idUser: String!){
        user(idUser: $idUser) {
            listfv {
                id 
                name
                type
            }
        }
    }
`;

const EachTvshow = gql`
    query getTvshow($id: String!){
        getTvshowByAPI(id: $id){
            idTv
            name
            poster_path
            first_air_date
            genres
            episode_run_time
            number_of_seasons
            homepage
            overview
            producer
        }
    }
`
class EachTvShowScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyYt: null,
        }; 
    }

    componentDidMount(){
      
        const keyYt = this.props.match.params.keyYt;
        this.setState({keyYt})
       
    }
    render() {
        const idUser = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        const id = this.props.match.params.IdtvShow;

        return (
           <Query query={EachTvshow} variables={{id}}>
               {({data:{getTvshowByAPI},loading: loadingOne}) => (
                    <Query query={User} variables={{idUser}} >
                        {({data: {user},loading: loadingTwo, error}) => {
                            if(loadingOne || loadingTwo) return (<div></div>)
                            return (<ContentEachTvshow tvshow={getTvshowByAPI} user={user} keyYt={this.state.keyYt} />)
                        }}
                    </Query>
               )}
           </Query>
        );
    }
}

export default EachTvShowScreen;



