import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/auth.service.js";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    try {
      setLoading(true);
      await loginUser({ username, password });
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full animate-fade-in">
      <h1 className="font-bold text-[16px] mb-4 text-center">
        Login with your looom account
      </h1>
      <form onSubmit={handleLogin} className="w-full space-y-z">
        <Input
          type="text"
          placeholder="Username,phone or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full h-14 p-4 rounded-lg focus-visibal:ring-0 focus:border-black/40 transition-color duration-200"
        />
        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full h-14 p-4 rounded-lg focus-visibal:ring-0 focus:border-black/40 transition-color duration-200"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {errorMessage}
          </p>
        )}
        <Button
          type="submit"
          disable={loading}
          className="w-full h-14 p-4 rounded-lg bg-black/80 text-gray-400 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
        >
          {loading ? "Logging in....." : "login"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Forgot Password?
        </a>
      </div>
      <div className="w-full flex items-center justify-center my-6">
        <div className="h-px bg-gray-700 grow"></div>
        <span className="px-4 text-gray-700 text-sm"> or</span>
        <div className="h-px bg-gray-700 grow"></div>
      </div>
      <div className="w-full text-center">
        <Link to="/register" className="w-full block">
          <Button
            varient="secondary"
            type="button"
            className="w-full h-14 p-4 rounded-lg border border-black/20 bg-white hover:border-black/60 cursor-pointer hover:bg-white text-black"
          >
            Create an account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
