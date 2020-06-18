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
    if (formObject.quote) {
      // console.log("cheese")
      API.saveQuote({
        person: formObject.person,
        quote: formObject.quote
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
          name="person"
          placeholder="Who Said it? (if unknown, leave blank)"
          style={{ marginTop: 10}}
        />
        <Input 
          onChange={handleInputChange}
          name="quote"
          placeholder="What did they say?"
          style={{ marginTop: 10}}
        />
        <FormBtn //this is the submit button
          disable={!(formObject.title || formObject.description)}
          onClick={handleFormSubmit}>
        </FormBtn>
      </form>
    </div>
  );
    
}

export default AddQuotes;