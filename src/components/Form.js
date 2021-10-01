import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './form.css';

export default function Form() {
  const [values, setValues] = useState({
    phoneNumber: '',
    accessCode: '',
  });

  // const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handlePhoneNumberInputChange(e) {
    setValues({ ...values, phoneNumber: e.target.value });
  }
  function handleAccessCodeInputChange(e) {
    setValues({ ...values, accessCode: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (values.phoneNumber == null) {
      setError('Please enter a phone number!');
    }
    // NEED TO CHECK ACCESS CODE IF IT IS THE SAME WITH GENERATED CODE
    setLoading(false);
  }
  return (
    <div class='form-container'>
      {error && <Alert variant='danger'>{error}</Alert>}
      <form class='register-form' onSubmit={handleSubmit}>
        <input
          onChange={handlePhoneNumberInputChange}
          value={values.phoneNumber}
          id='phone-number'
          class='form-field'
          // type='text'
          placeholder='Phone Number'
          name='phoneNumber'
          required
        />
        <input
          onChange={handleAccessCodeInputChange}
          value={values.accessCode}
          id='access-code'
          class='form-field'
          // type='text'
          placeholder='Access Code'
          name='accessCode'
        />
        <button disabled={loading} class='form-field' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}
