import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ChatMessage {
  id: string | number;
  question: string;
  response: string;
}

interface FinalReportProps {
  chatHistory: ChatMessage[];
  patientData?: any;
  apiKey?: string; // Make API key configurable
}

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

// Function to call Gemini and get report
export const generateFinalReport = async (
  chatHistory: ChatMessage[],
  apiKey: string
): Promise<ReportInterface> => {
  if (!apiKey) {
    throw new Error("API key is required");
  }

  if (!chatHistory || chatHistory.length === 0) {
    throw new Error("Chat history is required");
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Format chat history as a conversation string
    const conversation = chatHistory
      .map((msg, i) => `Q${i + 1}: ${msg.question}\nA${i + 1}: ${msg.response}`)
      .join("\n\n");

    const prompt = `You are a medical assistant chatbot. Based on the following conversation history between a user and an assistant, generate a final summarized report of the user's mental and physical health.

Format the response as valid JSON with the following structure:
{
  "date": "YYYY-MM-DD",
  "assessment_summary": "Brief summary of the assessment",
  "identified_issues_and_symptoms": {
    "depressive_symptoms": ["symptom1", "symptom2"],
    "anxiety_symptoms": ["symptom1", "symptom2"]
  },
  "recommended_tests_and_screenings": [
    {
      "name": "Test name",
      "purpose": "Purpose of the test"
    }
  ],
  "suggested_interventions": {
    "psychotherapy": ["intervention1", "intervention2"],
    "pharmacological_treatment": ["treatment1", "treatment2"],
    "lifestyle_recommendations": ["recommendation1", "recommendation2"]
  },
  "important_notes": ["note1", "note2"],
  "next_steps": ["step1", "step2"]
}

Conversation History: ${conversation}

IMPORTANT: 
- Return ONLY valid JSON, no additional text
- Focus on these specific problems and tests:
1. Depression and Anxiety: PHQ-9, GAD-7
2. Somatic Symptom Disorder: SSD-12, PHQ-15
3. Psychosis / Mania: PSQ (Prodromal Symptoms Questionnaire)
4. Suicide Risk: C-SSRS (Columbia Suicide Severity Rating Scale)
5. Personality Disorders: MMPI (Minnesota Multiphasic Personality Inventory)
- Use current date for the date field
- Keep recommendations professional and appropriate`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    // Clean up response to ensure it's valid JSON
    const jsonStart = responseText.indexOf('{');
    const jsonEnd = responseText.lastIndexOf('}') + 1;
    
    if (jsonStart === -1 || jsonEnd === 0) {
      throw new Error("Invalid JSON response from AI");
    }
    
    const jsonString = responseText.substring(jsonStart, jsonEnd);
    const parsedReport = JSON.parse(jsonString);
    
    // Validate required fields
    if (!parsedReport.date || !parsedReport.assessment_summary) {
      throw new Error("Invalid report structure");
    }
    
    return parsedReport;
  } catch (error) {
    console.error("Error generating report:", error);
    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse AI response. Please try again.");
    }
    throw error;
  }
};

const FinalReport: React.FC<FinalReportProps> = ({ 
  chatHistory, 
  patientData,
  apiKey = "AIzaSyAv4vh_j8gsGe_X6D7ChE2bH8hv3dBfyrI"
}) => {
  const [report, setReport] = useState<ReportInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      if (chatHistory.length === 0) {
        return;
      }

      if (!apiKey) {
        setError("API key is not configured. Please provide an API key.");
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const generatedReport = await generateFinalReport(chatHistory, apiKey);
        setReport(generatedReport);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
        console.error("Report generation failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [chatHistory, apiKey]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Health Assessment Report
      </h1>

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your personalized health report...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-600 font-semibold">⚠️ Error</div>
          </div>
          <p className="text-red-700 mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {report && (
        <div className="space-y-6">
          {/* Report Header */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">
                📋 Health Assessment Summary
              </h2>
              <span className="text-sm text-gray-500">
                {formatDate(report.date)}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {report.assessment_summary}
            </p>
          </div>

          {/* Identified Issues */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              🔍 Identified Issues & Symptoms
            </h3>
            
            {report.identified_issues_and_symptoms.depressive_symptoms.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-red-600 mb-2">Depressive Symptoms:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {report.identified_issues_and_symptoms.depressive_symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}

            {report.identified_issues_and_symptoms.anxiety_symptoms.length > 0 && (
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Anxiety Symptoms:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {report.identified_issues_and_symptoms.anxiety_symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Recommended Tests */}
          {report.recommended_tests_and_screenings.length > 0 && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                🧪 Recommended Tests & Screenings
              </h3>
              <div className="space-y-3">
                {report.recommended_tests_and_screenings.map((test, index) => (
                  <div key={index} className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-600">{test.name}</h4>
                    <p className="text-gray-700">{test.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Interventions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              💡 Suggested Interventions
            </h3>
            
            {report.suggested_interventions.psychotherapy.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-green-600 mb-2">Psychotherapy:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {report.suggested_interventions.psychotherapy.map((therapy, index) => (
                    <li key={index}>{therapy}</li>
                  ))}
                </ul>
              </div>
            )}

            {report.suggested_interventions.pharmacological_treatment.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-blue-600 mb-2">Pharmacological Treatment:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {report.suggested_interventions.pharmacological_treatment.map((treatment, index) => (
                    <li key={index}>{treatment}</li>
                  ))}
                </ul>
              </div>
            )}

            {report.suggested_interventions.lifestyle_recommendations.length > 0 && (
              <div>
                <h4 className="font-semibold text-teal-600 mb-2">Lifestyle Recommendations:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {report.suggested_interventions.lifestyle_recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Important Notes */}
          {report.important_notes.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-800">
                ⚠️ Important Notes
              </h3>
              <ul className="space-y-2">
                {report.important_notes.map((note, index) => (
                  <li key={index} className="text-yellow-800 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          {report.next_steps.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">
                🎯 Next Steps
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                {report.next_steps.map((step, index) => (
                  <li key={index} className="text-green-800">{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Conversation History */}
      {chatHistory.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            💬 Conversation History
          </h2>
          <div className="space-y-4">
            {chatHistory.map((chat, index) => (
              <div key={chat.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                      Q{index + 1}
                    </span>
                  </div>
                  <p className="text-gray-800">{chat.question}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      A{index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{chat.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-gray-100 rounded-lg p-4 mt-6 text-center">
        <p className="text-sm text-gray-600">
          <strong>Disclaimer:</strong> This report is generated by AI and is for informational purposes only. 
          Please consult with a qualified healthcare professional for proper medical advice and treatment.
        </p>
      </div>
    </div>
  );
};

export default FinalReport;