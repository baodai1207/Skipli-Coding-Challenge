import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [values, setValues] = useState({
    phoneNumber: '',
    accessCode: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlePhoneNumberInputChange = event => {
    setValues({ ...values, phoneNumber: event.target.value });
  };
  const handleAccessCodeInputChange = event => {
    setValues({ ...values, accessCode: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (values.phoneNumber && values.accessCode) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class='form-container'>
      <form class='register-form' onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div class='success-message'>Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handlePhoneNumberInputChange}
          value={values.phoneNumber}
          id='phone-number'
          class='form-field'
          // type='text'
          placeholder='Phone Number'
          name='phoneNumber'
        />
        {submitted && values.phoneNumber ? (
          <span id='phone-number-error'>Please enter a phone number</span>
        ) : null}
        <input
          onChange={handleAccessCodeInputChange}
          value={values.accessCode}
          id='access-code'
          class='form-field'
          // type='text'
          placeholder='Access Code'
          name='accessCode'
        />
        <button class='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
