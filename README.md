💼 CareerBridge – Full-Stack Job Portal (MERN Stack)

CareerBridge is a full-stack job portal web application built using the MERN stack that connects job seekers and recruiters on a single platform.  
It enables users to search and apply for jobs, manage profiles, and allows recruiters to post jobs, manage companies, and shortlist applicants.

This project focuses on real-world MERN architecture, secure authentication, role-based access control, and scalable REST APIs with a clean, responsive UI.

✨ Features

👤 Job Seeker Features

- User authentication and authorization (JWT-based)
- Browse and search jobs with advanced filtering
- Apply to jobs and track application status
- Manage user profile, skills, and resume uploads
- View applied jobs history

🏢 Recruiter Features

- Recruiter authentication with role-based access
- Create and manage companies
- Post, update, and delete job listings
- View applicants for each job
- Shortlist and manage application statuses

🛠 Admin / Platform Capabilities

- Role-based protected routes (Student / Recruiter)
- Secure REST APIs
- Scalable backend architecture
- Clean separation of frontend and backend

🧑‍💻 Tech Stack

Frontend

- React (Vite)
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Framer Motion

Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Uploads)
- Cloudinary (Resume Uploads)

⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

Example `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key



CLOUDINARY_API_SECRET=your_cloudinary_api_secret

