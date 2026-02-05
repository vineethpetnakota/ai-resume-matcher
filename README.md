### `README.md`

```markdown
# 🎯 AI Resume Matcher & ATS Optimizer
**Live Demo:** [https://ai-resume-matcher-lovat.vercel.app](https://ai-resume-matcher-lovat.vercel.app)

An intelligent, full-stack application designed to help job seekers bypass "The Black Hole" of Applicant Tracking Systems (ATS). This tool analyzes multiple resumes against a job description using Google's **Gemini 1.5 Flash AI** to provide instant feedback on keyword gaps and matching scores.

---

## 🚀 How It Works
1. **Input:** Paste any Job Description (JD) into the text area.
2. **Upload:** Drop one or multiple resumes (.pdf or .docx).
3. **Analyze:** The frontend extracts text from your documents and sends it to a Vercel Serverless Function.
4. **Result:** The AI identifies matching skills, critical missing keywords, and gives a percentage match score with specific advice on how to improve the resume.

---

## ✨ Key Features
- **Zero-Dependency UI:** Built with a "safe" React implementation to ensure 100% uptime and fast loading.
- **Privacy First:** Document parsing happens locally in your browser (using PDF.js and Mammoth.js).
- **Multi-Resume Support:** Compare different versions of your resume to see which one performs better for a specific role.
- **ATS Keyword Extraction:** Specifically looks for hard skills, frameworks, and certifications.
- **Serverless Architecture:** Powered by Vercel Functions for scalable, cost-effective backend execution.

---

## 🛠️ Technical Architecture

### Frontend
- **Framework:** React 18 (CDN hosted for performance)
- **Document Parsing:** - `PDF.js` for high-accuracy PDF text extraction.
  - `Mammoth.js` for Word document (.docx) processing.
- **Transpiler:** Babel Standalone.

### Backend (Vercel Functions)
- **Runtime:** Node.js
- **AI Integration:** `@google/generative-ai` (Gemini 1.5 Flash).
- **Endpoint:** `/api/analyze` - A secure serverless endpoint that keeps API keys hidden from the client.

---

## 📂 Project Structure
```text
├── api/
│   └── analyze.js       # Backend AI logic (Vercel Serverless Function)
├── index.html           # Main Application UI & Frontend Logic
├── package.json         # Backend dependencies & Node settings
├── .gitignore           # Security: Prevents leaking API keys/node_modules
└── README.md            # You are here!

```

---

## 🛠️ Setup & Deployment

### Local Development

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file and add: `GEMINI_API_KEY=your_key_here`.
4. Use Vercel CLI to run locally: `vercel dev`.

### Deployment

This project is optimized for **Vercel**:

1. Push code to GitHub.
2. Connect GitHub repo to Vercel.
3. Add `GEMINI_API_KEY` to **Project Settings > Environment Variables**.
4. The app will automatically deploy on every push.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Your Name**

* **Website:** [https://ai-resume-matcher-lovat.vercel.app](https://ai-resume-matcher-lovat.vercel.app)
* **GitHub:** [@yourusername](https://github.com/yourusername)

