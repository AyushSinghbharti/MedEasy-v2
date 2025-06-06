const dummyQuestions = [
  {
    "id": 1,
    "question": "Hello! I’m here to understand how you're feeling. To begin with, can you describe in detail how you've been feeling emotionally and mentally over the past couple of weeks?",
    "response": "Over the past two weeks, I've been feeling emotionally drained and persistently low. Most days, I wake up feeling tired and unmotivated, no matter how much rest I get. It's like there's a constant cloud hanging over me, and even the simplest tasks feel overwhelming and exhausting. There's a general sense of heaviness that I can't shake off."
  },
  {
    "id": 2,
    "question": "Have you noticed a decrease in interest or enjoyment in activities that you once found pleasurable? If so, could you share some examples and how that's made you feel?",
    "response": "Yes, I've lost interest in almost everything I used to enjoy. Things like listening to music, going for walks, or even chatting with friends just feel empty now. It's not that I consciously avoid them, but they just don't spark anything in me anymore. I feel emotionally disconnected and numb most of the time."
  },
  {
    "id": 3,
    "question": "Can you talk about any feelings of anxiety you've been experiencing? Do you often feel nervous, restless, or on edge without a clear reason?",
    "response": "Lately, I’ve been feeling anxious almost every day. There’s this constant sense of unease in my chest. I worry about things that haven’t even happened yet, and sometimes I can't pinpoint why I’m feeling so nervous. It's like my brain is always on high alert, even when I try to relax."
  },
  {
    "id": 4,
    "question": "Let’s discuss your sleep patterns. Are you having difficulty falling asleep, staying asleep, or are you sleeping excessively?",
    "response": "Sleep has been a major problem. I struggle to fall asleep at night, and even when I do, I wake up several times. It’s not restful sleep—it’s more like dozing in and out. I often wake up feeling just as tired as when I went to bed. Some nights, I barely get any real sleep at all."
  },
  {
    "id": 5,
    "question": "This might be difficult to talk about, but it's important: Have you had any thoughts about hurting yourself or that you'd be better off dead?",
    "response": "Yes, those thoughts have come up a few times. When everything feels too overwhelming or hopeless, I sometimes think about whether things would be easier if I just weren’t around. I haven’t acted on those thoughts, but they do scare me when they happen."
  },
  {
    "id": 6,
    "question": "Have you found it difficult to concentrate lately—perhaps while reading, watching something, or trying to stay focused on tasks?",
    "response": "Absolutely. My concentration has really suffered. I’ll try to watch a movie or read a page and realize I haven’t absorbed anything. My thoughts keep drifting, and I find it hard to stay present with what I’m doing. It’s frustrating because I used to be able to focus easily."
  },
  {
    "id": 7,
    "question": "Do you often feel worthless or blame yourself for things that go wrong, even if they may not be your fault?",
    "response": "Yes, I constantly feel like I'm not good enough. Even when something minor goes wrong, I immediately think it's my fault. I replay mistakes in my head and criticize myself for things that others might overlook. It’s like I’ve convinced myself that I’m a failure, and it’s hard to see anything good about myself right now."
  }
]


const dummyReport = {
  "report": {
    "patient_id": "auto-generated",
    "date": "2025-06-06",
    "conducted_by": "medEasy Mental Health AI Assistant",
    "assessment_summary": "The patient reports persistent emotional and psychological distress over the past two weeks. Based on the responses provided, there are strong indicators of Major Depressive Disorder (MDD) with Generalized Anxiety Disorder (GAD) components. The reported symptoms also raise a flag for moderate suicide risk and impaired cognitive functionality.",
    "identified_issues_and_symptoms": {
      "depressive_symptoms": [
        "Persistent low mood and fatigue",
        "Anhedonia (loss of interest/pleasure in daily activities)",
        "Feelings of worthlessness and failure",
        "Frequent thoughts of self-harm or death",
        "Sleep disturbances (insomnia)",
        "Cognitive difficulties (lack of concentration)"
      ],
      "anxiety_symptoms": [
        "Excessive worry and feeling on edge",
        "Physical restlessness",
        "Racing thoughts leading to mental fatigue"
      ]
    },
    "recommended_tests_and_screenings": [
      {
        "name": "PHQ-9",
        "purpose": "Measures severity of depression"
      },
      {
        "name": "GAD-7",
        "purpose": "Assesses anxiety levels"
      },
      {
        "name": "Columbia Suicide Severity Rating Scale (C-SSRS)",
        "purpose": "Evaluates suicide risk"
      },
      {
        "name": "Sleep Assessment",
        "purpose": "Tracks sleep patterns"
      },
      {
        "name": "Cognitive Functioning Screening",
        "purpose": "Assesses attention and memory impairment"
      }
    ],
    "suggested_interventions": {
      "psychotherapy": [
        "Cognitive Behavioral Therapy (CBT)",
        "Interpersonal Therapy (IPT)"
      ],
      "pharmacological_treatment": [
        "SSRIs (e.g., Sertraline, Fluoxetine)",
        "SNRIs (e.g., Venlafaxine)",
        "Short-term Benzodiazepines (if anxiety is acute, with caution)"
      ],
      "lifestyle_recommendations": [
        "Regular physical activity (30 mins/day)",
        "Sleep hygiene (consistent routine, no screen 1hr before bed)",
        "Avoid alcohol and caffeine",
        "Journaling or guided meditation apps (e.g., Headspace, Calm)"
      ]
    },
    "suggested_clinics_and_help_centers": [
      {
        "name": "NIMHANS",
        "location": "Bangalore",
        "services": "Government mental health and neuroscience institute"
      },
      {
        "name": "MindPeace Clinics",
        "location": "Delhi/Mumbai",
        "services": "Private psychiatry & counseling services"
      },
      {
        "name": "YourDOST / BetterHelp (Online)",
        "location": "All India",
        "services": "Affordable online counseling"
      },
      {
        "name": "Vandrevala Foundation Helpline",
        "contact": "1860 266 2345",
        "services": "24x7 mental health helpline"
      }
    ],
    "important_notes": [
      "The mention of self-harm thoughts is serious. A psychiatric consultation is urgently recommended.",
      "This AI assessment is not a replacement for professional medical evaluation.",
      "Patient should be monitored over time for response to treatment and reevaluated every 2–4 weeks."
    ],
    "next_steps": [
      "Book an appointment with a licensed clinical psychologist or psychiatrist.",
      "Undergo the recommended psychological screenings (PHQ-9, GAD-7, C-SSRS).",
      "Begin therapy, followed by medical treatment if required.",
      "Track mood and sleep using a digital app or diary.",
      "Set up regular check-ins with a mental health professional."
    ]
  }
}

export { dummyQuestions, dummyReport };
