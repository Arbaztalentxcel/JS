// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded path to your PDF resume file for testing
const filePath = 'C:/Users/sav4/Downloads/Career_path-main/Career_path-main/Basu-Sahu.pdf';

// Route to get recommended skills based on the hardcoded resume file path
app.get('/recommend-skills', async (req, res) => {
    try {
        const resumeText = await extractTextFromResume(filePath); // Use hardcoded file path
        const skillsRecommendation = await getSkillsRecommendation(resumeText);
        return res.json(skillsRecommendation);
    } catch (error) {
        console.error('Error processing resume:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Function to extract text from a PDF or text file
async function extractTextFromResume(filePath) {
    const fileExtension = path.extname(filePath).toLowerCase();

    if (fileExtension === '.pdf') {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        return data.text; // Return the extracted text
    } else if (fileExtension === '.txt') {
        return fs.readFileSync(filePath, 'utf-8'); // Read text file
    } else {
        throw new Error('Unsupported file format. Please upload a PDF or TXT file.');
    }
}

// Function to call OpenAI API for skills recommendation
async function getSkillsRecommendation(resumeText) {
    const prompt = `Based on the following resume text, recommend trending skills to learn: ${resumeText}`;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            }
            
        });

        const skills = response.data.choices[0].message.content;
        return { recommendedSkills: skills };
    } catch (error) {
        console.error('Error getting skills recommendation:', error);
        throw new Error('Could not fetch skills recommendation');
    }
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
