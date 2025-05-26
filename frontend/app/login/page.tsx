"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle login logic here
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/airtable-logo.svg"
            alt="Airtable Logo"
            width={124}
            height={40}
            priority
          />
        </div>

        {/* Login Form */}
        <div className="bg-gray-50 rounded-md p-6 mb-4">
          <h1 className="text-xl font-medium text-gray-900 mb-6">Sign in</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Image 
                  src="/email-icon.svg"
                  alt="Email Icon"
                  width={20}
                  height={16}
                />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="calum@webframe.xyz"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Image 
                  src="/lock-icon.svg"
                  alt="Lock Icon"
                  width={16}
                  height={21}
                />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••••••"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-md transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Sign in with Google */}
        <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2.5 px-4 mb-2 transition-colors hover:bg-gray-50">
          <Image
            src="/google-logo.svg"
            alt="Google Logo"
            width={18}
            height={18}
            className="mr-2"
          />
          <span>Sign in with Google</span>
        </button>

        {/* Sign in with SSO */}
        <div className="flex justify-end">
          <Link href="/sso" className="text-sm text-gray-500 hover:text-gray-700">
            Sign in with SSO
          </Link>
        </div>

        {/* Sign up link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}