import React, { useState, useEffect } from "react";
import { ChevronLeft, X } from "lucide-react";

export default function ForgetOTP({ onClose, onGoBack, onContinue, context }) {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const clearNotifications = () => {
    setError("");
    setMessage("");
  };

  const handleContinue = async () => {
    clearNotifications();
    if (!/^\d{6}$/.test(otpCode)) {
      return setError("Please enter a valid 6-digit OTP.");
    }
    
    try {
      const res = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpCode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);
      onContinue();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResendOTP = async () => {
    clearNotifications();
    try {
      const res = await fetch(`${BASE_URL}/api/auth/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // ✅ This is the key: send the context to the smart backend
        body: JSON.stringify({ email, context }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);
      setMessage(data.msg); // Show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] overflow-hidden shadow-2xl border border-[#1545C2] w-full max-w-[1108px] bg-[#020817]">
        {/* Left Decorative Panel */}
        <div className="relative hidden md:flex w-full md:w-1/2 bg-[#1545C2] flex-col justify-center p-8 text-white">
          <h2 className="font-bold text-2xl mb-4">Master the Skills for Tomorrow's Top Tech Jobs.</h2>
          <p className="text-blue-200">Elevate Your Skills, Secure Your Future</p>
        </div>
        
        {/* Right Form Panel */}
        <div className="relative w-full md:w-1/2 text-white p-8 flex flex-col justify-center">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X size={24} /></button>
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4">Check Your Inbox</h2>
            <p className="text-center text-sm text-gray-400 mb-6">Enter the verification code sent to <span className="font-semibold text-white">{email}</span></p>
            
            <div className="space-y-6">
              <input
                type="text"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="6-digit code"
                className="w-full px-4 py-3 bg-transparent border border-blue-600 rounded-full text-center text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                maxLength="6"
              />

              {/* Error and Success Messages */}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {message && <p className="text-green-500 text-sm text-center">{message}</p>}

              <button onClick={handleContinue} className="w-full py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">Confirm</button>
              
              <div className="text-center">
                <button onClick={handleResendOTP} className="text-blue-400 text-sm hover:text-blue-300">Resend Email</button>
              </div>

              <div className="flex justify-start mt-8">
                <button onClick={onGoBack} className="inline-flex items-center text-white px-3 py-2 rounded-full border border-blue-600 hover:border-gray-400">
                  <ChevronLeft size={16} className="mr-2" /> Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




