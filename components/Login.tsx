"use client";

import { login, signup } from "@/app/actions/user";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function loginHandler() {
    const token = await login(email, password);
    if (!token) {
      alert("Failed to login");
      return;
    }
    localStorage.setItem("token", token.token);
    setEmail("");
    setPassword("");
    alert("User Login Success");
    router.push("/boards");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Logo"
          src="/logo.svg"
          className="mx-auto h-16 w-auto"
          width={100}
          height={100}
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-16 shadow-xl ">
        <div className="mt-4">
          <label className="text-md font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              required
              className="w-full p-2 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 md-4"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label className="text-md font-medium text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              type="password"
              required
              className="w-full p-2 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 md-4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-sm my-6 bg-nav-blue p-3 text-sm font-semibold text-white shadow-sm"
            onClick={loginHandler}
          >
            Log In
          </button>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="mt-10 text-center text-sm text-gray-500">
          Not an existing user?{" "}
          <a href="/signup" className="font-semibold leading-6 text-nav-blue">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}
