import React from 'react';
import './index.css';

export default function App() {
  return (
    <div class='form-container'>
      <form class='register-form'>
        {/* Uncomment the next line to show the success message */}
        {/* <div class='success-message'>Success! Thank you for registering</div> */}
        <input
          id='phone-number'
          class='form-field'
          type='text'
          placeholder='Phone Number'
          name='phoneNumber'
        />
        {/* Uncomment the next line to show the error message */}
        <span id='first-name-error'>Please enter a phone number</span>
        <input
          id='access-code'
          class='form-field'
          type='text'
          placeholder='Access Code'
          name='accessCode'
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
