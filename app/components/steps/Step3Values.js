"use client";

import { useState } from "react";

export default function Step3Values({ formData, updateFormData, onNext }) {
  const optionsRelationshipNeeds = [
    "Ditemani",
    "Dipahamin",
    "Ditenangkan",
    "Diajak tumbuh bareng",
    "Ada kejelasan arah",
  ];

  const optionsFindConflict = [
    "Diam dulu sambil mikir",
    "Ngomong Langsung",
    "Butuh waktu sebelum ngomong",
    "Mendem sendiri aja",
  ];

  const optionsConflictReasons = [
    "Niat ngga jelas",
    "Komunikasi buruk",
    "Ngga konsisten",
    "Terlalu ngontrol",
    "Tidak ngehargai batasan",
  ];

  const optionsDeciderTest = [
    "Ngomong jujur dengan cara baik",
    "Bilang pelan-pelan",
    "Butuh bantuan untuk disampaikan",
  ];

  const [errors, setErrors] = useState({});

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

    if (!formData.seriousRelationshipPOV?.trim())
      newErrors.seriousRelationshipPOV =
        "Tolong jelaskan arti 'serius' buat kamu sekarang";
    if (!formData.toleranceTest?.trim())
      newErrors.toleranceTest =
        "Tolong isi tentang hal-hal yang gak bisa kamu toleransi dalam hubungan";
    if (!formData.healthyRelationship?.trim())
      newErrors.healthyRelationship =
        "Tolong jelaskan menurutmu relationship yang sehat itu seperti apa";

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
            htmlFor="relationshipNeeds"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Dalam relationship, kamu lebih butuh?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsRelationshipNeeds.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.relationshipNeeds || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ relationshipNeeds: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ relationshipNeeds: updated });
                  }

                  if (errors.relationshipNeeds) {
                    setErrors((prev) => ({ ...prev, relationshipNeeds: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.relationshipNeeds
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
            htmlFor="seriousRelationshipPOV"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Apa arti “serius” buat kamu sekarang?
          </label>
          <textarea
            id="seriousRelationshipPOV"
            name="seriousRelationshipPOV"
            value={formData.seriousRelationshipPOV}
            onChange={handleInputChange}
            placeholder="Apa hal yang benar-benar tidak bisa kamu toleransi dalam sebuah hubungan? Perilaku atau nilai apa yang tidak sesuai denganmu?"
            rows="3"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)] text-[var(--color-textplaceholder)]  resize-none ${
              errors.seriousRelationshipPOV
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.seriousRelationshipPOV && (
            <p className="text-red-500 text-xs mt-1 ">
              {errors.seriousRelationshipPOV}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="findConflict"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Saat ada konflik kecil, kamu biasanya?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsFindConflict.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.findConflict || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ findConflict: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ findConflict: updated });
                  }

                  if (errors.findConflict) {
                    setErrors((prev) => ({ ...prev, findConflict: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.findConflict
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
            htmlFor="conflictReasons"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Hal apa yang paling bikin kamu mundur dari seseorang?
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {optionsConflictReasons.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  const currentValues = formData.conflictReasons || "";
                  const valuesArray = currentValues
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean);

                  if (valuesArray.includes(value)) {
                    const updated = valuesArray
                      .filter((v) => v !== value)
                      .join(", ");
                    updateFormData({ conflictReasons: updated });
                  } else {
                    const updated = [...valuesArray, value].join(", ");
                    updateFormData({ conflictReasons: updated });
                  }

                  if (errors.conflictReasons) {
                    setErrors((prev) => ({ ...prev, conflictReasons: "" }));
                  }
                }}
                className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                  formData.conflictReasons
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
            htmlFor="toleranceTest"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Dalam hubungan, 3 hal yang paling gak bisa kamu toleransi?
          </label>
          <textarea
            id="toleranceTest"
            name="toleranceTest"
            value={formData.toleranceTest}
            onChange={handleInputChange}
            placeholder="Dalam hubungan, 3 hal yang paling gak bisa kamu toleransi?"
            rows="3"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)] text-[var(--color-textplaceholder)]  resize-none ${
              errors.toleranceTest ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.toleranceTest && (
            <p className="text-red-500 text-xs mt-1 ">{errors.toleranceTest}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="healthyRelationship"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Menurutmu, relationship yang sehat itu seperti apa?
          </label>
          <textarea
            id="healthyRelationship"
            name="healthyRelationship"
            value={formData.healthyRelationship}
            onChange={handleInputChange}
            placeholder="Menurutmu, relationship yang sehat itu seperti apa?"
            rows="3"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)] text-[var(--color-textplaceholder)]  resize-none ${
              errors.healthyRelationship ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.healthyRelationship && (
            <p className="text-red-500 text-xs mt-1 ">
              {errors.healthyRelationship}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="deciderTest"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Kalo abis date ini kamu ngerasa “gak klik”, kamu milih apa?
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {optionsDeciderTest.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                const currentValues = formData.deciderTest || "";
                const valuesArray = currentValues
                  .split(",")
                  .map((v) => v.trim())
                  .filter(Boolean);

                if (valuesArray.includes(value)) {
                  const updated = valuesArray
                    .filter((v) => v !== value)
                    .join(", ");
                  updateFormData({ deciderTest: updated });
                } else {
                  const updated = [...valuesArray, value].join(", ");
                  updateFormData({ deciderTest: updated });
                }

                if (errors.deciderTest) {
                  setErrors((prev) => ({ ...prev, deciderTest: "" }));
                }
              }}
              className={`px-4 py-2 rounded-full  text-sm font-medium transition-all duration-200 ${
                formData.deciderTest
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
          htmlFor="preparationTest"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Seberapa siap kamu untuk membuka diri ke orang baru sekarang? 1 =
          masih takut sampai 5 = siap tapi tetap hati-hati
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => {
                updateFormData({ preparationTest: rating });
              }}
              className={`px-6 py-3 rounded-full  text-sm font-medium transition-all duration-200 ${
                formData.preparationTest === rating
                  ? "bg-[var(--color-ftomain)] text-white"
                  : "bg-gray-100 text-textdesc hover:bg-gray-200"
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
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
