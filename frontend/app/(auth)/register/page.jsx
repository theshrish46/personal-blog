"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/auth/register", {
      name,
      email,
      password,
    });
    console.log(data);
  };

  return (
    <>
      <div className="p-10 shadow-xl rounded-xl">
        <form
          className="flex flex-col justify-center items-start gap-3 h-auto"
          onSubmit={handleClick}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            is="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            className="mt-2 hover:bg-black hover:text-white outline-none transition-all duration-300"
          />
        </form>
      </div>
    </>
  );
};

export default page;
