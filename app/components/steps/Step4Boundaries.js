"use client";

import { useState } from "react";

export default function Step4Boundaries({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({});

  const optionsTalkAbout = [
    "Hidup & masa depan",
    "Karier/Mimpi",
    "Random",
    "Deep Talk",
    "Semua bisa asal nyambung",
  ];

  const optionsEnjoyingDate = [
    "Ngopi santai",
    "Jalan Sore",
    "Makan bareng",
    "Duduk & Ngobrol lama aja",
  ];

  const optionsImportantOfMeet = [
    "Sopan & respectful",
    "Niat jelas",
    "Nyaman & nggak dipaksa",
    "Bisa jadi diri sendiri",
    "Komunikasi jujur",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateAndNext = () => {
    const newErrors = {};

    if (!formData.boundariesTest?.trim())
      newErrors.boundariesTest = "Tolong isi boundaries kamu";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="talkAbout"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Kamu lebih nyaman ngobrol tentang?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsTalkAbout.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.talkAbout || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ talkAbout: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ talkAbout: updated });
                  }

                  if (errors.talkAbout) {
                    setErrors((prev) => ({ ...prev, talkAbout: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.talkAbout
                    ?.split(",")
                    .map((v) => v.trim())
                    .includes(value)
                    ? "bg-[var(--color-ftomain)] text-white"
                    : "bg-gray-100 text-textdesc hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="enjoyingDate"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Aktivitas date yang paling kamu enjoy?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsEnjoyingDate.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.enjoyingDate || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ enjoyingDate: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ enjoyingDate: updated });
                  }

                  if (errors.enjoyingDate) {
                    setErrors((prev) => ({ ...prev, enjoyingDate: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.enjoyingDate
                    ?.split(",")
                    .map((v) => v.trim())
                    .includes(value)
                    ? "bg-[var(--color-ftomain)] text-white"
                    : "bg-gray-100 text-textdesc hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="importantOfMeet"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Hal yang penting buat kamu saat ketemu orang baru?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsImportantOfMeet.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.importantOfMeet || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ importantOfMeet: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ importantOfMeet: updated });
                  }

                  if (errors.importantOfMeet) {
                    setErrors((prev) => ({ ...prev, importantOfMeet: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.importantOfMeet
                    ?.split(",")
                    .map((v) => v.trim())
                    .includes(value)
                    ? "bg-[var(--color-ftomain)] text-white"
                    : "bg-gray-100 text-textdesc hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="boundariesTest"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Ada boundaries atau hal yang ingin kami perhatikan?
        </label>
        <textarea
          id="boundariesTest"
          name="boundariesTest"
          value={formData.boundariesTest}
          onChange={handleInputChange}
          placeholder="Tolong ceritakan boundary atau hal yang ingin kami perhatikan saat berinteraksi dengan kamu."
          rows="3"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)] text-[var(--color-textplaceholder)]  resize-none ${
            errors.boundariesTest ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.boundariesTest && (
          <p className="text-red-500 text-xs mt-1 ">{errors.boundariesTest}</p>
        )}
      </div>

      <div className="flex gap-4 pt-6">
        <button
          onClick={validateAndNext}
          className="flex-1 bg-[var(--color-ftomain)] text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] "
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
