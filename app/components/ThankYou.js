"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThankYou() {
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
            <h2 className="text-lg font-bold text-textmain mb-2 ">
              Terima kasih sudah sampai di titik ini.
            </h2>

            <p className="text-sm text-textdesc mb-4">
              Form ini bukan soal benar atau salah. Ini tentang kejujuran kamu
              pada diri sendiri, tentang apa yang kamu cari, dan apa yang ingin
              kamu bangun ke depan.
            </p>

            <p className="text-sm text-textdesc mb-3">
              Kami akan membaca setiap jawaban dengan penuh perhatian.
            </p>

            <p className="text-sm text-textdesc mb-3">
              Jika kami merasa kamu cocok dengan proses yang kami jalani, kami
              akan menghubungi kamu secara personal.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] p-4 bg-gradient-to-t from-white via-white to-transparent">
          <button
            className="w-full bg-[var(--color-ftomain)] text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] "
            onClick={() => router.push("/")}
          >
            Tutup Halaman Ini
          </button>
        </div>

        {/* Bottom Padding for Fixed Button */}
        <div className="h-24" />
      </div>
    </div>
  );
}
