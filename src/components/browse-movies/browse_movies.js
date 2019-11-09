import React from 'react';

import {Data} from '../../data/movies-data'
class BrowseMovies extends React.Component {
  constructor(){
    super();
   this.state ={moviesListData:Data};
 }
 
   render() {
  
     return (
         <div className="treeview w-20 border">
           <h1 className="pt-3 pl-3">Movies List</h1>
           <hr/>
          { this.state.moviesListData.map((movie,index)=>{
           return(
             <ul className="mb-1 pl-3 pb-2">
             <li>
               <span>{movie.Actor}</span>
               { Object.entries( movie.Years[0]).map(([year, value])=>{
               return(
                   <ul className="nested">
                     <li>{year}</li>
                     { Object.entries( value).map(([index, movieName])=>{
                         return(
                             <ul className="nested">
                               <li>{movieName}</li>
                             </ul>
                             )
                             })
                       }
                       <br/>
                   </ul>
               )})
             }
             </li>
             <br/>
           </ul>
           )
           })}
          
       </div>
     );
   }
}
export default BrowseMovies;