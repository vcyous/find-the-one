"use client";

import { useState } from "react";

export default function Step2About({ formData, updateFormData, onNext }) {
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

    if (!formData.pastRelationship?.trim())
      newErrors.pastRelationship =
        "Tolong isi hal paling melelahkan dari pengalaman dating kamu sebelumnya";
    if (!formData.relationshipProblem?.trim())
      newErrors.relationshipProblem =
        "Tolong ceritakan tentang masalah hubungan kamu sebelumnya";

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
            htmlFor="conditionTest"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Saat ini, kamu datang ke relationship dengan kondisi seperti apa?
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="conditionTest"
                value="Hati cukup utuh, siap kenal orang baru"
                checked={formData.conditionTest?.includes(
                  "Hati cukup utuh, siap kenal orang baru"
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  const current = formData.conditionTest || [];
                  updateFormData({
                    conditionTest: e.target.checked
                      ? [...current, value]
                      : current.filter((v) => v !== value),
                  });
                }}
                className="w-4 h-4 border-gray-300 rounded focus:ring-[var(--color-ftomain)]"
              />
              <span className="text-sm text-textdesc ">
                Hati cukup utuh, siap kenal orang baru
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="conditionTest"
                value="Masih ada luka, tapi sudah belajar"
                checked={formData.conditionTest?.includes(
                  "Masih ada luka, tapi sudah belajar"
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  const current = formData.conditionTest || [];
                  updateFormData({
                    conditionTest: e.target.checked
                      ? [...current, value]
                      : current.filter((v) => v !== value),
                  });
                }}
                className="w-4 h-4 border-gray-300 rounded focus:ring-[var(--color-ftomain)]"
              />
              <span className="text-sm text-textdesc ">
                Masih ada luka, tapi sudah belajar
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="conditionTest"
                value="Masih ragu, tapi pengen jujur & mau coba buka hati"
                checked={formData.conditionTest?.includes(
                  "Masih ragu, tapi pengen jujur & mau coba buka hati"
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  const current = formData.conditionTest || [];
                  updateFormData({
                    conditionTest: e.target.checked
                      ? [...current, value]
                      : current.filter((v) => v !== value),
                  });
                }}
                className="w-4 h-4 border-gray-300 rounded focus:ring-[var(--color-ftomain)]"
              />
              <span className="text-sm text-textdesc ">
                Masih ragu, tapi pengen jujur & mau coba buka hati
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="conditionTest"
                value="Jujur aja, lagi capek tapi pengen nyoba lagi"
                checked={formData.conditionTest?.includes(
                  "Jujur aja, lagi capek tapi pengen nyoba lagi"
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  const current = formData.conditionTest || [];
                  updateFormData({
                    conditionTest: e.target.checked
                      ? [...current, value]
                      : current.filter((v) => v !== value),
                  });
                }}
                className="w-4 h-4 border-gray-300 rounded focus:ring-[var(--color-ftomain)]"
              />
              <span className="text-sm text-textdesc ">
                Jujur aja, lagi capek tapi pengen nyoba lagi
              </span>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="pastRelationship"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Hal paling melelahkan dari pengalaman dating kamu sebelumnya apa?
          </label>
          <textarea
            id="pastRelationship"
            name="pastRelationship"
            value={formData.pastRelationship}
            onChange={handleInputChange}
            placeholder="Ceritakan hal yang paling membuatmu lelah atau frustasi dari pengalaman kencan atau hubungan sebelumnya."
            rows="3"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] resize-none ${
              errors.pastRelationship ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.pastRelationship && (
            <p className="text-red-500 text-xs mt-1 ">
              {errors.pastRelationship}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="relationshipProblem"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Kalau boleh jujur, hal apa dari diri kamu yang dulu sering jadi
            masalah di relationship?
          </label>
          <textarea
            id="relationshipProblem"
            name="relationshipProblem"
            value={formData.relationshipProblem}
            onChange={handleInputChange}
            placeholder="Tolong ceritakan tentang masalah hubungan kamu sebelumnya."
            rows="3"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] resize-none ${
              errors.relationshipProblem ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.relationshipProblem && (
            <p className="text-red-500 text-xs mt-1 ">
              {errors.relationshipProblem}
            </p>
          )}
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
