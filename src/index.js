import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MoviesDetails from './components/movie-details/movies_details.js';
import MoviesList from './components/list-movies/movies_list.js';
import BrowseMovies from './components/browse-movies/browse_movies.js';


function MoviesApp () {
  return(<Router>
    <div>

    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" >Movie Theater</a>
          </div>
          
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/movie-details">Movie Details</Link></li>
            <li><Link to="/browse-movies">Browse Movies</Link></li>
            <li><Link to="/list-movies">List Movies</Link></li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={App} />
      <Route path="/browse-movies" component={BrowseMovies} />
      <Route path="/list-movies" component={MoviesList} />
      <Route path="/movie-details" component={MoviesDetails} />
    </div>
  </Router>)
}
ReactDOM.render(<MoviesApp />, document.getElementById('root'));

serviceWorker.unregister();
