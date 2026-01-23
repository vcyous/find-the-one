"use server";

const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbyw6ZRLpFD89nRvBAmzKWionPOy_CVf9X6Bcma42Yia3ZwyCwOf6CouKRk6cAVxGG97BQ/exec";

export const addRegistration = async (formData) => {
  const nickName = formData.nickName;
  const age = formData.age;
  const maritalStatus = formData.maritalStatus;
  const backStory = formData.backStory;
  const yourPhase = formData.yourPhase;
  const conditionTest = formData.conditionTest.join(", ");
  const pastRelationship = formData.pastRelationship;
  const relationshipProblem = formData.relationshipProblem;
  const relationshipNeeds = formData.relationshipNeeds;
  const seriousRelationshipPOV = formData.seriousRelationshipPOV;
  const findConflict = formData.findConflict;
  const conflictReasons = formData.conflictReasons;
  const toleranceTest = formData.toleranceTest;
  const healthyRelationship = formData.healthyRelationship;
  const deciderTest = formData.deciderTest;
  const preparationTest = formData.preparationTest;
  const talkAbout = formData.talkAbout;
  const enjoyingDate = formData.enjoyingDate;
  const importantOfMeet = formData.importantOfMeet;
  const boundariesTest = formData.boundariesTest;
  const reference1 = formData.reference1;
  const reference2 = formData.reference2;
  const reference3 = formData.reference3;
  const instagram = formData.instagram;
  const whatsapp = formData.whatsapp;
  const source = formData.source;

  const payload = {
    nickName,
    age,
    maritalStatus,
    backStory,
    yourPhase,
    conditionTest,
    pastRelationship,
    relationshipProblem,
    relationshipNeeds,
    seriousRelationshipPOV,
    findConflict,
    conflictReasons,
    toleranceTest,
    healthyRelationship,
    deciderTest,
    preparationTest,
    talkAbout,
    enjoyingDate,
    importantOfMeet,
    boundariesTest,
    reference1,
    reference2,
    reference3,
    instagram,
    whatsapp,
    source,
  };

  try {
    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.log("Error response text:", errorText);
      throw new Error("Failed to add registration to google spreadsheet");
    }

    const responseData = await res.text();
    console.log("Success response:", responseData);

    return {
      successMessage: `Success! You have been successfully registered for our Event!`,
    };
  } catch (error) {
    console.error("Error in addRegistration:", error);
    return {
      errorMessage: `Ooops! There was a problem with your registration!`,
    };
  }
};
