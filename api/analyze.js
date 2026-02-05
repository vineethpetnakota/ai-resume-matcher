const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { resumes, jobDescription } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as an ATS Scanner. Compare these resumes against the JD.
    Return ONLY a JSON object:
    {
      "detailed_analysis": [
        {
          "resume_name": "string",
          "score": number,
          "matching_technologies": [],
          "missing_keywords": [],
          "recommendation": "string"
        }
      ]
    }
    JD: ${jobDescription}
    Resumes: ${JSON.stringify(resumes)}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, '').trim();
    
    // Return the data
    res.status(200).json(JSON.parse(text));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
