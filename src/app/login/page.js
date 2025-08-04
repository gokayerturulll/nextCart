"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    setSuccess(true);
    setError("");
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-[450px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {error && (
          <p className="mb-4 text-red-600 font-medium bg-red-100 px-4 py-2 rounded">
            {error}
          </p>
        )}

        {success && (
          <p className="mb-4 text-green-600 font-medium bg-green-100 px-4 py-2 rounded">
            Register successfully completed!
          </p>
        )}

        <div className="mb-4">
          <label className=" text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={form.email}
            onChange={handleChange}
            className="register-login-form"
          />
        </div>

        <div className="mb-4">
          <label className=" text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="register-login-form"
          />
        </div>

        <div className="flex justify-between mb-3 items-center">
          <div className="flex gap-2 ">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span>Forgot password</span>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition cursor-pointer"
        >
          Login
        </button>

        <div className="flex text-sm p-2 justify-center gap-2 mt-3">
          <span>Dont have an account ?</span>
          <a className="text-blue-800" href="/register">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
