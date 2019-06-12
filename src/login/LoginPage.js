import React, { useState } from "react";
import StyledContainer from "../components/StyledContainer.js";
import StyledForm from "../components/StyledForm.js";
import StyledLink from "../components/StyledLink.js";
import StyledSection from "../components/StyledSection.js";
import StyledInput from "../components/StyledInput.js";
import StyledSubmitButton from "../components/StyledSubmitButton.js";
import StyledMessage from "../components/StyledMessage.js";

export default function LoginPage({ isAuthenticated, onSubmit, history }) {
  const [submit, setSubmit] = useState(false);

  function handleClickSubmit(event) {
    setSubmit(true);
    event.preventDefault();
    const form = event.target;
    onSubmit(form.apikey.value, history);
    form.reset();
  }

  function messageInvalidKey() {
    return <StyledMessage>validating... </StyledMessage>;
  }

  return (
    <StyledContainer>
      <StyledLink href="https://newsapi.org/account">
        <button>click here for key...</button>
      </StyledLink>
      <StyledForm onSubmit={handleClickSubmit}>
        <StyledSection>
          after successful registration on the homepage of newsapi.org come back
          and enter your received key in the field below
        </StyledSection>
        <label htmlFor="enterKey">
          Key:
          <StyledInput
            type="text"
            name="apikey"
            id="apikey"
            placeholder="enter your key"
          />
        </label>
        <StyledSubmitButton>submit!</StyledSubmitButton>
        {submit && !isAuthenticated ? messageInvalidKey() : <></>}
      </StyledForm>
    </StyledContainer>
  );
}
