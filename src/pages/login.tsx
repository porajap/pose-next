import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-8 text-2xl font-bold text-gray-100">
          Log in to Netflix
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-gray-100"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full rounded-lg bg-gray-700 py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold text-gray-100"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full rounded-lg bg-gray-700 py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-2 px-4 text-white transition-colors duration-300 hover:bg-red-700"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          New to Netflix?{" "}
          <a href="#" className="font-semibold text-red-600 hover:text-red-700">
            Sign up now.
          </a>
        </p>
      </div>
    </div>
  );
}
