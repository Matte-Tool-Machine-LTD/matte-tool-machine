import HomeCard from "./components/homepage/homeCard";
import AboutUs from "./components/homepage/aboutUs";
import OurProcess from "./components/homepage/outProcess";
import Gallery from "./components/homepage/gallery";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row min-h-[90vh] items-center justify-center px-4 pb-4 pt-2 md:p-4 relative">
        {/* Background image */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25 md:bg-[position:60%_center]"
          style={{ backgroundImage: "url('/mtm_machine_shop.JPG')" }}
        />
        {/* Left Side: Text and Placeholder for Image */}
        <section className="flex-1 max-w-xl md:mr-8 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Vaughan's Premiere Machine Shop
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
        At Matte Tool and Machine, we have spent over 50 years perfecting the art of precision machining. Our state-of-the-art facility in Concord, Ontario is equipped with the latest technology to deliver high-quality components for a wide range of industries.
          </p>
        </section>
        {/* Right Side: Quote Request Card */}
        <div className="w-full max-w-md">
          <HomeCard />
        </div>
        
      </main>
      <AboutUs />
      <OurProcess />
      <Gallery />
    </>
  );
}
