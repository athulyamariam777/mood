Bloom 🌸
Daily Women's Wellness Companion
Basic Details
Team Name: CYBR
Team Members
Member 1: Amrutha - College of Engineering, Chenganur
Member 2: Athulya - College of Engineering, Chengannur
Hosted Project Link
https://github.com/athulyamariam777/mood/

Project Description
Bloom is a daily emotional wellness web app designed for women.women emotional wellbeing is the main concept. Users check in with how they're feeling each day — choosing from emotions like anxious, tired, sad, stressed, happy, overwhelmed, hopeful, or irritable — and receive a curated set of guided wellness activities tailored to that emotion. Each activity includes step-by-step guidance with built-in timers, helping users complete practices like breathwork, journaling, grounding exercises, and gentle movement.

The Problem statement
Women frequently experience emotional fluctuations tied to stress, hormones, work, and relationships — yet most wellness apps are either too generic, too clinical, or require expensive subscriptions. There is no simple, beautiful, friction-free tool that meets a woman exactly where she is emotionally and guides her through a meaningful self-care practice in under 10 minutes.

The Solution
Bloom provides a daily emotional check-in paired with personalised wellness activities. A user selects or types how they feel, and the app surfaces four relevant activities (breathwork, journaling, movement, grounding etc.). Each activity opens a guided modal with step-by-step instructions, countdown timers, and gentle affirmations. Users create an account so their check-in history is saved — enabling them to track emotional patterns over time. The entire experience is designed to feel calm, warm, and non-judgmental.

Technical Details
Technologies/Components Used
For Software:

Languages used: HTML, CSS, JavaScript
Libraries used: Supabase JS SDK v2 — authentication and database, Google Fonts (Playfair Display, DM Sans) — typography
Tools used: Supabase — PostgreSQL database + auth backend (hosted, no server needed), VS Code + Live Server — local development, Git — version control

List the key features of your project:
Feature 1: Emotional Check-in — Select from 8 preset emotions or type a custom one
Feature 2: Personalised Activity Recommendations — 4 curated wellness activities per emotion (32 total activities across all emotion categories)
Feature 3: Guided Activity Modal — Step-by-step instructions with animated countdown timers for timed steps
Feature 4: User Authentication — Email/password sign up and sign in via Supabase Auth with email confirmation
Feature 5: Check-in History — Every check-in (emotion + activity chosen) is saved to the user's account in Supabase
Feature 6: Responsive Design — Works on mobile and desktop with a warm, minimal aesthetic

Implementation
For Software:
Installation
No installation needed for the frontend. Just open index.html with a live server.
For local development:
bash# Option 1 — VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Option 2 — Node.js serve
npx serve .
# Then open http://localhost:3000
Supabase Setup

Create a free project at https://supabase.com
Run this SQL in the Supabase SQL Editor:

sqlCREATE TABLE checkins (
  id            BIGSERIAL PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  emotion       TEXT NOT NULL,
  activity      TEXT,
  note          TEXT,
  checked_in_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own checkins"
  ON checkins FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own checkins"
  ON checkins FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own checkins"
  ON checkins FOR DELETE USING (auth.uid() = user_id);

Copy your Project URL and anon key from Project Settings → API
Update script.js:

javascriptconst SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';

In Supabase → Authentication → URL Configuration, add your site URL

Run
bash# Open with Live Server in VS Code, or:
npx serve .


Project Documentation
For Software:
Screenshots (Add at least 3)
![Login and registration screen](https://drive.google.com/file/d/14heyn38Ux2jMN5zsUe-sSTBVEuxADpPt/view?usp=sharing) Login and registration screen — users can sign in or create an account

![Emotional check-in screen](https://drive.google.com/file/d/13rWDN3olrP7L6RN2wtnnxRG_X7X0KKfk/view?usp=sharing) Emotional check-in screen — select from emotion pills or type a custom feeling

![Four personalised activity cards](https://drive.google.com/file/d/1RKn10zAiCByHwpo8lQVXAGLThrB0ep9c/view?usp=sharing) Four personalised activity cards shown after selecting an emotion

![Step-by-step guided activity with animated countdown timer](https://drive.google.com/file/d/1wEB5hEH7S6ImuQSQQMy1jnwDr5-_-Edw/view?usp=sharing) Step-by-step guided activity with animated countdown timer

Diagrams
System Architecture
┌─────────────────────────────────────────┐
│              Browser (Client)           │
│                                         │
│  index.html  ←→  script.js             │
│                    │                    │
│              supabase-js SDK            │
└──────────────────┬──────────────────────┘
                   │ HTTPS
┌──────────────────▼──────────────────────┐
│            Supabase (Backend)           │
│                                         │
│  ┌─────────────┐   ┌─────────────────┐  │
│  │  Auth       │   │  PostgreSQL DB  │  │
│  │  (JWT)      │   │  checkins table │  │
│  └─────────────┘   └─────────────────┘  │
└─────────────────────────────────────────┘
The frontend communicates directly with Supabase via the JS SDK. There is no custom backend server. Row Level Security (RLS) on the database ensures users can only access their own data.

Application Workflow
User visits app
      │
      ▼
Auth Panel (Login / Register)
      │
      ▼ (authenticated)
Check-in Card
  → Select emotion pill OR type custom emotion
      │
      ▼
showActivities()
  → Matches emotion to activityMap
  → Renders 4 activity cards
  → Saves check-in to Supabase
      │
      ▼
User clicks activity card
      │
      ▼
Guided Modal opens
  → Step-by-step instructions
  → Countdown timers where applicable
  → Progress dots
      │
      ▼
Completion screen → "Beautiful work."
      │
      ▼
User closes modal → can check in again

API Documentation
Base: Supabase REST API — https://your-project.supabase.co
All requests require Authorization: Bearer <jwt_token> header (handled automatically by supabase-js).
Auth Endpoints (via Supabase Auth)
POST /auth/v1/signup
Register a new user with email + password.
jsonRequest:  { "email": "user@example.com", "password": "password123" }
Response: { "user": { "id": "uuid", "email": "..." }, "session": { "access_token": "..." } }
POST /auth/v1/token?grant_type=password
Log in an existing user.
jsonRequest:  { "email": "user@example.com", "password": "password123" }
Response: { "access_token": "...", "user": { "id": "uuid" } }
Database Endpoints (via Supabase PostgREST)
POST /rest/v1/checkins
Save a new check-in.
jsonRequest:  { "user_id": "uuid", "emotion": "anxious", "activity": "Box Breathing" }
Response: 201 Created
GET /rest/v1/checkins?user_id=eq.{uuid}&order=checked_in_at.desc
Fetch a user's check-in history.
jsonResponse: [
  { "id": 1, "emotion": "anxious", "activity": "Box Breathing", "checked_in_at": "2025-02-28T..." }
]
AI Tools Used
Tool Used: Claude (Anthropic)
Purpose: Full-stack development assistance throughout the project
Key prompts used:

"Is Supabase enough for this? What's the tradeoff?"
"Give me step by step what to do with Supabase"
"Fix the Supabase identifier already declared error"
"The create account button isn't working — here's the console error"

Percentage of AI-assisted code: ~60%
Human contributions:

Product concept and emotional wellness angle
UX decisions and app flow design
Original HTML/CSS design and aesthetic (Bloom visual identity)
Activity content writing (all 32 wellness activities)
Debugging, integration decisions, and final assembly
Choosing to use Supabase over a full Express backend

Project Demo
Video
![Demo Video](https://drive.google.com/file/d/1BrH1mhgLKuQLiM7okD_8zhegb9U4LWKv/view?usp=sharing)


License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to deal in the Software without restriction, including the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software.
