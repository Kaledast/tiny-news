import React, { useState, useEffect } from 'react';
import LoginContainer from '../components/styled_login/LoginContainer.js';
import LoginForm from '../components/styled_login/LoginForm.js';
import LoginLink from '../components/styled_login/LoginLink.js';
import LoginSection from '../components/styled_login/LoginSection.js';
import LoginInput from '../components/styled_login/LoginInput.js';
import LoginSubmitButton from '../components/styled_login/LoginSubmitButton.js';

export default function LoginPage({ isAuthenticated, onSubmit, history }) {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');

  function handleClickSubmit(event) {
    setSubmit(true);
    event.preventDefault();
    const form = event.target;
    onSubmit(form.apikey.value, history);
    form.reset();
  }

  function onMessage() {
    setTimeout(() => {
      setMessage(
        isAuthenticated ? 'validating...' : 'something went wrong, try again'
      );
    }, 2500);
  }

  return (
    <LoginContainer>
      <LoginLink href='https://newsapi.org/account'>
        <button>click here for key...</button>
      </LoginLink>
      <LoginForm onSubmit={handleClickSubmit}>
        <LoginSection>
          after successful registration on the homepage of newsapi.org come back
          and enter your received key in the field below
        </LoginSection>
        <label htmlFor='enterKey'>
          Key:
          <LoginInput
            type='text'
            name='apikey'
            id='apikey'
            placeholder='enter your key'
          />
        </label>
        <LoginSubmitButton
          onClick={() => {
            setMessage('validating...');
            onMessage();
          }}
        >
          submit!
        </LoginSubmitButton>
        <h2>{message}</h2>
      </LoginForm>
    </LoginContainer>
  );
}
