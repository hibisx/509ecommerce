"use client";

import React, { useState } from "react";
import Link from "next/link";
import SocialProviders from "./SocialProviders";

export default function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const [show, setShow] = useState(false);
  const title = mode === "sign-up" ? "Join Nike Today!" : "Welcome back";
  const cta = mode === "sign-up" ? "Sign Up" : "Sign In";

  return (
    <div className="space-y-6">
      <p className="text-center text-[--text-body] text-[--color-dark-700]">
        {mode === "sign-up" ? (
          <>
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Sign In
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/sign-up" className="underline">
              Create an account
            </Link>
          </>
        )}
      </p>

      <h1 className="text-center text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-center text-[--color-dark-700]">
        Create your account to start your fitness journey
      </p>

      <SocialProviders />

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[--color-light-300]" />
        <span className="text-[--color-dark-700] text-sm">
          Or {mode === "sign-up" ? "sign up" : "sign in"} with
        </span>
        <div className="h-px flex-1 bg-[--color-light-300]" />
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {mode === "sign-up" && (
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[--color-dark-900]/20"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[--color-dark-900]/20"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              required
              className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 pr-16 outline-none focus:ring-2 focus:ring-[--color-dark-900]/20"
              placeholder="minimum 8 characters"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[--color-dark-700] text-sm underline"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[--color-dark-900] text-white py-3 font-medium hover:opacity-90 focus:ring-2 focus:ring-[--color-dark-900]/30"
        >
          {cta}
        </button>

        {mode === "sign-up" && (
          <p className="text-center text-xs text-[--color-dark-700]">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
