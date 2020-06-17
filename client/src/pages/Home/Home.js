import React from 'react';
import './App.css';
import Carousel from "./Carousel";



class Home extends React.Component {
  render(){
    return (
      <>
        <div id="homeText">
        <h1>Stoicism Quotes</h1>
        </div>
        {/* <div id="homeCarousel">
          <Carousel />
        </div> */}
        <div id="container">
        <h5></h5>
        </div>
      </>
    );
  }
}

export default Home;
