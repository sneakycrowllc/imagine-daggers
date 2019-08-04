import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../components/Form/input';
import Button from '../components/Form/button';

const StyledSignupForm = styled.div`
  h3 {
    margin-bottom: 16px;
  }
  form {
    > * {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;

const SignupForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [isSignupSuccessful, setSignupSuccesful] = useState(false);
  const [isSendingData, setSendingData] = useState(false);

  const handleChange = newValue => {
    setEmailValue(() => newValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Form only submits email right now, so we'll just pull the state and submit that
    setSendingData(() => true);
    fetch(`${process.env.API_URL}/signup`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: emailValue
      })
    })
      .then(res => {
        if (res.status === 200) {
          setSignupSuccesful(true);
          // Reset state
          setTimeout(() => {
            setEmailValue('');
            setSignupSuccesful(() => false);
            setSendingData(() => false);
          }, 2500);
        } else {
          setSignupSuccesful(false);
        }
        setSendingData(() => false);
      })
      .catch(err => {
        setSignupSuccesful(false);
        setSendingData(() => false);
      });
  };

  return (
    <StyledSignupForm>
      <h3>Signup for more information</h3>
      <form onSubmit={event => handleSubmit(event)}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={emailValue}
          placeholder="email@example.com"
          onChange={event => handleChange(event.target.value)}
        />
        <Button
          type="submit"
          label={isSignupSuccessful ? 'Thank You!' : 'Submit'}
          isLoading={isSendingData}
        />
      </form>
    </StyledSignupForm>
  );
};

export default SignupForm;
