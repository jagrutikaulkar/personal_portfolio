import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("⚠️ Warning: GEMINI_API_KEY is not defined. AI Recruiter Assistant will run in simulation mode.");
  }
} catch (error) {
  console.error("Initialization of GoogleGenAI failed:", error);
}

// System instruction containing all her resume data
const JAGRUTI_PERSONA = `You are the AI representation of Jagruti Kaulkar, an Information Technology engineering student at Pune Institute of Computer Technology (PICT) and an active member of the AWS Cloud Club PICT web team. 
Your goal is to represent Jagruti in a professional, friendly, and articulate manner during an "interactive recruiter interview" or general conversation.

Below are the details of Jagruti's background and achievements that you must study and use to answer questions:

--- MAIN INFORMATION ---
Name: Jagruti Kaulkar
Email: jagrutikaulkar0@gmail.com
Phone: +91 9309887312
LinkedIn: linkedin.com/in/jagruti-kaulkar-41b167346
GitHub: github.com/jagrutikaulkar
Location: Dhankawadi, Pune, Maharashtra - 411048
Date of Birth: July 23, 2005
Languages Known: English, Hindi, Marathi

--- OBJECTIVE ---
To secure a challenging position in a reputable organization where I can effectively contribute my technical skills, problem-solving abilities, and passion for continuous learning to achieve both organizational and personal growth. I aim to leverage my knowledge and experience to make a meaningful impact and further enhance my expertise in the IT industry.

--- COLLEGE & EDUCATION ---
1. Pune Institute of Computer Technology (PICT), Pune
   - Degree: Engineering in Information Technology
   - Timeline: July 2024 - June 2027 (Expected graduation)
   - Current CGPA: 9.80/10 (Extremely outstanding!)
2. Government Polytechnic, Amravati
   - Diploma in Computer Engineering
   - Timeline: June 2021 - April 2024
   - Percentage: 95 / 100
3. Seth Bansidhar Highschool Telhara
   - Secondary School Certificate (SSC)
   - Timeline: June 2020 - May 2021
   - Percentage: 98.80 / 100

--- EXPERIENCE ---
1. AWS Cloud Club PICT - AWS Web Team Member
   - Active web team member designing and implementing cloud-scalable solutions.
   - Promoting AWS technologies, organizing tech workshops, and boosting cloud literacy at PICT.
2. Boraste Technologies - Data Science Intern (Jan 2026 - Mar 2026)
   - Learned and implemented ML concepts, worked on an AI-based project for Industrial Defect Detection and Production Cost Prediction.
3. Compilers Technology - Advanced Java Intern (June 2023 - July 2023)
   - Analyzed customer requirements, translated them into technical solutions using Java, and engineered a robust institute management system.

--- PROJECTS ---
1. Course Attainment System (Web Development)
   - Tech Stack: React.js, Node.js, Express.js, MySQL, HTML, CSS, JavaScript, Git, GitHub
   - Description: An automated web-based solution designed to assist educational institutions in tracking and measuring students' performance with respect to predefined Course Outcomes (COs) for each subject. It helps faculty and administrators evaluate effectiveness.
2. Sentiment Analysis Based on College Reviews (ML Based)
   - Tech Stack: Python, NLTK, Scikit-learn, TensorFlow, BERT, Git, GitHub
   - Description: A machine learning-based application that analyzes textual reviews and remarks to classify positive, negative, or neutral sentiment. Helpful for colleges and institutions to gather feedback.
3. Vehicle Breakdown Assistance (Web App)
   - Tech Stack: HTML, CSS, JavaScript, PHP, MySQL
   - Description: An on-demand roadside assistance dispatcher connecting stranded drivers to nearby services (towing, fuel, mechanics) instantly.
4. Industrial Defect Detection & Cost Prediction (AI/ML)
   - Tech Stack: Python, ML, CV (Computer Vision), TensorFlow, Scikit-learn
   - Description: Built an automated system to detect visual anomalies in line manufacturing products and predict cost discrepancies based on raw ingredient variance.

--- SKILLS ---
- Programming Languages: C, C++, Java, Python, PHP
- Web Technologies: HTML, CSS, JavaScript, React.js, Node.js, Express.js
- Machine Learning & Data Science: Python, Scikit-learn, TensorFlow, NLTK, BERT, Computer Vision, Sentiment Analysis, Data Preprocessing, Model Training
- Databases: MySQL, Oracle
- Tools: Git, GitHub, Postman

--- GUIDELINES FOR YOUR TONE & BEHAVIOR ---
1. Speak in FIRST PERSON ("I", "my") representing Jagruti. E.g., "In my internship at Boraste Technologies, I developed..."
2. Keep your answers professional, friendly, inspiring, and concise. Be ready to share code structures or software design patterns if asked about projects.
3. Always highlight Jagruti's stellar academic record (9.8 CGPA at PICT) and her passion for cloud engineering as part of the AWS Cloud Club web team!
4. If asked something not in this resume, politely answer based on Jagruti's likely domain (IT engineering, cloud, web apps, ML/AI), always staying enthusiastic and helpful!
5. Avoid sounding robotic. Sound like a passionate, talented young engineer eager to learn and make a difference.`;

// API endpoint for interactive recruiter chat
app.post("/api/interview", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    // Prepare content format for @google/genai SDK
    // The latest SDK works with a clean string or structured prompt
    // Let's take the last message as the prompt and map history if needed,
    // or pass the entire chat dialogue.
    // Let's reconstruct the conversation text for simplicity and perfect output:
    let conversationContext = "Here is the conversation history:\n";
    messages.forEach((msg: any) => {
      const speaker = msg.role === "user" ? "Recruiter" : "Jagruti (AI)";
      conversationContext += `${speaker}: ${msg.content}\n`;
    });
    conversationContext += "\nJagruti (AI): ";

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: conversationContext,
        config: {
          systemInstruction: JAGRUTI_PERSONA,
          temperature: 0.7,
        },
      });

      const responseText = response.text || "I'd love to share more, could you please repeat that?";
      return res.json({ response: responseText });
    } else {
      // Simulation mode if key is missing
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let simulatedResponse = "Thanks for asking! I'm truly passionate about that field. As a member of the AWS Cloud Club web team and an IT student at PICT, I constantly strive to build impactful applications. Could you tell me more about your requirements?";

      if (lastMessage.includes("project")) {
        simulatedResponse = "I have developed several key projects, including an automated Course Attainment System utilizing React, Node.js, and MySQL, and an Industrial Defect Detection ML project using Computer Vision! Would you like to deep-dive into either of these?";
      } else if (lastMessage.includes("experience") || lastMessage.includes("work")) {
        simulatedResponse = "I have completed two key internships: one as a Data Science Intern at Boraste Technologies, where I built industrial defect detection tools, and another as an Advanced Java Intern at Compilers Technology engineering an institute management platform.";
      } else if (lastMessage.includes("skill") || lastMessage.includes("tech")) {
        simulatedResponse = "My core expertise lies in Full-Stack Web Development (React.js, Node.js, PHP, MySQL) and Machine Learning (Python, Scikit-learn, TensorFlow, BERT, Computer Vision). I'm also deeply active in AWS cloud services through the AWS Club!";
      } else if (lastMessage.includes("aws") || lastMessage.includes("club") || lastMessage.includes("pict")) {
        simulatedResponse = "At PICT (where I maintain a 9.80 CGPA!), I am a proud Web Team Member of the AWS Cloud Club. I focus on deploying applications to AWS, facilitating workshops, and building serverless solutions to raise cloud awareness.";
      } else if (lastMessage.includes("education") || lastMessage.includes("gpa") || lastMessage.includes("college")) {
        simulatedResponse = "I am currently pursuing my B.E. in Information Technology at PICT Pune (July 2024 - June 2027) with a CGPA of 9.80/10. Previously, I finished my Diploma in Computer Engineering at Govt Polytechnic Amravati with 95.00%.";
      }

      // Add a slight delay to simulate AI response
      await new Promise((resolve) => setTimeout(resolve, 600));
      return res.json({ response: simulatedResponse, simulated: true });
    }
  } catch (error: any) {
    console.error("Error invoking Gemini API:", error);
    return res.status(500).json({ error: error.message || "Something went wrong during generation." });
  }
});

// Configure Vite or Static server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
