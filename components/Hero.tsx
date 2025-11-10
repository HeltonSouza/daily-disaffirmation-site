import Link from "next/link";

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
          href="#download"
          className="bg-black text-white px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 transition duration-300"
        >
          Download
        </Link>
      </div>
    </section>
  );
}
