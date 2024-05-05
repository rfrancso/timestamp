import React, { useState } from 'react';
import { signIn } from '../firebase/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      await signIn(email, password);
      console.log('User signed in');
      // Redirect or perform other actions
    } catch ( error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;