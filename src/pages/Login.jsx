import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-stone-200">
      <form className="px-16 py-12 h-96 w-96 rounded-2xl shadow-lg bg-white text-center">
        <h1 className="text-6xl mb-10">Sign in</h1>
        <fieldset className="text-left mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full block rounded p-2 text-black outline-0"
          />
        </fieldset>
        <fieldset className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full block rounded p-2 text-black outline-0"
          />
          <button className="absolute top-2.5 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-4 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </fieldset >
        <fieldset className="w-full rounded flex justify-between my-2 items-center">
          <label htmlFor="remember" className="text-sm flex justify-center items-center">
            Remember me
            <input type="checkbox" name="remember" id="remember" className="ml-1 accent-black"/>
          </label>
          <a href="#" className="text-green-400 text-sm">Forgot password?</a>
        </fieldset>
        <button type="submit" className="bg-green-400 w-full p-2 mt-4 rounded-lg shadow text-sm">Login</button>
      </form>
    </div>
  );
}
