import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import { useToast } from "../contexts/ToastContext";

export default function Reset({ onClose, onGoBack, onLoginClick, onReset }) {
  const { showToast } = useToast();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      onClose();
    }
  };

  const handleReset = () => {
    if (!newPassword || !confirmPassword) {
      showToast("Please fill in both password fields.", "warning");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const email = localStorage.getItem('email');
    if (!email) {
      showToast("Email not found. Please start over.", "error");
      return;
    }
    fetch(BASE_URL + '/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.removeItem('email');
        showToast("Password reset successful", "success");
        onReset(newPassword);
        onLoginClick();
      })
      .catch(err => showToast('Error: ' + err.message, "error"));
  };

  const handleClose = () => {
    if (onClose) {
      onLoginClick();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl bg-white w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 bg-[#9411a8] flex flex-col justify-center items-start text-white p-6 md:p-8 text-start">
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
            <span className="hidden md:block">
              Master the Skills <br />
              for Tomorrow's Top Tech Jobs.
            </span>
          </h2>

          <p className="font-inter font-medium text-sm md:text-[15px] leading-[20px] md:leading-[29.16px] text-[#CEDAEE] mb-4 md:mb-6 tracking-normal">
            Elevate Your Skills, Secure Your Future
          </p>

          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] h-auto max-h-[390px]"
          />
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 bg-white text-gray-900 p-6 md:p-12 flex items-center justify-center overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-gray-600 hidden md:block z-10"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-gray-900">
              Reset Your Password
            </h2>
            <div className="text-center text-gray-600 text-sm mb-4 md:mb-6">
              <p>Enter a new password below to</p>
              <p>change your password</p>
            </div>

            <div className="space-y-4">
              <div className="relative w-full">
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-600">
                  New password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] text-center"
                />
              </div>

              <div className="relative w-full">
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-600">
                  Confirm password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] text-center"
                />
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#9411a8] hover:bg-[#7a0c8b] text-white cursor-pointer font-medium rounded-full transition shadow-md"
              >
                Continue
              </button>

              <div className="flex justify-start mt-6 md:mt-12">
                <button
                  onClick={handleGoBack}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-full border border-gray-300 hover:border-gray-500"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}