import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./route-app/products";
import Posts from "./route-app/posts";
import Home from "./components/home";
import Dashboard from "./route-app/admin/dashboard";
import ProductDetails from "./route-app/productDetails";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import Movies from './movies-app/movies';
import Customers from "./route-app/customers";
import Rentals from "./route-app/rentals";
import MovieDetails from "./movies-app/components/movieDetails";
import LoginForm from './components/loginForm';
import Register from './components/registerForm';
import MovieForm from './movies-app/components/movieForm';
import _ from 'lodash';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        {/* // Switch will render the first child that matches the location, otherwise we can use exact property*/}
          <Switch>
            {/* <Route path="/movies/new" render={(props)=><MovieForm {...props}/>} /> */}
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm}/>
            <Route path="/products/:id" component={ProductDetails}/>
            {/* to add addtional props we use render, instead of component attributes and to fix auto props like history,location,match - we pass props as permenter and add special syntax {...props} as attributes*/}
          <Route path="/products" render={(props)=><Products sortBy='newest' {...props}/>}/>
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Redirect from="/messages" to="/posts" />
          {/*Optinal parameter in route is something we need to avoid insead we should use it in query String(it is something we append in url) but for information ? is a part of regular exprestion in javaScript . In regulart exprestion when you append a ? to an expression that means that expression is optional */}
          <Route path="/admin" component= {Dashboard}/>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" render={(props)=><Movies {...props} />} />
          

          {/* shortColumn={this.state.shortColumn} short={this.state.short} moviesData={this.state.moviesData} pageSize={this.state.pageSize} genresData={this.state.genresData} currentPage={this.state.currentPage} currentGenre={this.state.currentGenre} */}
          <Route path="/" exact component={Home}/>
          <Route path="/rates/:rentals?" component={Rentals} />
          <Route path="/details/:customers?" component={Customers} />
          {/* exact */}
          {/* if no path match above , we will redirect to another bath */}
          <Route path="/not-found" component={NotFound} />
          {/* <Redirect to="/not-found"/> */}
          <Redirect to="/not-found" />
          
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
