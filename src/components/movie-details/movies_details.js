import React from 'react';
import up from '../../assets/background.jpg';

class MoviesDetails extends React.Component {
  render() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div class="card text-center">
                  <img src={up} alt="Avatar" style={{'width':'100%'}}/>
                  <h1>2019</h1>
                  <p class="title">The Lighthouse</p>
                  <p>Directed By Robert Eggers</p>
                  <h6>Movie Rating</h6>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <br/><br/>
                </div>
            </div>
            <div className='col-md-8'>
             <p>
             <br/><b>The Lighthouse </b>is a 2019 American psychological horror film directed and produced by 
             Robert Eggers, who co-wrote the screenplay with his brother Max Eggers. 
             Shot in black-and-white, the film follows two lighthouse keepers (portrayed by 
             Willem Dafoe and Robert Pattinson) who start to lose their sanity when a storm 
             hits the remote island on which they are stationed.

              It had its world premiere at the 72nd Cannes Film Festival on May 19, 2019, and was released
              on October 18, 2019, by A24. The film received universal acclaim, with critics highlighting the
                technical aspects (notably the cinematography and production design), Eggers' screenplay 
                and direction, and the performances of Dafoe and Pattinson.
             <br/> <br/><b>Director:</b> Robert Eggers
             <br/><b> Writers:</b> Max Eggers, Robert Eggers
              <br/><b>Stars: </b>Willem Dafoe, Robert Pattinson, Valeriia Karaman 
             </p>
             <p style={{'background':'black','padding':'5%'}} className='text-center'>
               <h1 style={{'color':'red'}}>Now Book YOur Show Here</h1>
               <h2>
                 <a href='https://in.bookmyshow.com/pune/movies' target='blank'>https://in.bookmyshow.com/pune/movies</a>
               </h2>
            </p>
          </div>
          </div>
       </div>
    )
  }
}
export default MoviesDetails;