import React from "react";
import StyledContainer from "../components/StyledContainer.js";
import StyledForm from "../components/StyledForm.js";
import StyledLink from "../components/StyledLink.js";
import StyledSection from "../components/StyledSection.js";
import StyledInput from "../components/StyledInput.js";
import StyledSubmitButton from "../components/StyledSubmitButton.js";

export default function LoginPage({ onSubmit, history }) {
  function handleSubmit(event) {
    console.log(event);

    event.preventDefault();
    const form = event.target;
    onSubmit(form.apikey.value, history);
    form.reset();
  }

  return (
    <StyledContainer>
      <StyledLink href="https://newsapi.org/account">
        <button>click here for key...</button>
      </StyledLink>
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
    </StyledContainer>
  );
}
