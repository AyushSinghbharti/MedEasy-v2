import React from "react";
import { ReportInterface } from "../../dummyData/dummyDataInterface";

interface ReportProps {
  reportData: ReportInterface;
  patientData: any;
  onClose: () => void;
}

const Report: React.FC<ReportProps> = ({ reportData, onClose, patientData }) => {
  return (
    // Overlay with blur + dim background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm p-4">
      {/* Modal container */}
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg p-8 font-sans text-gray-800">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          aria-label="Close report modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold mb-4 border-b pb-2 text-indigo-700">
          Mental Health Assessment Report
        </h2>

        {/* Basic Info */}
        <section className="mb-6">
          <p>
            <span className="font-semibold">Patient ID:</span> {patientData.first_name + " " + patientData.last_name}
          </p>
          <p>
            <span className="font-semibold">Date of Assessment:</span>{reportData.date}
          </p>
          <p>
            <span className="font-semibold">Conducted By:</span> {patientData.registered_by.user_name}
          </p>
        </section>

        {/* Assessment Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Assessment Summary
          </h3>
          <p className="whitespace-pre-line">{reportData.assessment_summary}</p>
        </section>

        {/* Identified Issues and Symptoms */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Identified Issues and Symptoms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-1 text-indigo-500">Depressive Symptoms</h4>
              <ul className="list-disc list-inside text-gray-700">
                {reportData.identified_issues_and_symptoms.depressive_symptoms.length ? (
                  reportData.identified_issues_and_symptoms.depressive_symptoms.map(
                    (symptom, i) => <li key={i}>{symptom}</li>
                  )
                ) : (
                  <li>None reported</li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-indigo-500">Anxiety Symptoms</h4>
              <ul className="list-disc list-inside text-gray-700">
                {reportData.identified_issues_and_symptoms.anxiety_symptoms.length ? (
                  reportData.identified_issues_and_symptoms.anxiety_symptoms.map(
                    (symptom, i) => <li key={i}>{symptom}</li>
                  )
                ) : (
                  <li>None reported</li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Tests and Screenings */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Recommended Tests and Screenings
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            {reportData.recommended_tests_and_screenings.length ? (
              reportData.recommended_tests_and_screenings.map((test, i) => (
                <li key={i}>
                  <span className="font-semibold">{test.name}</span>: {test.purpose}
                </li>
              ))
            ) : (
              <li>No tests recommended</li>
            )}
          </ul>
        </section>

        {/* Suggested Interventions */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Suggested Interventions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Psychotherapy */}
            <div>
              <h4 className="font-semibold mb-1 text-indigo-500">Psychotherapy</h4>
              <ul className="list-disc list-inside text-gray-700">
                {reportData.suggested_interventions.psychotherapy.length ? (
                  reportData.suggested_interventions.psychotherapy.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                ) : (
                  <li>No psychotherapy suggested</li>
                )}
              </ul>
            </div>

            {/* Pharmacological Treatment */}
            <div>
              <h4 className="font-semibold mb-1 text-indigo-500">
                Pharmacological Treatment
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {reportData.suggested_interventions.pharmacological_treatment.length ? (
                  reportData.suggested_interventions.pharmacological_treatment.map(
                    (item, i) => <li key={i}>{item}</li>
                  )
                ) : (
                  <li>No medication recommended</li>
                )}
              </ul>
            </div>

            {/* Lifestyle Recommendations */}
            <div>
              <h4 className="font-semibold mb-1 text-indigo-500">Lifestyle Recommendations</h4>
              <ul className="list-disc list-inside text-gray-700">
                {reportData.suggested_interventions.lifestyle_recommendations.length ? (
                  reportData.suggested_interventions.lifestyle_recommendations.map(
                    (item, i) => <li key={i}>{item}</li>
                  )
                ) : (
                  <li>No lifestyle recommendations</li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTES */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside text-red-600 font-medium">
            {reportData.important_notes.length ? (
              reportData.important_notes.map((note, i) => <li key={i}>{note}</li>)
            ) : (
              <li>No important notes</li>
            )}
          </ul>
        </section>

        {/* Next Steps */}
        <section>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Next Steps</h3>
          <ul className="list-disc list-inside text-gray-700">
            {reportData.next_steps.length ? (
              reportData.next_steps.map((step, i) => <li key={i}>{step}</li>)
            ) : (
              <li>No next steps provided</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Report;