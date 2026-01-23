"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Step5Survey({ formData, updateFormData, onSubmit }) {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    updateFormData({ [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateAndSubmit = async () => {
    const newErrors = {};

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await onSubmit();
    setIsSubmitting(false);

    router.push("/thankyou");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Reference 1 */}
        <div>
          <label
            htmlFor="reference1"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Experience Date ini bersifat private & curated. (Dengan Biaya
            partisipasi: Rp200.000 – Rp300.000) Apakah kamu bersedia berkomitmen
            jika terpilih?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="ref1-option1"
                name="reference1"
                value="Iya, aku siap"
                checked={formData.reference1 === "Iya, aku siap"}
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref1-option1"
                className="ml-2 text-sm text-textdesc"
              >
                Iya, aku siap
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="ref1-option2"
                name="reference1"
                value="Penasaran, tapi aku masih ingin tahu detail dulu"
                checked={
                  formData.reference1 ===
                  "Penasaran, tapi aku masih ingin tahu detail dulu"
                }
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref1-option2"
                className="ml-2 text-sm text-textdesc"
              >
                Penasaran, tapi aku masih ingin tahu detail dulu
              </label>
            </div>
          </div>
        </div>

        {/* Reference 2 */}
        <div>
          <label
            htmlFor="reference2"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Apakah kamu bersedia jika momen Experience Date didokumentasikan
            untuk kebutuhan konten?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="ref2-option1"
                name="reference2"
                value="Iya, saya bersedia menampilkan wajah, dengan persetujuan sebelumnya"
                checked={
                  formData.reference2 ===
                  "Iya, saya bersedia menampilkan wajah, dengan persetujuan sebelumnya"
                }
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref2-option1"
                className="ml-2 text-sm text-textdesc"
              >
                Ya, saya bersedia menampilkan wajah, dengan persetujuan
                sebelumnya
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="ref2-option2"
                name="reference2"
                value="Ya, saya bersedia tanpa menampilkan wajah secara jelas (blur / angle tertentu)"
                checked={
                  formData.reference2 ===
                  "Ya, saya bersedia tanpa menampilkan wajah secara jelas (blur / angle tertentu)"
                }
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref2-option2"
                className="ml-2 text-sm  text-textdesc"
              >
                Ya, saya bersedia tanpa menampilkan wajah secara jelas (blur /
                angle tertentu)
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="ref2-option3"
                name="reference2"
                value="Tidak, Saya tidak bersedia didokumentasikan"
                checked={
                  formData.reference2 ===
                  "Tidak, Saya tidak bersedia didokumentasikan"
                }
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref2-option3"
                className="ml-2 text-sm  text-textdesc"
              >
                Tidak, Saya tidak bersedia didokumentasikan
              </label>
            </div>
          </div>
        </div>

        {/* Reference 3 */}
        <div>
          <label
            htmlFor="reference3"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Kalau setelah experience ini kamu ngerasa “nggak cocok”, kamu nyaman
            untuk bilang jujur?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="ref3-option1"
                name="reference3"
                value="Iya, aku siap"
                checked={formData.reference3 === "Iya, aku siap"}
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref3-option1"
                className="ml-2 text-sm  text-textdesc"
              >
                Iya, aku siap
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="ref3-option2"
                name="reference3"
                value="Iya, tapi butuh dibantu caranya"
                checked={
                  formData.reference3 === "Iya, tapi butuh dibantu caranya"
                }
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="ref3-option2"
                className="ml-2 text-sm  text-textdesc"
              >
                Iya, tapi butuh dibantu caranya
              </label>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="instagram"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleInputChange}
            placeholder="Masukkan nama kamu"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] ${
              errors.instagram ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.instagram && (
            <p className="text-red-500 text-xs mt-1 ">{errors.instagram}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            WhatsApp
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            placeholder="Masukkan nama kamu"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ftomain)]  text-[var(--color-textplaceholder)] ${
              errors.whatsapp ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs mt-1 ">{errors.whatsapp}</p>
          )}
        </div>

        {/* Source */}
        <div>
          <label
            htmlFor="source"
            className="block text-sm font-semibold text-textdesc mb-2 "
          >
            Kamu tahu Experience Date ini dari mana?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="source-option1"
                name="source"
                value="Tiktok"
                checked={formData.source === "Tiktok"}
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="source-option1"
                className="ml-2 text-sm  text-textdesc"
              >
                Tiktok
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="source-option2"
                name="source"
                value="Instagram"
                checked={formData.source === "Instagram"}
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="source-option2"
                className="ml-2 text-sm  text-textdesc"
              >
                Instagram
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="source-option3"
                name="source"
                value="Threads"
                checked={formData.source === "Threads"}
                onChange={handleInputChange}
                className="w-4 h-4 focus:ring-[var(--color-ftomain)]"
              />
              <label
                htmlFor="source-option3"
                className="ml-2 text-sm  text-textdesc"
              >
                Threads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <button
          onClick={validateAndSubmit}
          disabled={isSubmitting}
          className="flex-1 bg-[var(--color-ftomain)] text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sedang Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}
