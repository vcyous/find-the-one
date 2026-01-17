"use client";

import { useState } from "react";

export default function Step1Intro({ formData, updateFormData, onNext }) {
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

    if (!formData.nickName?.trim())
      newErrors.nickName = "Tolong isi nama panggilan";
    if (!formData.age?.trim()) newErrors.age = "Tolong isi usia kamu";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Tolong pilih status pernikahan kamu";
    if (!formData.backStory?.trim())
      newErrors.backStory = "Tolong ceritakan sedikit tentang dirimu";
    if (!formData.yourPhase?.trim())
      newErrors.yourPhase = "Tolong jelaskan fase hidup kamu saat ini";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="space-y-6">
      {/* Nickname */}
      <div>
        <label
          htmlFor="nickName"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Nama Panggilan
        </label>
        <input
          type="text"
          id="nickName"
          name="nickName"
          value={formData.nickName}
          onChange={handleInputChange}
          placeholder="Masukkan nama kamu"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)] text-[var(--color-textplaceholder)] ${
            errors.nickName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.nickName && (
          <p className="text-red-500 text-xs mt-1 ">{errors.nickName}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Usia kamu berapa?
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Masukkan usia kamu"
          min="18"
          max="100"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] ${
            errors.age ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.age && (
          <p className="text-red-500 text-xs mt-1 ">{errors.age}</p>
        )}
      </div>

      {/* Marital Status */}
      <div>
        <label
          htmlFor="maritalStatus"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Status kamu saat ini?
        </label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="single"
              name="maritalStatus"
              value="Single"
              checked={formData.maritalStatus === "Single"}
              onChange={handleInputChange}
              className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
            />
            <label htmlFor="single" className="ml-2 text-sm  text-textdesc">
              Single
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="married"
              name="maritalStatus"
              value="Pernah Menikah"
              checked={formData.maritalStatus === "Pernah Menikah"}
              onChange={handleInputChange}
              className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
            />
            <label htmlFor="married" className="ml-2 text-sm  text-textdesc">
              Pernah Menikah
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              name="maritalStatus"
              value="Other"
              checked={formData.maritalStatus === "Other"}
              onChange={handleInputChange}
              className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
            />
            <label htmlFor="other" className="ml-2 text-sm  text-textdesc">
              Other
            </label>
          </div>
        </div>
        {formData.maritalStatus === "Other" && (
          <input
            type="text"
            id="maritalStatusOther"
            name="maritalStatusOther"
            value={formData.maritalStatusOther || ""}
            onChange={handleInputChange}
            placeholder="Tolong jelaskan"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] mt-2"
          />
        )}
        {errors.maritalStatus && (
          <p className="text-red-500 text-xs mt-1 ">{errors.maritalStatus}</p>
        )}
      </div>

      {/* Back Story */}
      <div>
        <label
          htmlFor="backStory"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Ceritakan sedikit tentang kamu (bebas, santai aja)
        </label>
        <textarea
          id="backStory"
          name="backStory"
          value={formData.backStory || ""}
          onChange={handleInputChange}
          placeholder="Kerja apa, tinggal dimana, suka ngapain..."
          rows="4"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] resize-none ${
            errors.backStory ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.backStory && (
          <p className="text-red-500 text-xs mt-1 ">{errors.backStory}</p>
        )}
      </div>

      {/* Your Phase */}
      <div>
        <label
          htmlFor="yourPhase"
          className="block text-sm font-semibold text-textdesc mb-2 "
        >
          Ceritain tentang fase hidup kamu saat ini
        </label>
        <textarea
          id="yourPhase"
          name="yourPhase"
          value={formData.yourPhase || ""}
          onChange={handleInputChange}
          placeholder="Cerita disini ya..."
          rows="4"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] resize-none ${
            errors.yourPhase ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.yourPhase && (
          <p className="text-red-500 text-xs mt-1 ">{errors.yourPhase}</p>
        )}
      </div>

      <button
        onClick={() => {
          validateAndNext();
        }}
        className="w-full bg-[var(--color-ftomain)] text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] "
      >
        Selanjutnya
      </button>
    </div>
  );
}
