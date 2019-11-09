import React from 'react';
import {Movies} from '../../data/movies-data'

class MoviesList extends React.Component {
 constructor(){
   super();
 this.state={movies:Movies};

}

searchData=(e)=>{
  let data =this.state.movies;
console.log('data is not Present',e.target.value); 
let filterKey =e.target.value;
var filterData = data.map(function(key, value)
{
  
 return ;
});
this.setState({
  movies:this.state.movies
});
}
sortColumns=(key)=>{
  let data =this.state.movies;
 var sortData = data.sort(function(a, b)
  {
   var one = a[key]; var two = b[key];
   return ((one < two) ? -1 : ((one > two) ? 1 : 0));
  });
  
  this.setState({
    movies:sortData
  });
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
          <th style={{"width":"60%",'cursor':'pointer'}} onClick={() => {this.sortColumns('name')}} >Movies Name</th>
          <th style={{"width":"40%",'cursor':'pointer'}} onClick={() => {this.sortColumns('type')}}>Type Of Movies</th>
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