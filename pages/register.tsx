import React, { useState } from 'react';
import Layout from '../components/Layout';

const Register = () => {
  const [isFormSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSuccessfullyRegistered, setSuccessfulRegistered] = useState<boolean | null>(null);

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
    }).then(response => {
      if (response.status === 200) {
        setSuccessfulRegistered(true);
      } else {
        setSuccessfulRegistered(false);
      }
    }).catch(err => {
      console.log(err);
      setSuccessfulRegistered(false);
    })
  };
  return (
    <Layout>
      <h1>Register</h1>
      {!isFormSubmitted ? (
        <form onSubmit={event => handleSubmitForm(event)}>
          <input type="email" name="email" />
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        isSuccessfullyRegistered === null ? (
          <div>
            Loading...
          </div>
        ) : (
          <div>
            {isSuccessfullyRegistered ? 'Successfully registered!' : 'Uh oh!'}
          </div>
        )
      )}
    </Layout>
  );
};

export default Register;
