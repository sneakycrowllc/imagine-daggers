import React, { useState, ChangeEvent } from 'react';

import Input from '../components/input';

const Home = () => {
  const [username, setUsername] = useState<string>('');

  return (
    <div>
      <h1>Home</h1>
      <Input
        name="username"
        label="Username"
        value={username}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
      />
    </div>
  );
};

export default Home;
