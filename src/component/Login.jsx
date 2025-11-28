import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ onClose, onSignupClick, onForgotPassword, onLoginSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    setMessage("");

    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in both email and password.");
      setMessageType("error");
      return;
    }
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    setIsLoading(true);
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
        // Use the error message from the backend
        setMessage(data.msg || 'Login failed');
        setMessageType('error');
        return; // Stop the function here
      }
      localStorage.setItem('token', data.token);
      onLoginSuccess();
      navigate('/profile-dashboard');
      onClose();

    } catch (err) {
      console.error("Fetch error:", err.message);
      setMessage("A network error occurred. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl bg-white w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-[#9411a8] flex flex-col justify-center items-start text-white p-6 md:p-8 text-start relative">
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[70px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(216, 180, 254, 0.72) -3.85%, rgba(148, 17, 168, 0.72) 121.24%)",
              borderBottomRightRadius: "50%",
            }}
          />
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[50px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(216, 180, 254, 0.72) -3.85%, rgba(148, 17, 168, 0.72) 121.24%)",
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
        <div className="w-full md:w-1/2 bg-white text-gray-900 p-6 md:p-12 relative flex items-center justify-center overflow-y-auto rounded-[37px]">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 w-full max-w-sm space-y-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Welcome back</p>
              <h2 className="text-2xl font-semibold text-gray-900">Log in to your Account</h2>
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-600">
                Email address
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] text-center"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] text-center"
              />
            </div>
            {message && (
              <p className={`text-center text-sm font-medium ${messageType === 'error' ? 'text-red-500' : 'text-green-500'
                }`}>
                {message}
              </p>
            )}
            <button
              onClick={onForgotPassword}
              className="text-[#9411a8] hover:text-[#7a0c8b] text-sm font-medium"
            >
              Forgot Password?
            </button>

            <button
              onClick={handleContinue}
              disabled={isLoading}
              className={`w-full py-3 text-white cursor-pointer font-medium rounded-full transition shadow-md ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#9411a8] hover:bg-[#7a0c8b]"
                }`}
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>

            <div className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <button onClick={onSignupClick} className="text-[#9411a8] hover:text-[#7a0c8b] font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}