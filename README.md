# 🚀 Gemini Resume Matcher - Setup Guide

## Why Gemini?

✅ **Completely FREE** - No credit card required  
✅ **Generous limits** - 60 requests/minute  
✅ **No trial period** - Free tier is permanent  
✅ **Fast & accurate** - Perfect for resume analysis  
✅ **2-minute setup** - Easiest of all APIs  

---

## Step 1: Get Your Free Gemini API Key (2 minutes)

1. Go to: **https://aistudio.google.com**
2. Click "Get API key" (top right)
3. Click "Create API key"
4. Select a Google Cloud project (or create new one)
5. Copy your API key
6. Save it somewhere safe

**That's it!** No credit card, no phone verification, no trial period.

---

## Step 2: Deploy to Netlify

### Option A: Via GitHub (Recommended)

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

Your app should now be live at: `https://your-site-name.netlify.app`

### Test checklist:
- [ ] Upload a PDF resume
- [ ] Upload a DOCX resume
- [ ] Paste a job description
- [ ] Click "Analyze & Match"
- [ ] See results within 5-10 seconds
- [ ] Check match scores and keywords

---

## 🎉 You're Done!

**Cost:** $0 (completely free!)  
**Time to setup:** 5 minutes  
**Monthly analyses:** Unlimited for personal use  
**Quality:** Excellent for resume matching  

---

## 💡 Tips & Tricks

### Customize your site name
1. In Netlify: "Site configuration" → "Change site name"
2. Pick: `your-name-resume-matcher.netlify.app`

### Monitor usage
Check your Gemini API usage at: https://aistudio.google.com/apikey

### If you hit rate limits
Free tier allows 60 requests/minute. If you need more:
- Wait a minute and try again
- Or create multiple API keys and rotate them
- Or upgrade to paid tier (very cheap: $0.35 per million tokens)

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

---

## 📊 Gemini vs Claude Comparison

| Feature | Gemini | Claude |
|---------|--------|--------|
| Free tier | Permanent | 14 days |
| Requests/min | 60 | ~50 |
| Credit card | ❌ Not needed | ❌ Not needed |
| Phone verification | ❌ Not needed | ✅ Required |
| Setup time | 2 minutes | 5 minutes |
| Quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Best for | Long-term free use | Trial/testing |

---

## 🔄 Switching from Claude to Gemini

Already have the Claude version running? Here's how to switch:

1. Get Gemini API key (2 minutes)
2. Replace your repo with this `gemini-resume-matcher` folder
3. Push to GitHub
4. In Netlify:
   - Remove `CLAUDE_API_KEY` variable (optional)
   - Add `GEMINI_API_KEY` variable
5. Redeploy
6. Done!

Everything else stays the same - same UI, same features, just a different (free!) backend.

---

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

**Q: Is Gemini as good as Claude?**  
A: For resume matching, yes! Both are excellent. Gemini is faster and has better free tier.

**Q: Can I use both Gemini and Claude?**  
A: Yes! Create both functions and switch between them.

**Q: What if I need more than free tier?**  
A: Paid tier is very cheap: $0.35 per million tokens (way cheaper than Claude).

**Q: Can I use this commercially?**  
A: Yes, but consider upgrading to paid tier for higher volume.

---

## 🆘 Need Help?

- Gemini API Docs: https://ai.google.dev/docs
- Netlify Docs: https://docs.netlify.com
- Can't get it working? Let me know the error and I'll help!

---

**Congrats on getting your app working with a completely free API! 🎉**
