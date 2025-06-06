export interface QuestionInterface {
  id: number;
  question: string;
  response: string;
}

export interface ReportInterface {
  patient_id: string;
  date: string;
  conducted_by: string;
  assessment_summary: string;
  identified_issues_and_symptoms: {
    depressive_symptoms: string[];
    anxiety_symptoms: string[];
  };
  recommended_tests_and_screenings: {
    name: string;
    purpose: string;
  }[];
  suggested_interventions: {
    psychotherapy: string[];
    pharmacological_treatment: string[];
    lifestyle_recommendations: string[];
  };
  suggested_clinics_and_help_centers: {
    name: string;
    location?: string;
    contact?: string;
    services: string;
  }[];
  important_notes: string[];
  next_steps: string[];
}