
const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

async function getRecommendations(text) {
  const apiKey = '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'; 
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const prompt = `
  Based on the following information, provide career path recommendations, a skill gap analysis, and an evaluation of current strengths and expertise over a 5-year duration and explain careerPathRecommendations for 50 words for each years, formatted in JSON:

  ${text}

  Please provide the response in this JSON structure:
  {
    "currentStrengthsAndExpertise": [
      {
        "title": "<Strength or Expertise Title>",
        "description": "<Description of the user’s current strengths and expertise>"
      }
    ],
    "careerPathRecommendations": [
      {
        "year": 1,
        "title": "<Year 1 Career Path Title>",
        "description": "<Detailed description of the recommended career path for year 1, with specific goals and focus>"
      },
      {
        "year": 2,
        "title": "<Year 2 Career Path Title>",
        "description": "<Detailed description of the recommended career path for year 2, including goals and areas for growth>"
      },
      {
        "year": 3,
        "title": "<Year 3 Career Path Title>",
        "description": "<Detailed description of the recommended career path for year 3, including long-term planning and skill consolidation>"
      },
      {
        "year": 4,
        "title": "<Year 4 Career Path Title>",
        "description": "<Detailed description of the recommended career path for year 4, with a focus on preparing for senior roles and new responsibilities>"
      },
      {
        "year": 5,
        "title": "<Year 5 Career Path Title>",
        "description": "<Detailed description of the recommended career path for year 5, focusing on achieving the long-term goal and planning next steps>"
      }
    ],
    "skillGapAnalysis": [
      {
        "skill": "<Skill Name>",
        "description": "<Why this skill is important for the user's career path>",
        "resources": ["<Resource 1>", "<Resource 2>"],
        "recommendedProjects": ["<Project 1>", "<Project 2>"]
      }
    ],
    "trainingAndSkillDevelopment": [
      {
        "skill": "<Skill Name>",
        "description": "<Why this skill is important>",
        "resources": ["<Resource 1>", "<Resource 2>"],
        "recommendedProjects": ["<Project 1>", "<Project 2>"]
      }
    ]
  }`;


  const response = await axios.post(apiUrl, {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data.choices[0].message.content;
}

app.post('/upload', upload.single('pdfFile'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  try {
    const pdfBuffer = req.file.buffer;
    const pdfData = await pdf(pdfBuffer);

    const recommendations = await getRecommendations(pdfData.text);
    res.json(JSON.parse(recommendations));
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing PDF.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
