💼 CareerBridge – Full-Stack Job Portal (MERN Stack)

CareerBridge is a full-stack Job Portal Web Application built using the MERN stack, designed to connect job seekers and recruiters on a single platform.
It enables candidates to search and apply for jobs, while recruiters can manage companies, post jobs, and track applicants efficiently.

This project focuses on real-world job portal workflows, secure role-based authentication, and a scalable backend architecture with a modern, responsive UI.

✨ Features
👤 Job Seeker (Student) Features

User authentication and authorization (JWT-based)

Search and browse jobs with filters (role, location, salary, etc.)

Apply for jobs and track application status

View applied jobs history

Upload and manage resume and profile details

Responsive dashboard for better user experience

🧑‍💼 Recruiter Features

Recruiter authentication with role-based access

Create and manage companies

Post, update, and delete job listings

View applicants for each job posting

Shortlist or reject applicants

Secure recruiter-only routes

🔐 Authentication & Security

JWT-based authentication

Role-based access control (Student / Recruiter)

Protected routes using middleware

Secure cookie-based session handling

🧑‍💻 Tech Stack
Frontend

React (Vite)

Tailwind CSS

React Router DOM

Redux Toolkit

Axios

ShadCN UI

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Multer (File Uploads)

Cloudinary (Resume & Profile Uploads)

⚙️ Environment Variables

Create a .env file inside the backend folder.

Example .env file:
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


⚠️ Never commit .env files to GitHub

🚀 How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/OmkarDThombare/CareerBridge.git
cd CareerBridge

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs on:
http://localhost:8000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173

🔁 Application Flow

Job seekers can register, search jobs, and apply

Recruiters can create companies and post jobs

Applications are linked to job postings

Recruiters can view and manage applicants

Role-based UI and API access throughout the system

🎯 Future Enhancements

Job recommendations using filters & preferences

Email notifications for application status

Admin dashboard for platform management

Pagination and advanced search optimization

Dark / Light mode support

🧠 Learning Outcomes

End-to-end MERN stack development

Role-based authentication & authorization

RESTful API design and integration

Scalable backend architecture

Resume & file upload handling

Real-world job portal workflows

🤝 Author

Omkar Thombare
MERN Stack Developer
