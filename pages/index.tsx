import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import Input from '../components/input';
import FormButton from '../components/formButton';

const Home = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      username,
      password,
    };

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res: any) => res.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Home</h1>
      <StyledRegisterSection>
        <h2>Sign up</h2>
        <StyledRegisterForm onSubmit={handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            placeholder="agent_agentson93"
          />
          <Input
            name="email"
            label="Email"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            placeholder="agentson93@agent.com"
          />
          <Input
            name="password"
            label="Password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            type="password"
          />
          <FormButton>Submit</FormButton>
        </StyledRegisterForm>
      </StyledRegisterSection>
    </div>
  );
};

const StyledRegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export default Home;
