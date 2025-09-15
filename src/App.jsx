import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import ProtectedRoute from "./component/ProtectedRoute";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Password from "./component/Password";
// import OTP from "./component/Otp"; // No longer needed as ForgetOTP handles both flows
import Forget from "./component/Forget";
import CoursesSection from "./component/Courses/CoursesSection";
import CoursePage from "./component/Course Page/CoursePage";
import ForgetOTP from "./component/Forgetotp";
import Reset from "./component/Resetpass";
import LoggedInNavbar from "./component/LoggedInNavbar";
import ContactPage from "./component/Contact Us/ContactPage";
import { BillingPage } from "./component/Billing Page/BillingPage";
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/Hero/Dashboard";
import Profile from "./component/Dashboard/Profile";
import MainContent from "./component/Dashboard/Hero/MainContent";
import {MyCourses} from "./component/Dashboard/MyCourses"
import Certificate from "./component/Dashboard/Certificate";
import ResumeBuilder from "./component/Dashboard/ResumeBuilder";
import ReferEarn from "./component/Dashboard/ReferEarn";
import Mentor from "./component/Dashboard/Mentor";
import Assignments from "./component/Dashboard/Assignments";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgetotp, setShowForgetotp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    handleLoginSuccess(); //  updates the navbar
    setShowPassword(false); 
    alert("Signup Successful!"); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // Modal logic wrapper for all routes
  function ModalWrapper({ children }) {
    const location = useLocation();
    const isDashboardRoute = location.pathname.startsWith("/profile-dashboard");
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="flex flex-col min-h-screen w-full">
        {!isDashboardRoute && (
          isLoggedIn ? (
            <LoggedInNavbar onLogout={handleLogout} />
          ) : (
            <Navbar onLoginClick={handleLoginClick} />
          )
        )}
        <main className="flex-grow">
          {children}
          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onSignupClick={handleSignupClick}
              onLoginSuccess={handleLoginSuccess}
              onForgotPassword={() => {
                setShowLogin(false);
                setShowForgotPassword(true);
              }}
            />
          )}
          {showSignup && (
            <Signup
              onClose={() => setShowSignup(false)}
              onLoginClick={handleLoginClick}
              onContinue={() => {
                setShowSignup(false);
                setShowOTP(true);
              }}
            />
          )}
          {showPassword && (
            <Password
              onClose={() => setShowPassword(false)}
              onGoBack={() => {
                setShowPassword(false);
                setShowOTP(true);
              }}
              onSignupSuccess={handleSignupSuccess}
            />
          )}
          
          {/* MODIFIED: This is for the SIGNUP flow. The prop is now 'context'. */}
          {showOTP && (
            <ForgetOTP
              context="signup"
              onClose={() => setShowOTP(false)}
              onGoBack={() => {
                setShowOTP(false);
                setShowSignup(true);
              }}
              onContinue={() => {
                setShowOTP(false);
                setShowPassword(true);
              }}
            />
          )}

          {/* MODIFIED: This is for the FORGOT PASSWORD flow. Added the 'context' prop. */}
          {showForgetotp && (
            <ForgetOTP
              context="reset"
              onClose={() => setShowForgetotp(false)}
              onGoBack={() => {
                setShowForgetotp(false);
                setShowForgotPassword(true);
              }}
              onContinue={() => {
                setShowForgetotp(false);
                setShowResetPassword(true);
              }}
            />
          )}

          {showResetPassword && (
            <Reset
              onClose={() => setShowResetPassword(false)}
              onLoginClick={() => {
                setShowResetPassword(false);
                setShowLogin(true);
              }}
              onGoBack={() => {
                setShowResetPassword(false);
                setShowForgetotp(true);
              }}
            />
          )}
          {showForgotPassword && (
            <Forget
              onClose={() => setShowForgotPassword(false)}
              onLoginClick={() => {
                setShowForgotPassword(false);
                setShowLogin(true);
              }}
              onContinue={() => {
                setShowForgotPassword(false);
                setShowForgetotp(true);
              }}
            />
          )}
        </main>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ModalWrapper>
          <Home />
        </ModalWrapper>
      ),
    },
    {
      path: "/billing",
      element: (
        <ModalWrapper>
          <BillingPage />
        </ModalWrapper>
      ),
    },
    {
      path: "/courses",
      element: (
        <ModalWrapper>
          <CoursesSection />
        </ModalWrapper>
      ),
    },
    {
      path: "/course-details",
      element: (
        <ModalWrapper>
          <CoursePage />
        </ModalWrapper>
      ),
    },
    {
      path: "/contact",
      element: (
        <ModalWrapper>
          <ContactPage />
        </ModalWrapper>
      ),
    },
    {
      path: "/profile-dashboard",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn} loading={loading}>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <MainContent /> },
        { path: "my-profile", element: <Profile /> },
        { path: "mycourses", element: <MyCourses /> },
        { path: "certificate", element: <Certificate /> },
        { path: "assignments", element: <Assignments /> },
        { path: "resume-builder", element: <ResumeBuilder /> },
        { path: "referearn", element: <ReferEarn /> },
        { path: "mentor", element: <Mentor /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

