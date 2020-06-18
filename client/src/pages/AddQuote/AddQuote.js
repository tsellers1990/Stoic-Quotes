import React, { useState, useEffect } from 'react';
import { Input, FormBtn, UploadBtn } from '../../components/Form/index'
import API from "../../utils/API";
import "./AddQuote.css";
import { Link, withRouter, Redirect } from 'react-router-dom';
// import history from '../../utils/history';
// import { push } from 'connected-react-router';
// import { useDispatch } from 'react-redux'
// import { withRouter } from 'react-router-dom';
// find a way of getting the user ID for the API.savequote functionality //if we have time, get it from the profile page


const AddQuotes = () => {

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.quote) {
      API.saveQuote({
        person: formObject.person,
        quote: formObject.quote
      })
      .catch(err => console.log(err));
    }
  };


  return (
    <div className="new-quote-form">
      <form>
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
            {/* I need this to redirect, but idk how :/ */}
        </FormBtn>
      </form>
    </div>
  );
    
}

export default withRouter(AddQuotes);