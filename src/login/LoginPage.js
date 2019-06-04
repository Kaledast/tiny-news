import React from "react";
import styled from "styled-components";

//https://newsapi.org/account
/* document.location.replace("http://www.server.de"); */

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LoginPage({ onSubmit }) {
  //const redirectURL = "https://newsapi.org/account";

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event.target.apikey.value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <a href="https://newsapi.org/account">Get Key here...</a>

      <label htmlFor="enterKey">
        Key:
        <input
          type="text"
          name="apikey"
          id="apikey"
          placeholder="enter your key here"
        />
      </label>
    </StyledForm>
  );
}
