# 🎯 ResumeAI | AI-Powered ATS Optimizer

**Live Demo:** [https://ai-resume-matcher-lovat.vercel.app](https://ai-resume-matcher-lovat.vercel.app)

ResumeAI is a high-performance, full-stack application designed to help job seekers bridge the gap between their experience and Applicant Tracking Systems (ATS). Using advanced **Generative AI**, the tool provides a deep-dive analysis of how well your resume matches a specific job description.

---

## 🚀 How to Use

1. **Paste** the Job Description into the analyzer.
2. **Upload** one or multiple resumes (PDF/DOCX) one-by-one.
3. **Analyze** and receive an instant breakdown of your match score, found technologies, and keyword gaps.

---

## ✨ Key Features

* **Sequential Document Processing:** Seamlessly add multiple resumes to compare different versions of your profile.
* **Intelligent Keyword Matching:** Beyond simple word-matching, the AI understands context and technical hierarchies.
* **Actionable Insights:** Get specific AI recommendations on what to add to your resume to clear ATS filters.
* **Modern SaaS Interface:** Built with a clean, responsive Glassmorphism design for a premium user experience.

---

## 🛠️ Built With

This project leverages a modern, serverless architecture for speed and scalability:

### Frontend (User Interface)

* **React 18:** For a reactive, state-driven user experience.
* **Tailwind CSS:** A utility-first CSS framework for professional styling.
* **PDF.js & Mammoth.js:** Client-side libraries used to extract text from documents without needing a backend parser, ensuring user privacy.

### Backend (AI Engine)

* **Google Gemini 2.5 Flash:** The latest high-speed LLM used for complex technical cross-referencing and JSON data generation.
* **Vercel Serverless Functions:** Node.js environment that handles secure communication with the AI engine.

### Infrastructure

* **Vercel:** Cloud hosting with automated CI/CD.
* **GitHub:** Source control and repository management.

---

## 🛡️ Privacy & Security

Document parsing happens **locally in your browser**. Only the extracted text is sent to the secure serverless function for AI analysis. No files are stored permanently on our servers.

---

## 👤 Contact

Created by **Vineeth Petnakota** **Live Site:** [https://ai-resume-matcher-lovat.vercel.app](https://ai-resume-matcher-lovat.vercel.app)

---
