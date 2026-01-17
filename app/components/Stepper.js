"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addRegistration } from "../actions";
import Step1Intro from "./steps/Step1Intro";
import Step2About from "./steps/Step2About";
import Step3Values from "./steps/Step3Values";
import Step4Boundaries from "./steps/Step4Boundaries";
import Step5Survey from "./steps/Step5Survey";

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    nickName: "",
    age: "",
    maritalStatus: "",
    backStory: "",
    yourPhase: "",

    // Step 2: About
    conditionTest: [],
    pastRelationship: "",
    relationshipProblem: "",

    // Step 3: Values
    relationshipNeeds: "",
    seriousRelationshipPOV: "",
    findConflict: "",
    conflictReasons: "",
    toleranceTest: "",
    healthyRelationship: "",
    deciderTest: "",
    preparationTest: "",

    // Step 4: Boundaries
    talkAbout: "",
    enjoyingDate: "",
    importantOfMeet: "",
    boundariesTest: "",

    // Step 5: Survey
    reference1: "",
    reference2: "",
    reference3: "",
    instagram: "",
    whatsapp: "",
  });
  const router = useRouter();

  const totalSteps = 5;

  const updateFormData = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => {
        return prev + 1;
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await addRegistration(formData);

      if (res.successMessage) {
        alert("Form submitted successfully!");
        router.push("/");
      } else {
        alert("Error: " + res.errorMessage);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Perkenalan Diri";
      case 2:
        return "Ini Tentang Kamu";
      case 3:
        return "Kita Mau Kenal Lebih Dekat";
      case 4:
        return "Ini Tentang Batasan";
      case 5:
        return "Survey Singkat yaa 😉";
      default:
        return "Step " + currentStep;
    }
  };

  const handleBackNavigation = () => {
    if (currentStep === 1) {
      router.push("/");
    } else {
      prevStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Intro
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <Step2About
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 3:
        return (
          <Step3Values
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 4:
        return (
          <Step4Boundaries
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 5:
        return (
          <Step5Survey
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] relative">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between p-4 bg-white">
          <button
            onClick={handleBackNavigation}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900 ">
            {getStepTitle()}
          </h1>
          <div className="w-10 h-10" /> {/* Spacer for center alignment */}
        </div>

        {/* Progress Header */}
        <div className="px-4 py-6">
          <div className="mb-6">
            {/* Progress Bar - 5 Segments */}
            <div className="flex gap-2 mb-4">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                (step) => (
                  <div
                    key={step}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-[var(--color-ftomain)]"
                        : "bg-gray-200"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Form Content */}
          <div className="min-h-[400px]">{renderStep()}</div>
        </div>

        {/* Bottom Padding */}
        <div className="h-24" />
      </div>
    </div>
  );
}
