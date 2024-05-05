import React, { useState } from 'react';
import { signIn } from '/firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async event => {
    event.preventDefault();
    setError(''); // Clear previous errors

    try {
      await signIn(email, password);
      // Redirect user or show success message
      console.log('Logged in');
    } catch (error) {
      setError(error.message); // Show error message to the user
      console.error('Failed to login:', error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
