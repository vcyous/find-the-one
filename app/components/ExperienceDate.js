"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ExperienceDate() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] relative">
        {/* Main Content */}
        <div className="px-4 py-6">
          {/* Hero Image Card */}
          <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-md">
            <Image
              src="/images/bg.png"
              alt="Find The One"
              loading="eager"
              className="w-full h-full object-cover"
              width={500}
              height={200}
              style={{ height: "auto" }}
            />
          </div>

          {/* Info Card */}
          <div>
            <h2 className="text-lg font-bold text-textmain mb-2">
              Find The One - Experienced Date
            </h2>

            <p className="text-sm text-textdesc mb-4">
              For those who are tired of trying to find something real in
              moments that aren&apos;t ready.
            </p>

            <div className="w-full h-px bg-gray-300 my-4" />

            <p className="text-sm text-textdesc mb-3">
              Ini bukan dating app. Dan ini juga bukan event yang maksa kenal
              banyak orang. Experience Date ini dibuat untuk kamu yang:
            </p>

            <ul className="space-y-2 mb-4 ml-4">
              <li className="text-sm text-textdesc list-disc">
                Capek sama obrolan kosong,
              </li>
              <li className="text-sm text-textdesc list-disc">
                Males ngulang cerita hidup dari nol,
              </li>
              <li className="text-sm text-textdesc list-disc">
                Tapi masih mau ketemu orang secara real & dewasa.
              </li>
            </ul>

            <p className="text-sm text-textdesc mb-4">
              Form ini kami buat bukan buat nge-judge. Tapi buat kenal kamu
              lebih jujur gimana cara kamu mikir, mencintai, dan melihat
              hubungan. Nggak ada jawaban benar atau salah disini.
            </p>

            <p className="text-sm text-textdesc mb-4">
              Kalau kamu lagi main-main, mungkin ini bukan tempatnya. Kalo kamu
              udah capek keliatan kuat dan pengen kenal orang tanpa topeng.
            </p>

            <p className="text-sm font-semibold text-textmain">
              You&apos;re in the right place.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] p-4 bg-gradient-to-t from-white via-white to-transparent">
          <button
            className="w-full bg-[var(--color-ftomain)] text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] "
            onClick={() => router.push("/stepper")}
          >
            Let&apos;s Start
          </button>
        </div>

        {/* Bottom Padding for Fixed Button */}
        <div className="h-24" />
      </div>
    </div>
  );
}
