import express from 'express';
import multer from 'multer';
import { extractTextFromPDF } from '../utils/pdfExtractor.js';
import { analyzeResumeQuick, generateQuestions, generateAnswer } from '../utils/geminiService.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/analyze', upload.single('file'), async (req, res) => {
  try {
    console.log('Received analyze request');
    const apiKey = req.headers['x-api-key'];
    if (!req.file) {
      console.log('No file in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log('Extracting text from PDF...', req.file.originalname);
    const resumeText = await extractTextFromPDF(req.file.buffer);
    console.log('Text extracted, length:', resumeText.length);
    
    const analysisSummary = await analyzeResumeQuick(resumeText, apiKey);
    console.log('Analysis complete');
    
    res.json({
      success: true,
      analysis: analysisSummary,
      resumeText
    });
  } catch (error) {
    console.error('Error in /analyze:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/generate', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    const apiKey = req.headers['x-api-key'];
    const questions = await generateQuestions(resumeText, jobDescription, apiKey);
    res.json({
      success: true,
      questions: questions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/answer', async (req, res) => {
  try {
    const { question, type } = req.body;
    const apiKey = req.headers['x-api-key'];
    const answer = await generateAnswer(question, type, apiKey);
    res.json({
      success: true,
      answer: answer
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
