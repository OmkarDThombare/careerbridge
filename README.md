# 💼 CareerBridge – Job Portal (MERN Stack)

A full-stack **Job Portal Web Application** built using the **MERN stack** where job seekers can search and apply for jobs, manage profiles, and recruiters can post jobs, manage companies, and shortlist candidates.

This project focuses on **real-world MERN architecture**, secure authentication, role-based access control, and a clean, responsive UI backed by scalable backend APIs.

---

## ✨ Features

### 👤 Job Seeker Features

- User authentication (JWT based)
- Browse, search, and filter job listings
- Apply for jobs and track application status
- Manage profile, skills, and resume uploads
- View applied jobs history

### 🏢 Recruiter Features

- Recruiter authentication with role-based access
- Create and manage companies
- Post, update, and delete job listings
- View applicants for each job
- Shortlist candidates and manage application status

### 🔐 Platform Features

- Role-based protected routes (Student / Recruiter)
- Secure authentication & authorization
- Resume upload and profile management
- Scalable REST APIs

---

## 🧑‍💻 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- React Router
- Redux Toolkit
- Axios
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Uploads)
- Cloudinary (Resume Uploads)

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

### Example `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
⚠️ Never commit .env files to GitHub
```

## 🚀 How to Run the Project Locally
### 1️⃣ Clone the Repository
bash
```
git clone https://github.com/OmkarDThombare/CareerBridge.git
cd CareerBridge
```
### 2️⃣ Backend Setup
bash
```
cd backend
npm install
npm run dev
```
### 3️⃣ Frontend Setup
bash
```
cd frontend
npm install
npm run dev
```

## 🔐 Authentication Flow
JWT-based authentication
Role-based authorization (Student / Recruiter)
Protected frontend routes
Middleware-based backend security

## 🎯 Future Enhancements
Job recommendations based on user skills
Saved jobs functionality
Email notifications for applications
Admin analytics dashboard
Dark / Light mode toggle

## 🧠 Learning Outcomes
End-to-end MERN stack development
Secure JWT authentication & authorization
Role-based access control
REST API design and scalability
Resume upload handling
Clean UI/UX with Tailwind CSS

## 🤝 Author
Omkar Thombare
MERN Stack Developer

⭐ If you like this project, don’t forget to star the repository!
