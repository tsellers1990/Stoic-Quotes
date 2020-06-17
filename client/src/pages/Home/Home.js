import React from 'react';
import './App.css';
import Carousel from "./Carousel";



class Home extends React.Component {
  render(){
    return (
      <>
        <div id="homeText">
        <h1>Find A Contractor With A Photo</h1>
        </div>
        <div id="homeCarousel">
          <Carousel />
        </div>
        <div id="container">
        <h5>Imagine those times your sink in plugged, and the plunger isn't cutting it. Your furnace has stopped working and it's 20 degrees outside - or colder! Or your backyard needs landscaping, but you don't have the time to do it yourself.</h5>
        <h5>You need a good contractor, but they are so hard to find. So let the contractors find your job! Upload a photo of your home improvement job to Picture It Done and start getting quotes from A-rated contractors!</h5>
        <h5>Create your account using our Login button in the top right, fill in your job details, and our contractors will start bidding. Our certified partners specialize in nearly every avenue of home improvement, plumbing, gardening and landscaping, or anything else you can dream up.</h5>
        </div>
      </>
    );
  }
}

export default Home;
