import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../store/Context";

const StyledContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  font-size: 1.2em;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
`;

const StyledLink = styled.a`
  margin: 10px;
  font-size: 2em;
  border: 1px solid black;
  border-radius: 3px;
`;

const StyledSection = styled.section`
  padding: 12px;
  margin: 10px;
  text-align: center;
`;

const StyledInput = styled.input`
  margin-left: 5px;
  padding: 3px;
`;

const StyledSubmitButton = styled.button`
  margin-top: 17px;
  border: 1px solid black;
  border-radius: 3px;
`;

export default function LoginPage({ handleSubmit, history }) {
  const { state, KeySetting, Key } = useContext(Context);
  //console.log("login authorization:", isAuth.value);

  return (
    <StyledContainer>
      <StyledLink href="https://newsapi.org/account">
        <button>click here for key...</button>
      </StyledLink>
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(event, history);
          //set key to global state
          KeySetting({
            type: "setKey",
            input: { ...Key, value: event.target.apikey.value }
          });
        }}
      >
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
        <StyledSection>{state.value}</StyledSection>
        <h1>{Key.value}</h1>
      </StyledForm>
    </StyledContainer>
  );
}
