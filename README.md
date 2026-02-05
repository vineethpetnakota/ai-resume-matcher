# AI Resume Matcher & ATS Optimizer

🔗 **Live Demo:** https://ai-resume-matcher-lovat.vercel.app

A full-stack web application that analyzes resumes against a job description to estimate ATS compatibility. It uses Google Gemini 1.5 Flash to identify keyword gaps, matching skills, and generate a relevance score to help job seekers choose the best resume for a specific role.

---

## Problem Statement

Applicant Tracking Systems (ATS) filter resumes before they ever reach recruiters. Many qualified candidates are rejected due to missing keywords or poor alignment with job descriptions.

This project helps address that problem by:
- Comparing multiple resumes against a single job description
- Highlighting missing ATS keywords
- Ranking resumes based on match score and skill relevance

---

## How It Works

1. Paste a Job Description into the input field  
2. Upload one or more resumes (`.pdf` or `.docx`)  
3. Resume text is extracted locally in the browser  
4. Extracted text and the job description are sent to a serverless API  
5. The AI returns:
   - Match percentage  
   - Matching skills  
   - Missing or weak keywords  
   - Resume improvement suggestions  

---

## Key Features

- Multi-resume comparison for a single job description  
- ATS-focused keyword extraction (skills, tools, frameworks, certifications)  
- Client-side document parsing for privacy  
- Serverless backend (no traditional server required)  
- Lightweight React UI without a build step  

---

## Tech Stack

### Frontend
- React 18 (CDN-based)
- Babel Standalone
- PDF.js
- Mammoth.js

### Backend
- Node.js
- Vercel Serverless Functions
- Google Gemini 1.5 Flash (`@google/generative-ai`)

---

## Architecture Overview

```text
Browser
 ├── Resume Parsing (PDF.js / Mammoth.js)
 ├── React UI
 └── API Request
        ↓
Vercel Serverless Function
 ├── Gemini AI Analysis
 └── JSON Response

---
## Project Structure

├── api/
│   └── analyze.js        # Serverless backend (AI logic)
├── index.html            # Frontend UI and React logic
├── package.json          # Backend dependencies
├── .gitignore            # Prevents secrets from leaking
└── README.md             # Project documentation


## Local Setup
Prerequisites
Node.js 18+
Vercel CLI


Create a .env file:
GEMINI_API_KEY=YOUR_API_KEY_HERE
Run locally:
vercel dev
Deployment

This project is deployed using Vercel.
Import the repo into Vercel
Add GEMINI_API_KEY under Environment Variables
Deploy
