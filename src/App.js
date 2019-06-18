import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import './App.css';
import LoginScreen from './containers/LoginScreen';
import MovieScreen from './containers/MovieScreen';
import EachMovieScreen from './containers/EachMovieScreen';
import TvshowScreen from './containers/TvshowScreen';
import EachTvShowScreen from './containers/EachTvShowScreen';
import FavoriteScreen from './containers/FavoriteScreen';
import NewsScreen from './containers/NewsScreen';
import SignupScreen from './containers/SignupScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {ApolloProvider} from 'react-apollo';
import client from './apollo/client';

class App extends Component {
  isAuthenticated(){
    const token = sessionStorage.getItem("status");
    if(token) 
      return true;
    else return false;
  }

  render() {
   
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" render={(props) => {
              return <Navbar isAuthenticated={this.isAuthenticated} />
            }} />
            <Route exact path="/" render={(props) => {
              return <HomeScreen />
            }} />
            <Route path="/login" render={(props) => {
              return <LoginScreen />
            }} />
            <Route exact path="/fv" render={(props) => {
              return <FavoriteScreen />
            }} />
            <Route exact path="/movie" render={(props) => {
              return <MovieScreen />
            }} />
            <Route exact path="/movie/:IdMovie&:keyYt" render={(props) => {
              return <EachMovieScreen {...props}/>
            }} />
            <Route exact path="/tvshow" render={(props) => {
              return <TvshowScreen />
            }} />
            <Route exact path="/tvshow/:IdtvShow&:keyYt" render={(props) => {
              return <EachTvShowScreen {...props}/>
            }} />
            <Route path="/signup" render={(props) => {
              return <SignupScreen />
            }} />
             <Route exact path="/news" render={(props) => {
              return <NewsScreen />
            }} />
            <Route path="/" render={(props) => {
              return <Footer />
            }} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    
    );
  }
}

export default App;
