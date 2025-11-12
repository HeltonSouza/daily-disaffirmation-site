import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
        Daily Disaffirmation
      </h1>
      <p className="text-xl text-gray-600 mb-12 font-light">
        Dry Humor Quotes to Keep You Humbly Motivated.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="#"
          className="download-button bg-black text-white px-5 py-2 rounded-md text-base flex items-center space-x-2 transition-colors duration-200"
        >
          <FaApple className="text-2xl" />
          <span>App Store</span>
        </Link>
        <Link
          href="#"
          className="download-button bg-black text-white px-5 py-2 rounded-md text-base flex items-center space-x-2 transition-colors duration-200"
        >
          <FaGooglePlay className="text-2xl" />
          <span>Google Play</span>
        </Link>

      </div>
    </section>
  );
}
