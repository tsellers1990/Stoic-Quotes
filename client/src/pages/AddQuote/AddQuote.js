import React, { useState, useEffect } from 'react';
import { Input, FormBtn, UploadBtn } from '../../components/Form/index'
import API from "../../utils/API"
import "./AddQuote.css";
// find a way of getting the user ID for the API.savequote functionality //if we have time, get it from the profile page


const AddQuotes = () => {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // function awsPost() {
  //   handleUpload = (ev)
  // } //this isnt working bc of jquery

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.description) {
      API.savequote({
        title: formObject.title,
        user: formObject.user,
        description: formObject.description,
        date: Date.now,
        image: formObject.image,
        phone: formObject.phone,
        email: formObject.email
      })
      // .then(awsPost)
      .catch(err => console.log(err));
    }
  };

  // function handleRedirect () {
  //   return(<Redirect to ={{pathname: "/home"}} />)
  // }

  return (
    <div className="new-quote-form">
      <form>
        {/* maybe add something to the navbar to hold the username */}
        <Input 
          onChange={handleInputChange}
          name="title"
          placeholder="Your Post Title (required)"
          style={{ marginTop: 10}}
        />
        <Input 
          onChange={handleInputChange}
          name="description"
          placeholder="Please Describe Your Problem"
          style={{ marginTop: 10}}
        />
        <Input
          onChange={handleInputChange}
          name="phone"
          placeholder="Phone Number (optional)"
          style={{ marginTop: 10}}
        />
        <Input 
          onChange={handleInputChange}
          name="email"
          placeholder="Email (optional)"
          style={{ marginTop: 10}}
        />
          <form id="uploadForm" enctype="multipart/form-data">
              <label for="description"></label>
              <label for="upload">Choose a file for photo upload! </label>
              <input type="file" name="upload" id="upload" />
          </form>
        <FormBtn //this is the submit button
          disable={!(formObject.title || formObject.description)}
          onClick={handleFormSubmit}
        >
        </FormBtn>
      </form>
    </div>
  );
    
}

export default AddQuotes;