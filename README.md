# 🚀 Gemini Resume Matcher - Setup Guide

---

## Step 1: Get Your Free Gemini API Key 

1. Go to: **https://aistudio.google.com**
2. Click "Get API key" (top right)
3. Click "Create API key"
4. Select a Google Cloud project (or create new one)
5. Copy your API key
6. Save it somewhere safe

---

## Step 2: Deploy to Netlify

### Option A: Via GitHub 

1. **Push this folder to GitHub:**
   ```bash
   cd gemini-resume-matcher
   git init
   git add .
   git commit -m "Initial commit - Gemini Resume Matcher"
   git remote add origin https://github.com/YOUR-USERNAME/resume-matcher.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Click "Deploy site"

3. **Add your API key:**
   - In Netlify dashboard: "Site configuration" → "Environment variables"
   - Click "Add a variable"
   - Key: `GEMINI_API_KEY`
   - Value: Paste your API key
   - Click "Create variable"

4. **Redeploy:**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"
   - Wait 1-2 minutes

5. **Test your app:**
   - Click on your site URL
   - Upload a resume
   - Paste a job description
   - Click "Analyze & Match Resumes"
   - ✅ It works!

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to folder
cd gemini-resume-matcher

# Login
netlify login

# Deploy
netlify deploy --prod

# Add environment variable (or use dashboard)
netlify env:set GEMINI_API_KEY "your-api-key-here"
```

---

## Step 3: Test Your App

 App should now be live at: `https://your-site-name.netlify.app`

### Test checklist:
- [ ] Upload a PDF resume
- [ ] Upload a DOCX resume
- [ ] Paste a job description
- [ ] Click "Analyze & Match"
- [ ] See results within 5-10 seconds
- [ ] Check match scores and keywords

---


## 💡 Points to be noted

### Customize your site name
1. In Netlify: "Site configuration" → "Change site name"
2. Pick: `your-name-resume-matcher.netlify.app`

### Monitor usage
Check your Gemini API usage at: https://aistudio.google.com/apikey
---

## 🐛 Troubleshooting

### "Function returned undefined"
→ Make sure you added `GEMINI_API_KEY` environment variable  
→ Redeploy after adding variables

### "API key not valid"
→ Check you copied the entire key  
→ Make sure it's from AI Studio (not Cloud Console)  
→ Key should start with: `AIza...`

### "Rate limit exceeded"
→ You're making more than 60 requests/minute  
→ Wait 60 seconds and try again  
→ This shouldn't happen with normal use

### Files not uploading
→ Check browser console (F12) for errors  
→ Try smaller files first  
→ Make sure files are PDF, DOCX, TXT, or MD



## 📈 What's Next?

### Share your app
Your app is now publicly accessible! Share the link with:
- Friends job hunting
- Career counselors
- LinkedIn connections
- Your portfolio

### Monitor costs
Even though it's free, you can track usage at:
https://aistudio.google.com/apikey

### Add custom domain (optional)
1. Buy a domain (e.g., resumematcher.com)
2. In Netlify: "Domain management" → "Add custom domain"
3. Update DNS settings
4. Get free SSL automatically

---

## ❓ FAQ

**Q: Is Gemini really free forever?**  
A: Yes! The free tier is permanent, not a trial.

**Q: How many resumes can I analyze?**  
A: 60 per minute = 3,600 per hour = effectively unlimited for personal use.

**Q: What if I need more than free tier?**  
A: Paid tier is very cheap: $0.35 per million tokens (way cheaper than Claude).

**Q: Can I use this commercially?**  
A: Yes, but consider upgrading to paid tier for higher volume.

---

## 🆘 Need Help?

- Gemini API Docs: https://ai.google.dev/docs
- Netlify Docs: https://docs.netlify.com
- Can't get it working? Let me know the error and I'll help!

