const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { resumes, jobDescription } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Act as an ATS Scanner. Return ONLY a JSON object. No Markdown. No conversation.
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
    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) throw new Error("AI failed to generate valid JSON");
    res.status(200).json(JSON.parse(jsonMatch[0]));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
