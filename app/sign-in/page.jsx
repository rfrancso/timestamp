'use client'
import Container from "/components/container";
import { useState } from 'react';
import Link from "next/link";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '/app/firebase/config';
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();


  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({res}); // You might want to handle redirect or session storage here
      setEmail('');
      setPassword('');
      router.push("/home/alt")
    } catch(e) {
      console.error(e); // Handle errors in a user-friendly way
    }
  };

  return (
    <Container>
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-3xl font-semibold my-6 dark:text-white">
          Sign In
        </h1>
        <form onSubmit={handleSignIn} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <Link legacyBehavior href={"/sign-up"}>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Need an account? Sign Up
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}
