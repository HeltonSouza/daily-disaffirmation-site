import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download: React.FC = () => (
  <section id="download" className="container mx-auto py-24 px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 order-1 p-4 flex justify-center md:justify-start items-center">
        <Image
          src="/products/phone1.png"
          alt="Financial app interface"
          width={500}
          height={500}
          className="w-1/2 h-auto mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 flex justify-center md:justify-end">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Download our app, or not
          </h2>
          <p className="text-xl text-gray-800 mb-6 font-light">
            It is truly up to you, we can't make you do anything anyway.
          </p>
          <div className="flex space-x-4">
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
        </div>
      </div>
    </div>
  </section>
);

export default Download;
