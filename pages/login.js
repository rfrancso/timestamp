import Container from "@/components/container";
import { useState } from 'react';
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Log In
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-2 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-brand-primary rounded-md hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary-light"
        >
          Log In
        </button>
      </form>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>Don’t have an account? <Link href="/signup">Sign Up</Link></p>
      </div>
    </Container>
  );
}
