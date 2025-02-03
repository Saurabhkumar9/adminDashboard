import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const [show, setShow] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:4000/api/admin/signup",
        userInfo
      );
      console.log(res.data);

      if (res.data.success) {
        setShow(res.data.message);
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setIsOpen(false);
      } else {
        setShow(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        setShow(error.response.data.message);
      } else {
        setShow("Something went wrong. Please try again!");
      }
      console.log("Signup Error:", error);
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
          Create a New Account
        </Dialog.Title>

        {/* 🌟 Signup Form 🌟 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔹 Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "please enter your name" })}
              placeholder="Enter your name"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-slate-100"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message} </p>
            )}
          </div>

          {/* 🔹 Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "please enter your email" })}
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-slate-100"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message} </p>
            )}
          </div>

          {/* 🔹 Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "please enter password",
                minLength: { value: 6, massage: "minimum length at least 6" },
              })}
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 bg-slate-100"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message} </p>
            )}
          </div>

          {/* 🔹 Buttons */}
          <div className="flex justify-end">
            <p className="text-red-500">{show} </p>
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
              Signup
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default Signup;
