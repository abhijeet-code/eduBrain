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
      <div className="flex flex-col md:flex-row rounded-[37px] overflow-hidden shadow-2xl bg-white w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        {/* Left Decorative Panel */}
        <div className="relative hidden md:flex w-full md:w-1/2 bg-[#9411a8] flex-col justify-center p-8 text-white">
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
          <div className="relative z-10">
            <h2 className="font-bold text-2xl mb-4">Master the Skills for Tomorrow's Top Tech Jobs.</h2>
            <p className="text-blue-100">Elevate Your Skills, Secure Your Future</p>
          </div>
          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] h-auto max-h-[390px] mt-8"
          />
        </div>

        {/* Right Form Panel */}
        <div className="relative w-full md:w-1/2 text-gray-900 p-8 flex flex-col justify-center bg-white">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"><X size={24} /></button>
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">Check Your Inbox</h2>
            <p className="text-center text-sm text-gray-500 mb-6">Enter the verification code sent to <span className="font-semibold text-[#9411a8]">{email}</span></p>

            <div className="space-y-6">
              <input
                type="text"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="6-digit code"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-full text-center text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8]"
                maxLength="6"
              />

              {/* Error and Success Messages */}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {message && <p className="text-green-600 text-sm text-center">{message}</p>}

              <button onClick={handleContinue} className="w-full py-3 bg-[#9411a8] hover:bg-[#7a0c8b] text-white font-medium rounded-full transition shadow-md">Confirm</button>

              <div className="text-center">
                <button onClick={handleResendOTP} className="text-[#1545C2] text-sm hover:text-[#0f3bb0] font-medium">Resend Email</button>
              </div>

              <div className="flex justify-start mt-8">
                <button onClick={onGoBack} className="inline-flex items-center text-gray-600 px-3 py-2 rounded-full border border-gray-300 hover:border-gray-500 hover:text-gray-900 transition-colors">
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




