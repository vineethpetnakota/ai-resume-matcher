const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { resumes, jobDescription } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing in Vercel settings.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as an ATS Scanner. Return ONLY a JSON object. No markdown. No preamble.
    {
      "detailed_analysis": [
        {
          "resume_name": "string",
          "score": 0,
          "matching_technologies": [],
          "missing_keywords": [],
          "recommendation": "string"
        }
      ]
    }
    JD: ${jobDescription}
    Resumes: ${JSON.stringify(resumes)}`;

    const result = await model.generateContent(prompt);
    let text = result.response.text();
    
    // CLEANING: This removes any extra text Gemini adds like "Here is your JSON:"
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("AI did not return valid JSON");
    
    const cleanData = JSON.parse(jsonMatch[0]);
    res.status(200).json(cleanData);

  } catch (error) {
    console.error("Vercel Function Error:", error);
    res.status(500).json({ error: error.message });
  }
};
