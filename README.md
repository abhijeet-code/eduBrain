# 🎓 EduBraining - AI-Powered E-Learning Platform

<div align="center">

![EduBraining](https://img.shields.io/badge/EduBraining-E--Learning%20Platform-9411a8?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)

**Your gateway to a high-growth tech career**

[Live Demo](#) • [Documentation](#features) • [Getting Started](#-getting-started)

</div>

---

## 📋 Overview

**EduBraining** is a modern, AI-enhanced e-learning platform designed to make top-tier technical education accessible, affordable, and truly career-focused. Built with React 19 and Vite 7, it offers a seamless learning experience with features like course enrollment, progress tracking, certificate generation, and resume building.

## ✨ Features

### 🏠 **Landing Page**
- **Hero Section** with animated gradient backgrounds
- **About Us** section showcasing platform differentiators
- **Course Catalog** with dynamic course cards
- **Success Stories** and testimonials
- **FAQ Section** with expandable answers
- **Smooth scroll navigation** with anchor links

### 👤 **Authentication System**
- **User Registration** with email verification (OTP)
- **Secure Login** with JWT token management
- **Password Recovery** flow (Forgot → OTP → Reset)
- **Protected Routes** for authenticated users
- **Persistent Sessions** via localStorage

### 📚 **Course Management**
- **12+ Tech Courses** including:
  - Power BI, Data Analytics, Machine Learning
  - Full Stack Development, Python, Java
  - UI/UX Design, C++, .NET, Angular, DevOps, PHP
- **Dynamic Course Pages** with detailed curriculum
- **Price Management** with discounts
- **Course Enrollment** with billing integration

### 📊 **User Dashboard**
- **Profile Management** - Update personal information
- **My Courses** - Track enrolled courses and progress
- **Certificates** - View and download completion certificates
- **Assignments** - Submit and track assignment status
- **Resume Builder** - Create and export professional resumes
- **Refer & Earn** - Referral program integration
- **Mentor Connect** - Connect with course mentors

### 🎨 **Modern UI/UX**
- **Responsive Design** - Mobile-first approach
- **Light Theme** with purple/blue gradient accents
- **Smooth Animations** and transitions
- **Toast Notifications** for user feedback
- **Modal-based Authentication** flow

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.1.0 |
| **Build Tool** | Vite 7.0.4 |
| **Styling** | TailwindCSS 4.1.11 |
| **Routing** | React Router DOM 7.7.0 |
| **Icons** | Lucide React |
| **Notifications** | React Toastify |
| **Fonts** | Inter, Roboto, Montserrat |

---

## 📁 Project Structure

```
eduBrain-frontend-main/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Image assets
│   ├── component/            # Main components
│   │   ├── Home/             # Landing page sections
│   │   ├── Dashboard/        # User dashboard components
│   │   ├── Course Page/      # Course detail pages
│   │   ├── Courses/          # Course listing
│   │   ├── Billing Page/     # Payment & enrollment
│   │   ├── Contact Us/       # Contact form
│   │   ├── Hero/             # Hero section components
│   │   ├── Login.jsx         # Login modal
│   │   ├── Signup.jsx        # Registration modal
│   │   ├── Navbar.jsx        # Public navigation
│   │   ├── LoggedInNavbar.jsx # Auth navigation
│   │   ├── Footer.jsx        # Site footer
│   │   └── ProtectedRoute.jsx # Route guard
│   ├── contexts/             # React Context providers
│   │   └── ToastContext.jsx  # Toast notification context
│   ├── utils/                # Utility functions
│   ├── App.jsx               # Main app with router
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── vercel.json               # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eduBrain-frontend.git
   cd eduBrain-frontend-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 API Integration

The frontend connects to a backend API for:

| Endpoint | Purpose |
|----------|---------|
| `/api/auth/*` | Authentication (login, signup, OTP) |
| `/api/profile/*` | User profile management |
| `/api/courses/*` | Course listing & enrollment |
| `/api/certificates/*` | Certificate generation |
| `/api/resume/*` | Resume builder data |

> **Note:** Ensure the backend server is running at the URL specified in `VITE_API_BASE_URL`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size |
|------------|-------------|
| `sm` | 640px+ |
| `md` | 768px+ |
| `lg` | 1024px+ |
| `xl` | 1280px+ |
| `max-xl`, `max-lg`, etc. | Custom responsive utilities |

---

## 🎨 Color Theme

The application uses a custom color system with CSS variables:

| Color | Variable | Usage |
|-------|----------|-------|
| **Primary Purple** | `#9411a8` | Buttons, links, accents |
| **Secondary Blue** | `#1545C2` | Gradients, highlights |
| **Background** | `#f9fafb` | Page backgrounds |
| **Text Primary** | `#1f2937` | Main content |
| **Text Secondary** | `#6b7280` | Muted content |

---

## 📄 Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | Home | Public |
| `/courses` | CoursesSection | Public |
| `/courses/:courseId` | CoursePage | Public |
| `/contact` | ContactPage | Public |
| `/billing` | BillingPage | Public |
| `/profile-dashboard` | Dashboard | Protected |
| `/profile-dashboard/my-profile` | Profile | Protected |
| `/profile-dashboard/mycourses` | MyCourses | Protected |
| `/profile-dashboard/certificate` | Certificate | Protected |
| `/profile-dashboard/assignments` | Assignments | Protected |
| `/profile-dashboard/resume-builder` | ResumeBuilder | Protected |
| `/profile-dashboard/referearn` | ReferEarn | Protected |
| `/profile-dashboard/mentor` | Mentor | Protected |

---

## 🚢 Deployment

### Vercel (Recommended)

The project includes a `vercel.json` configuration for easy deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Build for production
npm run build

# The dist/ folder contains the deployable assets
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary software developed for EduBraining.

---

## 📞 Support

For support, please contact us through:
- **Website**: [edubraining.com](#)
- **Email**: support@edubraining.com

---

<div align="center">

**Built with ❤️ by the EduBraining Team**

*Discover the future of learning*

</div>
