import React from 'react';
import {Movies} from '../../data/movies-data'

class MoviesList extends React.Component {
 constructor(){
   super();
 this.state={movies:Movies};

}

searchData=()=>{
console.log('data is not Present'); 
}
  render() {
  
    return (
    <div className="container text-center" style={{"width":"60%"}} >
       <br/><br/><div style={{"width":"40%"}} >  
      <input type="text" id="myInput" onKeyUp={this.searchData} placeholder="Search for movies names.."
       title="Type in a name"/>
      </div><br/>
      <table id="myTable" style={{"paddingBottom":"10%"}}>
        <tbody>
          <tr className="header">
          <th style={{"width":"60%"}} >Movies Name</th>
          <th style={{"width":"40%"}} >Type Of Movies</th>
        </tr>
        {  this.state.movies.map((movie,index)=>{
            return(
              <tr  className="text-center">
              <td>{movie.name}</td>
              <td>{movie.type}</td>
            </tr>
            )
         })
        }
        </tbody>
      </table><br/><br/>
    </div>
    );
  }
}
export default MoviesList;