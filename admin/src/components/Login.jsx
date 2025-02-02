import React, { useState } from "react"; 
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login({ isOpen, setIsOpen }) {
  const [show, setShow] = useState(""); // Initialize state for show

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", userInfo);
      // console.log("Login Success:", res.data);
      setShow(res.data.message); 
      
    } catch (error) {
      if (error.response) {
        setShow(error.response.data.message); // ✅ Backend Error Message UI में दिखाएं
      } else {
        setShow("Something went wrong. Please try again!");
      }
      console.error("Error during login:", error);
    }
  
    reset();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-black/60"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-sm mx-auto">
        <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4">
          Login to Your Account
        </Dialog.Title>

        {/* 🌟 Login Form 🌟 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-slate-100"
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-slate-100"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <p className="text-red-500">{show}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="m-4 rounded-md bg-red-900 px-2 py-1 text-xs font-medium text-white ring-1 ring-pink-700/10 ring-inset"
            >
              Close
            </button>
            <button
              type="submit"
              className="m-4 rounded-md bg-green-900 px-2 py-1 text-xs font-medium text-white ring-1 ring-pink-700/10 ring-inset"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default Login;
