# 🚀 AI Resume Analyzer

<p align="center">
  <h3 align="center">AI-powered Resume Analyzer & Interview Preparation Platform</h3>

  <p align="center">
    Analyze your resume against any Job Description using Google Gemini AI and receive an ATS Match Score, Skill Gap Analysis, Resume Suggestions, Interview Questions, and a Personalized Learning Roadmap.
  </p>
</p>

<p align="center">

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-blue?logo=google)
![License](https://img.shields.io/badge/License-MIT-success)

</p>

---

# 📖 Overview

AI Resume Analyzer helps job seekers prepare for interviews by comparing their resume with a Job Description using Google's Gemini AI.

The application generates an intelligent interview report that includes an ATS Match Score, identifies missing skills, suggests resume improvements, generates interview questions, and provides a personalized roadmap for improving job readiness.

---

# ✨ Features

- 📄 Upload Resume (PDF)
- 📝 Upload or Paste Job Description
- 👤 Add Self Description (Optional)
- 🤖 AI-powered Resume Analysis
- 📊 ATS Match Score
- 📈 Resume Improvement Suggestions
- 🛠 Skill Gap Analysis
- 💻 Technical Interview Questions
- 🗣 Behavioral Interview Questions
- 🗺 Personalized Learning Roadmap
- 📚 View Previous Reports
- 🔐 Secure Authentication
- 🚪 JWT Authentication with Token Blacklisting

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Axios

## Backend

- Node.js
- Express.js
- JWT Authentication
- Token Blacklisting

## AI

- Google Gemini API

---

# 📂 Project Structure

```text
RESUME-BUILDER
│
├── Backend
│   │
│   ├── src
│   │   ├── config
│   │   ├── controller
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
├── Frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   ├── features
│   │   │   ├── auth
│   │   │   └── interview
│   │   │
│   │   ├── style
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   ├── main.jsx
│   │   └── styles.scss
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── eslint.config.js
│   └── .gitignore
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Resume-Analyzer.git

cd AI-Resume-Analyzer
```

---

## Backend Setup

```bash
cd Backend

npm install

npm run dev
```

---

## Frontend Setup

Open another terminal.

```bash
cd Frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

# 🤖 AI Report Includes

Every generated report contains:

- ✅ ATS Match Score
- ✅ Resume Analysis
- ✅ Resume Strengths
- ✅ Resume Weaknesses
- ✅ Skill Gap Analysis
- ✅ Missing Skills
- ✅ Resume Improvement Suggestions
- ✅ Technical Interview Questions
- ✅ Behavioral Interview Questions
- ✅ Personalized Learning Roadmap

---

# 🧠 AI Workflow

```text
User Login
      │
      ▼
Upload Resume
      │
      ▼
Paste Job Description
      │
      ▼
Add Self Description
      │
      ▼
Google Gemini AI Analysis
      │
      ▼
Generate Interview Report
      │
      ▼
Save Report
      │
      ▼
View Previous Reports
```

---

# 📸 Screenshots

## Home Page

<img width="1841" height="927" alt="image" src="https://github.com/user-attachments/assets/557f9fd9-c2b4-4667-b595-e9083dad9349" />

## Generated AI Report

<img width="1840" height="927" alt="image" src="https://github.com/user-attachments/assets/d09a9f56-e6ba-424b-8b7f-402528ee2c1e" />


---

## Previous Reports Dashboard

<img width="1836" height="666" alt="image" src="https://github.com/user-attachments/assets/741f233d-aa5b-44a1-b14b-d86c9b35fb8e" />


---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It motivates future improvements and helps others discover the project.

---

# 👨‍💻 Author

**Abhishek Sindhwal**

GitHub: https://github.com/AbhishekSindhwal

LinkedIn: https://www.linkedin.com/in/abhishek-sindhwal-a243961a5/

---
