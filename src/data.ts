import { Project, Experience, Education, Skill } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    id: "aws-web",
    role: "AWS Web Team Member",
    company: "AWS Cloud Club PICT",
    duration: "July 2024 - Present",
    description: [
      "Core member of the web team designing, building, and maintaining responsive cloud-scalable web platforms.",
      "Successfully coordinated hackathons and workshops focused on boosting cloud literacy and API integration for 500+ student attendees.",
      "Assisted in deploying internal student projects on AWS serverless infrastructures (S3, Lambda, API Gateway)."
    ],
    skillsGained: ["AWS Services", "Web Infrastructure", "Community Leadership", "React.js", "Serverless Architecture"],
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "vault-of-code",
    role: "Virtual Web Developer Intern",
    company: "VaultOfCode",
    duration: "1 Month Internship",
    description: [
      "Designed and optimized web-centric applications, building responsive and high-fidelity features for user management workflows.",
      "Constructed solid interface structures and streamlined UI elements to enhance application layouts and cross-device display responsiveness."
    ],
    skillsGained: ["HTML & CSS", "JavaScript", "Responsive Web Design", "Remote Collaboration"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "boraste-data",
    role: "Data Science Intern",
    company: "Boraste Technologies",
    duration: "Jan 2026 - Mar 2026",
    description: [
      "Learned and implemented core Machine Learning theory, specializing in model training architectures.",
      "Engineered a production-level AI pipeline for Industrial Defect Detection with visual classification.",
      "Optimized production cost prediction algorithms by 18% running automated feature preprocessing steps across raw historical supply records."
    ],
    skillsGained: ["Python", "TensorFlow", "Computer Vision", "Scikit-Learn", "Model Training", "Data Preprocessing"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "compilers-java",
    role: "Advanced Java Intern",
    company: "Compilers Technology",
    duration: "June 2023 - July 2023",
    description: [
      "Analyzed client specification requirements and engineered corresponding OOP-based technical solutions.",
      "Architected a scalable Institute Management System leveraging Advanced Java components and transactional security.",
      "Developed robust DB connectors with prepared statement queries to prevent SQL injections."
    ],
    skillsGained: ["Advanced Java", "SQL", "Database Connectors (JDBC)", "OOP Architecture", "Client Collaboration"],
    color: "from-emerald-500 to-teal-500"
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "pict",
    institution: "Pune Institute of Computer Technology (PICT), Pune",
    degree: "B.E. in Information Technology",
    duration: "July 2024 - June 2027",
    score: "CGPA: 9.80 / 10.00",
    details: [
      "Ranked among the top tiers of the IT department.",
      "Active participant in PICT tech events, coding contests and AWS Cloud Club web deployment sprint runs."
    ]
  },
  {
    id: "poly",
    institution: "Government Polytechnic, Amravati",
    degree: "Diploma in Computer Engineering",
    duration: "June 2021 - April 2024",
    score: "Percentage: 95.00 / 100",
    details: [
      "Excellent foundational knowledge in C, OS concepts, Networking protocols, and basic DBMS structures.",
      "Coordinated campus tech forums and created simple portal websites."
    ]
  },
  {
    id: "highschool",
    institution: "Seth Bansidhar Highschool Telhara",
    degree: "Secondary School Certificate (SSC)",
    duration: "June 2020 - May 2021",
    score: "Percentage: 98.80 / 100",
    details: [
      "Outstanding academic performance earning state-level merit honors.",
      "Strong command over Mathematics and Science foundation."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, category: "Languages", color: "#3776AB" },
  { name: "C++", level: 90, category: "Languages", color: "#00599C" },
  { name: "Java", level: 88, category: "Languages", color: "#007396" },
  { name: "C", level: 85, category: "Languages", color: "#A8B9CC" },
  { name: "PHP", level: 80, category: "Languages", color: "#777BB4" },

  { name: "React.js", level: 93, category: "Web Technologies", color: "#61DAFB" },
  { name: "Node.js", level: 90, category: "Web Technologies", color: "#339933" },
  { name: "Express.js", level: 88, category: "Web Technologies", color: "#000000" },
  { name: "HTML & CSS", level: 95, category: "Web Technologies", color: "#E34F26" },
  { name: "JavaScript", level: 92, category: "Web Technologies", color: "#F7DF1E" },

  { name: "Scikit-Learn", level: 90, category: "AI/ML & Data Science", color: "#F7931E" },
  { name: "TensorFlow", level: 87, category: "AI/ML & Data Science", color: "#FF6F00" },
  { name: "BERT & NLTK", level: 85, category: "AI/ML & Data Science", color: "#00F2FF" },
  { name: "Computer Vision", level: 86, category: "AI/ML & Data Science", color: "#4B0082" },
  { name: "Sentiment Analysis", level: 91, category: "AI/ML & Data Science", color: "#E10098" },

  { name: "MySQL", level: 90, category: "Databases & Tools", color: "#4479A1" },
  { name: "Oracle DB", level: 80, category: "Databases & Tools", color: "#F80000" },
  { name: "Git & GitHub", level: 92, category: "Databases & Tools", color: "#181717" },
  { name: "Postman", level: 88, category: "Databases & Tools", color: "#FF6C37" },
];

export const PROJECTS: Project[] = [
  {
    id: "course-attainment",
    title: "Course Attainment System",
    category: "Web",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git"],
    description: "An automated web-based solution for educational institutes to trace, measure, and analyze student performances dynamically in consistency with predefined Course Outcomes (COs).",
    detailedWalkthrough: "Designed custom scoring configurations, interactive admin trackers, and visual breakdown curves that let faculty extract automatic metrics to evaluate how classes align with academic curriculum targets.",
    githubUrl: "https://github.com/jagrutikaulkar/course-attainment-system",
    impactMetric: "Saves 40+ hours per semester of manual calculations for each university department."
  },
  {
    id: "sentiment-analysis",
    title: "Review Sentiment Analyzer",
    category: "AI/ML",
    technologies: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "BERT"],
    description: "A machine learning and Deep Learning model that interprets college-specific remarks, evaluating text comments to dynamically categorize feedback into Positive, Negative, or Neutral sentiments.",
    detailedWalkthrough: "Utilized BERT transformers and NLTK pipeline structures to achieve high parsing accuracies. Features an elegant interactive validation screen where recruiters can drop statements and extract AI-processed outcomes.",
    githubUrl: "https://github.com/jagrutikaulkar/review-sentiment-analyzer",
    impactMetric: "Achieved 94.2% validation accuracy on unstructured college feedback datasets."
  },
  {
    id: "vehicle-breakdown",
    title: "Vehicle Breakdown Assist",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description: "An interactive, smart dispatching system designed to link motorists experiencing road emergencies with nearby towing, fuel major suppliers, or mechanical services.",
    detailedWalkthrough: "Engineered high-fidelity client forms and immediate service-provider assignment mechanics. Supports dynamic pricing logic based on relative assistance request distance.",
    githubUrl: "https://github.com/jagrutikaulkar/vehicle-breakdown-assistance",
    impactMetric: "Reduced rescue dispatch wait timings by avg 25 minutes using instant coordinates matching."
  },
  {
    id: "defect-detection",
    title: "Industrial Defect & Cost AI",
    category: "AI/ML",
    technologies: ["Python", "Computer Vision", "TensorFlow", "Scikit-learn"],
    description: "Automated computer vision software deployed to detect cosmetic or functional anomalies in production-line objects while mapping raw feed variations to pricing variables.",
    detailedWalkthrough: "Constructed binary fault categorization algorithms and mapped resource cost indices to project dynamic industrial pricing variations. Enabled plants to monitor throughput defects on high-speed convey belts.",
    githubUrl: "https://github.com/jagrutikaulkar/industrial-defect-ai",
    impactMetric: "Identified manufacturing anomalies instantly with a low false alarm rating under 2.5%."
  }
];

export interface ResearchPaper {
  title: string;
  conference: string;
  venue: string;
  date: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  rank: string;
  locationDetails: string[];
  description: string;
  teammates: string[];
}

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: "Automation of Attainment Calculation in Outcome-Based Technical Education: System Design and Implementation",
    conference: "International Conference on Cutting Edge Technologies in Advanced Computing (ICCETAC 2025)",
    venue: "Government College of Engineering, Karad",
    date: "14th November 2025",
    role: "Co-Author",
    description: "Developed and presented an automated, scalable solution that simplifies the complex Course Attainment process in Outcome-Based Education, ensuring transparent, data-driven academic review procedures for IT curriculum workflows.",
    highlights: [
      "Automated course attainment computation",
      "Role-based access for faculty, coordinators, and administrators",
      "Streamlined evaluation flow with state-level compliant models",
      "Simple, modern UI/UX design matching university targets",
      "Enhanced decision-making indices driven by performance charts"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "National Level NLPC-25 Project Competition",
    subtitle: "Presented 'Course Attainment System' project",
    rank: "3rd Rank Nationally (out of 840+ Teams)",
    locationDetails: [
      "Secured 1st Rank at the regional round held at Sinhgad College of Engineering, Pune",
      "Advanced to the Grand Finale at COEP Technological University, competing head-to-head with elite and final-year engineering teams",
      "Ranked Top 3 nationwide for exceptional software orchestration, database integration, and technical innovation"
    ],
    description: "A prestigious national engineering recognition demonstrating our solution’s viability, structural execution, and positive educational impact under meticulous evaluator examination.",
    teammates: ["Dipali Deore", "Pranav Mahale"]
  }
];

export const LEETCODE_PROFILE = {
  url: "https://leetcode.com/u/jagrutikaulkar0/",
  solvedCount: "350+",
  badges: ["Active Solved Track", "Consistent Daily Streaks", "Top Algorithm Contest Participant"],
  focusAreas: ["Arrays", "Two Pointers", "Dynamic Programming", "Trees & Graphs"]
};

