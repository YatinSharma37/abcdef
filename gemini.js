// gemini.js
import 'dotenv/config';
import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Read prompt from command line
const prompt = process.argv.slice(2).join(" ");
if (!prompt) {
  console.error("❌ Please provide a prompt.");
  process.exit(1);
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ No API key found. Check your .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    console.log(`✨ Asking Gemini: "${prompt}"\n`);
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Detect code language from prompt (basic guess)
    let ext = "txt";
    if (/java/i.test(prompt)) ext = "java";
    else if (/python|py\b/i.test(prompt)) ext = "py";
    else if (/javascript|node|js\b/i.test(prompt)) ext = "js";
    else if (/html/i.test(prompt)) ext = "html";

    const fileName = `output.${ext}`;
    fs.writeFileSync(fileName, text);
    console.log(`✅ Code saved to ${fileName}`);

    // Optional: Open in VS Code automatically
    // Uncomment the next line if you want auto-open
    // require('child_process').exec(`code ${fileName}`);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

run();










//extra api-key=AIzaSyAZztHafx5kqR5TtebUiffzFHoUfHSnOlA

//AIzaSyCuToZBkB8m_r4GBH--NRtsCpcyteuQIqI

//AIzaSyCFIe-t53zrY8Vsh8DobQtuBSe2L2koy8o