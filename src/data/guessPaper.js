/**
 * FormsADDA NEET-UG Guess Paper - Master Data Configuration
 * Reusable product data architecture for FormsADDA Medical Exam Resources.
 */

export const productData = {
  id: "neet-ug-2027-guess-paper",

  title: "NEET-UG Biology & Chemistry High-Yield Guess Paper 2027",

  badge: "FORMSADDA NEET-UG RESOURCE",

  exam: "NEET-UG",

  session: "2027",

  subjects: [
    "Biology",
    "Chemistry"
  ],

  price: 99,

  originalPrice: 299,

  discountPercent: "67% OFF",

  format: "Digital PDF",

  pageCount: "High-Yield Exam-Oriented Pages",

  deliveryMode: "Instant Digital Access + Email Copy",

  faculty: "FormsADDA Academic & Medical Entrance Faculty Panel",

  checkoutUrl: "https://formsadda.com/guess-paper/medical/neet-ug",

  officialWebsite: "https://formsadda.com/",
  supportContact: {
    phone: "+91 7631 900 600",
    email: "admin@formsadda.com",
    hours: "Mon–Sat, 10 AM–6 PM",
    address: "5th Floor, FormsADDA, Samudra Complex, Circular Road, Ranchi, Jharkhand, 834001"
  },
  logo: "https://formsadda.com/wp-content/uploads/2026/05/logo-fa-e1778304118207.jpg",
  heroDescription: "NCERT-focused and PYQ-informed practice material designed to help NEET aspirants prioritize high-yield concepts during revision.",
  heroHighlights: [
    "Biology (Botany + Zoology) & Chemistry Included",
    "NCERT Line-by-Line & Diagram-Based Focus",
    "PYQ-Informed High-Yield Concepts",
    "Instant Searchable Digital PDF"
  ]
};

// Global centralized purchase redirection function
export const buyGuessPaper = () => {
  // Redirects directly to official FormsADDA checkout page
  if (typeof window !== "undefined") {
    window.location.href = productData.checkoutUrl;
  }
};

export const trustCards = [
  {
    id: 1,
    icon: "fa-solid fa-dna",
    title: "2 Core Subjects",
    subtitle: "Complete Biology + Chemistry high-yield sets in a single unified PDF.",
    tag: "Bio + Chem"
  },
  {
    id: 2,
    icon: "fa-solid fa-book-medical",
    title: "NCERT Oriented",
    subtitle: "Curated strictly based on NCERT core concepts and recurring NEET PYQ patterns.",
    tag: "NCERT Aligned"
  },
  {
    id: 3,
    icon: "fa-solid fa-user-doctor",
    title: "Academic Review",
    subtitle: "Prepared and verified by experienced medical entrance subject mentors.",
    tag: "Faculty Reviewed"
  },
  {
    id: 4,
    icon: "fa-solid fa-tag",
    title: "₹99 Transparent",
    subtitle: "Affordable, transparent pricing with zero hidden charges.",
    tag: "Official Price"
  }
];

export const whyGuessPaperCards = [
  {
    id: 1,
    icon: "fa-solid fa-book-open-reader",
    title: "NCERT & Syllabus Focus",
    description: "Line-by-line NCERT core mapping across Botany, Zoology, and Chemistry to ensure you prioritize the most frequent concept areas.",
    badge: "NCERT Focus"
  },
  {
    id: 2,
    icon: "fa-solid fa-dna",
    title: "High-Yield Biology",
    description: "Focused coverage of Human Physiology, Genetics, Ecology, Cell Biology, Reproduction, Biotechnology, Plant Physiology, and Human Health & Disease.",
    badge: "360-Mark Focus"
  },
  {
    id: 3,
    icon: "fa-solid fa-flask-vial",
    title: "High-Yield Chemistry",
    description: "Targeted sets across Physical Chemistry, Organic Chemistry, Inorganic Chemistry, Chemical Bonding, Coordination Chemistry, Biomolecules, Electrochemistry, and Chemical Kinetics.",
    badge: "180-Mark Focus"
  },
  {
    id: 4,
    icon: "fa-solid fa-chart-line",
    title: "PYQ-Informed Analysis",
    description: "Grounded in multi-year NEET previous year question trends, mapping repeated question formulations, statement types, and matching patterns.",
    badge: "PYQ Trends"
  },
  {
    id: 5,
    icon: "fa-solid fa-list-check",
    title: "NEET Question Types",
    description: "Practice statement-based questions, assertion-reason sets, matching columns, and NCERT diagram-based problem models.",
    badge: "Pattern Matching"
  },
  {
    id: 6,
    icon: "fa-solid fa-bolt",
    title: "Revision Prioritization",
    description: "Organizes chapters into high-return concept zones so you can optimize revision time during the critical final countdown.",
    badge: "Fast Revision"
  }
];

export const subjectCardsData = [
  {
    id: "biology",
    title: "Biology",
    tagline: "Botany & Zoology • NCERT Line-by-Line • High-Yield Units",
    accentColor: "#008190",
    bgLight: "#e6f0f1",
    icon: "fa-solid fa-dna",
    highlights: [
      "Human Physiology & Plant Physiology key mechanisms",
      "Genetics, Biotechnology & Cell Biology high-weightage topics",
      "Ecology, Reproduction & Human Health & Disease",
      "NCERT statement-based, assertion-reason & matching MCQs",
      "Chapter and concept prioritization for fast revision"
    ],
    sampleLabel: "View Biology Sample"
  },
  {
    id: "chemistry",
    title: "Chemistry",
    tagline: "Inorganic NCERT • Organic Mechanisms • Physical Formulas",
    accentColor: "#f38e3e",
    bgLight: "#fde8d3",
    icon: "fa-solid fa-flask-vial",
    highlights: [
      "Inorganic Chemistry NCERT trends & Chemical Bonding",
      "Organic Chemistry reaction pathways, conversions & Biomolecules",
      "Physical Chemistry high-yield numericals: Electrochemistry & Chemical Kinetics",
      "Coordination Chemistry & important coordination isomerisms",
      "Option-trap warnings & step-by-step explanatory notes"
    ],
    sampleLabel: "View Chemistry Sample"
  }
];

export const samplePages = [
  {
    id: "biology-sample",
    subject: "Biology",
    title: "Biology High-Yield Question & NCERT Trend Analysis",
    type: "Biology Sample",
    pageNumber: "Page 16 of 120",
    description: "NCERT-aligned Genetics & Molecular Basis of Inheritance high-probability question model with concept breakdown.",
    previewNote: "SAMPLE PREVIEW • NCERT LINE-BY-LINE ALIGNED",
    sections: [
      {
        topic: "Topic: Genetics & Molecular Basis of Inheritance (High-Yield NCERT Focus)",
        question: "Q.14 [NEET Expected Pattern]: In a eukaryotic transcription unit, if the coding strand sequence is 5'-ATG CCG AAT GCT-3', what will be the corresponding sequence of the synthesized mRNA transcript?",
        options: [
          "A) 5'-AUG CCG AAU GCU-3'",
          "B) 3'-AUG CCG AAU GCU-5'",
          "C) 5'-UAC GGC UUA CGA-3'",
          "D) 3'-UAC GGC UUA CGA-5'"
        ],
        solutionSummary: "Key Concept (NCERT Class 12): The mRNA sequence is identical to the coding (non-template) strand except that Thymine (T) is replaced by Uracil (U), retaining the 5'→3' polarity. Therefore, Coding: 5'-ATG CCG AAT GCT-3' ⇒ mRNA: 5'-AUG CCG AAU GCU-3'. (Option A)",
        examTrend: "Trend Insight: Molecular Genetics and Transcription concepts contribute 6–8 questions consistently in NEET-UG."
      }
    ]
  },
  {
    id: "chemistry-sample",
    subject: "Chemistry",
    title: "Chemistry High-Yield Organic & Physical Set",
    type: "Chemistry Sample",
    pageNumber: "Page 58 of 120",
    description: "Chemical Kinetics temperature-dependence numerical and Coordination Chemistry NCERT trend breakdown.",
    previewNote: "SAMPLE PREVIEW • NCERT & PYQ-INFORMED",
    sections: [
      {
        topic: "Topic: Chemical Kinetics & Arrhenius Activation Energy",
        question: "Q.28 [NEET Expected Pattern]: For a first-order chemical reaction, the rate constant doubles when the temperature increases from 300 K to 310 K. Taking R = 8.314 J/mol·K and ln 2 = 0.693, the activation energy (Ea) in kJ/mol is closest to:",
        options: [
          "A) 53.6 kJ/mol",
          "B) 44.8 kJ/mol",
          "C) 68.2 kJ/mol",
          "D) 32.4 kJ/mol"
        ],
        solutionSummary: "Key Concept (NCERT Class 12): Arrhenius Equation: ln(k2/k1) = (Ea / R) * ((T2 - T1) / (T1 * T2)). Substituting values: 0.693 = (Ea / 8.314) * (10 / (300 * 310)) ⇒ Ea ≈ 53.59 kJ/mol ≈ 53.6 kJ/mol. (Option A)",
        examTrend: "Trend Insight: Direct formula-based questions on Arrhenius equation and rate kinetics appear regularly in NEET Chemistry."
      }
    ]
  }
];

export const facultyData = {
  title: "Prepared & Reviewed By",
  name: "FormsADDA Academic & Medical Entrance Faculty Panel",
  designation: "Medical Entrance Subject Matter Specialists",
  experience: "Experienced in Medical Entrance & NCERT Curriculum Analysis",
  badge: "ACADEMIC EXPERTISE",
  qualification: "M.Sc / Academic Specialists in Biological & Chemical Sciences",
  bio: "The FormsADDA Academic Panel comprises experienced educators and subject matter specialists who specialize in analyzing medical entrance trends. Rather than speculating on questions, the team applies structured empirical evaluation of past NEET-UG papers, NCERT line-by-line weightages, and recurring concept variations to craft exam-oriented preparation materials.",
  facultyMembers: [
    {
      subject: "Biology",
      lead: "FormsADDA Biology Academic Wing",
      focus: "Human Physiology, Genetics, Ecology, Cell Biology & Botany",
      experience: "Medical Entrance Curriculum Specialists"
    },
    {
      subject: "Chemistry",
      lead: "FormsADDA Chemistry Academic Wing",
      focus: "Inorganic NCERT Trends, Organic Reaction Pathways & Physical Chemistry",
      experience: "Medical Entrance Curriculum Specialists"
    }
  ]
};

export const methodologySteps = [
  {
    step: "01",
    title: "NCERT & Syllabus Review",
    description: "Systematic review of the prescribed NEET-UG syllabus and NCERT textbook chapters to identify core foundational concepts.",
    icon: "fa-solid fa-book-medical"
  },
  {
    step: "02",
    title: "Previous-Year Question Analysis",
    description: "In-depth review of previous NEET-UG papers to detect recurring question themes, statement types, and concept combinations.",
    icon: "fa-solid fa-clock-rotate-left"
  },
  {
    step: "03",
    title: "Chapter and Concept Prioritization",
    description: "Categorizing high-yield units in Biology and Chemistry into high-priority zones for efficient revision allocation.",
    icon: "fa-solid fa-arrow-up-right-dots"
  },
  {
    step: "04",
    title: "Question Development",
    description: "Drafting NCERT-aligned MCQs, statement-based questions, matching formats, and numerical problems reflecting exam patterns.",
    icon: "fa-solid fa-pen-ruler"
  },
  {
    step: "05",
    title: "Academic Review",
    description: "Thorough vetting and verification by subject specialists to ensure solutions, explanations, and keys are academically sound.",
    icon: "fa-solid fa-shield-check"
  }
];

export const credibilityPoints = [
  {
    title: "NCERT-Oriented",
    description: "Every question and concept is closely mapped to NCERT textbooks, the core foundation of NEET-UG.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "PYQ-Informed",
    description: "Question templates reflect recurring styles and concepts observed in previous NEET-UG examinations.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Trend-Informed",
    description: "Curated by analyzing topic weightages and recent shifts in medical entrance question formats.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Reviewed Content",
    description: "Academic review to ensure solutions, explanations, and key concepts are accurate, verified, and clear.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Medical Entrance Focused",
    description: "Specially tailored for NEET aspirants focusing on high-weightage Biology and Chemistry units.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Transparent Methodology",
    description: "Open sample previews and honest academic boundaries—no false claims or prediction guarantees.",
    icon: "fa-solid fa-circle-check"
  }
];

export const studentReviews = [
  {
    id: 1,
    name: "Aakash Mehta",
    role: "NEET Aspirant",
    rating: 5,
    location: "Kota / Delhi",
    review: "The Biology NCERT statement breakdowns and Genetics questions are very well structured. It helped me identify which NCERT lines and mechanisms I was missing during revision. For ₹99, it is a very practical study aid.",
    date: "Verified Aspirant"
  },
  {
    id: 2,
    name: "Pooja Sharma",
    role: "NEET Aspirant",
    rating: 5,
    location: "Lucknow",
    review: "The transparency is great because you can see sample pages before buying. The Chemistry Inorganic NCERT trends and Organic reaction conversions saved me a lot of revision time.",
    date: "Verified Aspirant"
  },
  {
    id: 3,
    name: "Rohan Nair",
    role: "NEET Aspirant",
    rating: 5,
    location: "Hyderabad / Bengaluru",
    review: "Clean chapter-wise high-yield questions for Biology and Chemistry without any exaggerated claims. Easy to download on phone and revise anytime.",
    date: "Verified Aspirant"
  }
];

export const transparencyChecklist = [
  "This is an independently prepared educational practice and guess paper created by FormsADDA.",
  "It is NOT an official NTA question paper and does NOT claim affiliation with NTA.",
  "It is NOT leaked examination material under any circumstances.",
  "Exact questions appearing in NEET-UG cannot be guaranteed — it is a focused practice & revision resource.",
  "Sample pages are openly visible prior to purchase for full student transparency.",
  "Academic review methodology and subject coverage are fully disclosed.",
  "Price is clearly ₹99 with zero recurring charges or hidden fees.",
  "Payment and document delivery occur securely via the official FormsADDA platform."
];

export const pricingBenefits = [
  "Biology & Chemistry High-Yield Practice Material (Unified PDF)",
  "NCERT-Aligned Concept Summaries & Expected Question Formats",
  "Previous Years' Trend-Informed Topic Weightage Breakdown",
  "Step-by-Step Explanations & High-Yield Concept Notes",
  "Instant Searchable Digital Access (Mobile & Desktop Friendly)",
  "Downloadable & Printable Format for Offline Revision",
  "No Hidden Costs — Flat ₹99 One-Time Access"
];

export const faqs = [
  {
    q: "Is this the official NEET-UG question paper?",
    a: "No. This is an independently prepared educational practice and guess paper created by FormsADDA's academic team to assist NEET aspirants in prioritizing high-yield NCERT concepts and recurring question patterns."
  },
  {
    q: "Are the questions guaranteed to appear in NEET-UG?",
    a: "No. No institution or educator can guarantee exact examination questions. This guess paper is designed to help you practice the most probable NCERT concepts, question formats, and problem-solving techniques."
  },
  {
    q: "Which subjects are included in the ₹99 price?",
    a: "Both Biology (Botany & Zoology) and Chemistry are included in a single unified, well-organized digital PDF."
  },
  {
    q: "What is the price and are there any extra fees?",
    a: "The price is exactly ₹99 (one-time payment, discounted from ₹299). There are no additional fees, subscriptions, or hidden charges."
  },
  {
    q: "Can I preview the paper before purchasing?",
    a: "Yes! We have an interactive 'See Before You Buy' sample preview section on this page with representative sample pages for Biology and Chemistry."
  },
  {
    q: "Who prepares and reviews the guess paper?",
    a: "The content is curated and reviewed by the FormsADDA Academic & Medical Entrance Faculty Panel, comprising subject matter specialists experienced in NCERT curriculum and medical entrance analysis."
  },
  {
    q: "How do I purchase the Guess Paper?",
    a: "Click any 'Buy Now — ₹99' button on this page. You will be redirected to the official FormsADDA checkout page (https://formsadda.com/guess-paper/medical/neet-ug) where you can complete your payment securely via UPI, Card, or Net Banking."
  },
  {
    q: "How will I receive the digital PDF after payment?",
    a: "Immediately upon successful payment on the official FormsADDA checkout, you will receive an instant download link on screen as well as a copy sent to your registered email address."
  }
];
