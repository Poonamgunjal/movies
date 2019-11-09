import React from 'react';
import up from '../../assets/background.jpg';
import { Redirect } from 'react-router';

class Cards extends React.Component {

// ... your class implementation

constructor(props){
super(props);
this.state={redirect: false}
}
handleOnClick = () => {
 
  this.setState({redirect: true});
}
  render() {
    let elements =[1,2,3,4,5,6,7,8,9,10];
    if (this.state.redirect) {
        return <Redirect push to="/movie-details" />;
      }
    return (
        <div className="container-fluid" style={{'width':'100%'}}>
            <div class="row">
  
        {elements.map((value, index) => {
       return( 
        <div class="col-md-3"  style={{'padding-bottom':'5%','cursor':'pointer'}} onClick={this.handleOnClick}>
            <div className="card">
                    <img src={up} alt="Avatar" style={{'width':'100%'}}/>
                    <div className="card-body text-center">
                        <h4><b>Movie Name</b></h4> 
                        <h6>Movie Rating</h6>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <br/><br/>
                    </div>
                </div>
         </div>
       )
        })}
       
        </div>
        </div>
    );
  }
}
export default Cards;