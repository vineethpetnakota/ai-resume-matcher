const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { resumes, jobDescription } = JSON.parse(event.body);

    // Validate input
    if (!resumes || !Array.isArray(resumes) || resumes.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Resumes array is required' })
      };
    }

    if (!jobDescription || typeof jobDescription !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Job description is required' })
      };
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze these resumes against the job description and determine which resume is the best match for ATS (Applicant Tracking System) screening.

Job Description:
${jobDescription}

Resumes:
${resumes.map((r, i) => `Resume ${i + 1} (${r.name}):\n${r.content.substring(0, 3000)}\n\n`).join('')}

For each resume, provide:
1. Match score (0-100)
2. Key matching keywords and technologies found
3. Missing critical keywords from JD
4. Overall recommendation

Respond ONLY with a valid JSON object in this exact format with no preamble or markdown:
{
  "best_match": {
    "resume_index": 0,
    "resume_name": "filename.txt",
    "score": 85
  },
  "detailed_analysis": [
    {
      "resume_name": "filename.txt",
      "score": 85,
      "matching_keywords": ["keyword1", "keyword2"],
      "matching_technologies": ["tech1", "tech2"],
      "missing_keywords": ["missing1", "missing2"],
      "recommendation": "Brief explanation"
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Clean the response
    const cleanText = responseText.replace(/```json|```/g, '').trim();
    const analysis = JSON.parse(cleanText);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(analysis)
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
