import React, { useState } from "react";
import { X, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ onClose, onSignupClick, onForgotPassword, onLoginSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in both email and password.");
      return;
    }
    console.log("Sending login request with:", { name, email });
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const res = await fetch(BASE_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      console.log("Response status:", res.status, res.statusText);
      const data = await res.json();
      console.log("Response data:", data);
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }
      localStorage.setItem('token', data.token);
      onLoginSuccess(); 
      onClose();
  
    } catch (err) {
      console.error("Fetch error:", err.message);
      alert(`Login error: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl border border-[#1545C2] border-1 bg-opacity-100 w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-[#1545C2] flex flex-col justify-center items-start text-white p-6 md:p-8 text-start relative">
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[70px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderBottomRightRadius: "50%",
            }}
          />
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[50px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderBottomRightRadius: "50%",
            }}
          />
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-gray-200 block md:hidden"
          >
            <X size={20} />
          </button>

          <h2 className="font-inter font-bold uppercase text-xl md:text-[26px] leading-[30px] md:leading-[40px] tracking-normal mb-2">
            <span className="block md:hidden">Build future ready skills</span>
            <span className="hidden md:block">Master the Skills <br />
              for Tomorrow's Top Tech Jobs.</span>
          </h2>

          <p className="font-inter font-medium text-sm md:text-[15px] leading-[20px] md:leading-[29.16px] text-[#CEDAEE] mb-4 md:mb-6 tracking-normal">
            Elevate Your Skills, secure Your Future
          </p>

          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] h-auto max-h-[390px]"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#020817] text-white p-6 md:p-12 relative flex items-center justify-center overflow-y-auto rounded-[37px]">
          <div
            className="absolute bottom-0 right-0 w-38 h-38 z-0 blur-[50px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderTopLeftRadius: "50%",
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white z-10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 w-full max-w-sm space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Welcome back</p>
              <h2 className="text-2xl font-semibold">Log in to your Account</h2>
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                Email address
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-center"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                Password
              </label>
              <input
                type="password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-center"
              />
            </div>

            <div
              onClick={() => {
                onForgotPassword();
              }}
              className="text-sm text-right text-gray-400 hover:text-blue-300 cursor-pointer"
            >
              Forgot Password?
            </div>

            <button
              onClick={handleContinue}
              className="w-full py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition"
            >
              Continue
            </button>

            <div className="text-sm text-center">
              <span>Don’t have an account? </span>
              <button
                onClick={() => {
                  onClose();
                  onSignupClick();
                }}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}