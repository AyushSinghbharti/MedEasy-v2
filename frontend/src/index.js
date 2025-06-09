import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../src/app/HomePage.tsx";
import SignIn from "./app/(auth)/SignIn.tsx";
import SignUp from "./app/(auth)/SignUp.tsx";
import AddPatiend from "./app/(tabs)/AddPatient.tsx";
import ChatHomePage from "./app/(tabs)/ChatHomePage.tsx";
import reportWebVitals from "./reportWebVitals";
import FinalReport from "./app/(tabs)/FinalReport.tsx";
import { AuthProvider } from "./providers/AuthProvider.js";
import { PatientProvider } from "./providers/PatientProvider.js";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import { useLocation } from "react-router";

const FinalReportWrapper = () => {
  const { state } = useLocation();
  return <FinalReport chatHistory={state?.chatHistory || []} patientData={state?.patientData || []} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PatientProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addPatient" element={<AddPatiend />} />
            <Route path="/chatHomePage" element={<ChatHomePage />} />
            <Route path="/finalReport" element={<FinalReportWrapper />} />
          </Routes>
        </PatientProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
