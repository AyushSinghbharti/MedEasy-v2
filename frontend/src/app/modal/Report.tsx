import React from "react";

interface ReportInterface {
  date: string;
  assessment_summary: string;
  identified_issues_and_symptoms: {
    depressive_symptoms: string[];
    anxiety_symptoms: string[];
  };
  recommended_tests_and_screenings: Array<{
    name: string;
    purpose: string;
  }>;
  suggested_interventions: {
    psychotherapy: string[];
    pharmacological_treatment: string[];
    lifestyle_recommendations: string[];
  };
  important_notes: string[];
  next_steps: string[];
}

interface PatientData {
  first_name: string;
  last_name: string;
  registered_by: {
    user_name: string;
  };
}

interface ReportProps {
  reportData: ReportInterface;
  patientData: PatientData;
  onClose: () => void;
}

// Mock data for demonstration
const mockReportData: ReportInterface = {
  date: "March 15, 2024",
  assessment_summary: "Patient presents with moderate symptoms of depression and mild anxiety. Overall functioning appears to be impacted in work and social domains. Patient demonstrates good insight and motivation for treatment.",
  identified_issues_and_symptoms: {
    depressive_symptoms: [
      "Persistent low mood for 3+ weeks",
      "Decreased interest in activities",
      "Sleep disturbances (early morning awakening)",
      "Fatigue and low energy"
    ],
    anxiety_symptoms: [
      "Excessive worry about work performance",
      "Physical tension and restlessness",
      "Difficulty concentrating"
    ]
  },
  recommended_tests_and_screenings: [
    {
      name: "PHQ-9 Depression Scale",
      purpose: "Standardized assessment of depression severity"
    },
    {
      name: "GAD-7 Anxiety Scale",
      purpose: "Measurement of generalized anxiety symptoms"
    },
    {
      name: "Thyroid Function Test",
      purpose: "Rule out medical causes of mood symptoms"
    }
  ],
  suggested_interventions: {
    psychotherapy: [
      "Cognitive Behavioral Therapy (CBT)",
      "Weekly individual sessions recommended",
      "Consider group therapy for social support"
    ],
    pharmacological_treatment: [
      "SSRI antidepressant consideration",
      "Start with low dose, monitor response",
      "Psychiatry consultation recommended"
    ],
    lifestyle_recommendations: [
      "Regular exercise routine (30 min, 3x weekly)",
      "Sleep hygiene improvement",
      "Mindfulness/meditation practice",
      "Limit alcohol consumption"
    ]
  },
  important_notes: [
    "No current suicidal ideation reported",
    "Strong family support system in place",
    "Previous positive response to therapy",
    "Monitor for medication side effects"
  ],
  next_steps: [
    "Schedule follow-up appointment in 2 weeks",
    "Begin therapy sessions within 1 week",
    "Complete recommended screening assessments",
    "Consider psychiatry referral if symptoms persist"
  ]
};

const mockPatientData: PatientData = {
  first_name: "John",
  last_name: "Doe",
  registered_by: {
    user_name: "Dr. Sarah Mitchell"
  }
};

const Report: React.FC<ReportProps> = ({ 
  reportData = mockReportData, 
  onClose = () => {}, 
  patientData = mockPatientData 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="relative max-w-5xl w-full max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-2xl border border-slate-200">
        
        {/* Header Section */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl border-b border-indigo-500">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                Mental Health Assessment Report
              </h1>
              <p className="text-indigo-100 text-lg">Comprehensive Clinical Evaluation</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-200 group"
              aria-label="Close report modal"
            >
              <svg className="h-6 w-6 group-hover:rotate-90 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Patient Information Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Patient Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500">Patient Name</p>
                <p className="text-lg font-semibold text-slate-800">{patientData.first_name + " " + patientData.last_name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500">Assessment Date</p>
                <p className="text-lg font-semibold text-slate-800">{reportData.date}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500">Conducted By</p>
                <p className="text-lg font-semibold text-slate-800">{patientData.registered_by.user_name}</p>
              </div>
            </div>
          </div>

          {/* Assessment Summary */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Assessment Summary</h2>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-emerald-500">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{reportData.assessment_summary}</p>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Identified Issues and Symptoms</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Depressive Symptoms
                </h3>
                <ul className="space-y-2">
                  {reportData.identified_issues_and_symptoms.depressive_symptoms.length ? (
                    reportData.identified_issues_and_symptoms.depressive_symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {symptom}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 italic">None reported</li>
                  )}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Anxiety Symptoms
                </h3>
                <ul className="space-y-2">
                  {reportData.identified_issues_and_symptoms.anxiety_symptoms.length ? (
                    reportData.identified_issues_and_symptoms.anxiety_symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {symptom}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 italic">None reported</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Tests */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Recommended Tests and Screenings</h2>
            </div>
            
            <div className="space-y-4">
              {reportData.recommended_tests_and_screenings.length ? (
                reportData.recommended_tests_and_screenings.map((test, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 text-lg">{test.name}</h4>
                        <p className="text-slate-600 mt-1">{test.purpose}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No tests recommended</p>
              )}
            </div>
          </div>

          {/* Interventions */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Suggested Interventions</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Psychotherapy
                </h3>
                <ul className="space-y-2">
                  {reportData.suggested_interventions.psychotherapy.length ? (
                    reportData.suggested_interventions.psychotherapy.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 italic text-sm">No psychotherapy suggested</li>
                  )}
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pharmacological
                </h3>
                <ul className="space-y-2">
                  {reportData.suggested_interventions.pharmacological_treatment.length ? (
                    reportData.suggested_interventions.pharmacological_treatment.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 italic text-sm">No medication recommended</li>
                  )}
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-5 border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                  Lifestyle
                </h3>
                <ul className="space-y-2">
                  {reportData.suggested_interventions.lifestyle_recommendations.length ? (
                    reportData.suggested_interventions.lifestyle_recommendations.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 italic text-sm">No lifestyle recommendations</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg border border-red-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-red-800">Important Notes</h2>
            </div>
            <div className="space-y-3">
              {reportData.important_notes.length ? (
                reportData.important_notes.map((note, i) => (
                  <div key={i} className="bg-white bg-opacity-70 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-red-800 font-medium flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {note}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No important notes</p>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-lg border border-indigo-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-indigo-800">Next Steps</h2>
            </div>
            <div className="space-y-3">
              {reportData.next_steps.length ? (
                reportData.next_steps.map((step, i) => (
                  <div key={i} className="bg-white bg-opacity-70 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-indigo-500 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 font-medium">{step}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No next steps provided</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;