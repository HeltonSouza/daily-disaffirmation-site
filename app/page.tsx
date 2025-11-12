import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[rgba(255,247,220,1)]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Why negativity… works?
              </h2>
              <p className="text-xl font-light">
                Toxic positivity had its run.
              </p>
              <p className="text-xl font-light">
                The Daily Disaffirmation App flips the script with a single deadpan 
                quote each morning just enough sarcasm to make you smirk and just enough truth to make you move.
                With taste.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
        <Customers />
        {/* <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Highlight the key features
              </h2>
              <p className="text-xl font-light">
                Talk about some of the key features of your app that you want to highlight. Use the beautiful accordion
                to highlight the key features of your app.
              </p>
            </div>
          }
        /> */}
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
