import Image from "next/image";
import EEALOGO from "@/assets/EEA.webp";

export default function Loader() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="h-32 w-32 rounded-full bg-white p-4 shadow-lg flex items-center justify-center animate-pulse transition-all ease-out">
        <div className="relative h-24 w-24">
          <Image
            src={EEALOGO}
            alt="EEA Logo"
            className="object-contain"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </main>
  );
}
