# 📚 LMS Project – MERN Stack Full-Stack Application

A fully featured **Learning Management System (LMS)** built with the MERN stack—empowering course discovery, enrollment, content delivery, and user management with a scalable, modern architecture.

---
---

## ✨ Features

- **User Authentication & Authorization**: Secure login, signup, and role-based access (student, instructor, admin).
- **Course Catalog**: Browse, search, and enroll in available courses.
- **Admin & Instructor Tools**: Create, edit, and manage courses.
- **Content Delivery**: View lectures and course materials.
- **User Dashboard**: Track enrollments, progress, and course history.
- **RESTful API** powered by Express.js and Node.js.
- **MongoDB Database** for flexible and scalable data storage.

---

## 🛠 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB (local or Atlas-hosted)  
- **Authentication**: JWT (JSON Web Tokens)  
- **HTTP Client**: Axios or Fetch  
- **State Management**: React Context or Redux (optional)

---

## 📂 Project Structure

```text
lms-project/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Shared components (Navbar, CourseCard, Dashboard, etc.)
│   │   ├── pages/        # Page-level components (Login, Courses, Profile, etc.)
│   │   ├── services/     # API calls (authService, courseService)
│   │   └── App.jsx
│   └── package.json
│
├── server/               # Backend API
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas (User, Course, Enrollment)
│   ├── routes/           # Express routes (auth, courses, enrollments)
│   └── server.js
│
├── .env                  # Secrets (MONGO_URI, JWT_SECRET)
├── README.md
└── package.json
