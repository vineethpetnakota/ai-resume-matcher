const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const { resumes, jobDescription } = JSON.parse(event.body);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as a high-precision ATS (Applicant Tracking System). 
Analyze the provided resumes against the Job Description specifically for technology match counts.

JD: ${jobDescription}

Resumes:
${resumes.map((r, i) => `[ID ${i}] ${r.name}: ${r.content}`).join('\n\n')}

Return a JSON object exactly like this:
{
  "best_match": { "resume_name": "string", "score": number },
  "detailed_analysis": [
    {
      "resume_name": "string",
      "score": number,
      "matching_technologies": ["list", "of", "found", "keywords"],
      "missing_keywords": ["list", "of", "missing", "jd", "keywords"],
      "recommendation": "One specific sentence on how to fix this resume for ATS"
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, '').trim();
    
    return { statusCode: 200, headers, body: text };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
