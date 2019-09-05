import React, { useState } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { generateName, generatePassword } from '../lib/stringGenerator';

const Register = () => {
  const [isFormSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSuccessfullyRegistered, setSuccessfulRegistered] = useState<boolean | null>(null);

  // Form Values
  const [emailValue, setEmailValue] = useState<string>('');
  const [usernameValue, setUsernameValue] = useState<string>('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState<string>(generateName());
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState<string>(generatePassword());

  const handleSubmitForm = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newUserData = {
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password')
    };

    setFormSubmitted(true);
    fetch(`${process.env.API_URL}/register`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newUserData)
    })
      .then(response => {
        if (response.status === 200) {
          setSuccessfulRegistered(true);
          setTimeout(() => {
            setFormSubmitted(false)
            setEmailValue('');
            setUsernameValue('');
            setUsernamePlaceholder(generateName());
            setPasswordValue('');
            setPasswordPlaceholder(generatePassword());
            setSuccessfulRegistered(null);
          }, 2500)
        } else {
          setSuccessfulRegistered(false);
        }
      })
      .catch(err => {
        setSuccessfulRegistered(false);
      });
  };

  return (
    <Layout>
      <StyledRegister>
        <StyledForm onSubmit={event => handleSubmitForm(event)}>
          <h1>Register</h1>
          <Input
            type="email"
            name="email"
            label="Email"
            value={emailValue}
            placeholder="email@example.com"
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setEmailValue(event.currentTarget.value)
            }
          />
          <Input
            type="text"
            name="username"
            label="Username"
            value={usernameValue}
            placeholder={usernamePlaceholder}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setUsernameValue(event.currentTarget.value)
            }
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={passwordValue}
            placeholder={passwordPlaceholder}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setPasswordValue(event.currentTarget.value)
            }
          />
          <Button
            type="submit"
            label={isFormSubmitted ? 'Thank you!' : 'Submit'}
            isLoading={isFormSubmitted && isSuccessfullyRegistered === null}
          />
        </StyledForm>
      </StyledRegister>
    </Layout>
  );
};

const StyledRegister = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledForm = styled.form`
  grid-column: 5 / span 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: auto;
  padding: 16px;
  > * {
    margin-top: 32px;
  }
  @media screen and (max-width: 768px) {
    grid-column: 1 / span 4;
  }
`;

export default Register;
