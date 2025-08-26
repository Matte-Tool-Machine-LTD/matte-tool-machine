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
          className="fixed inset-0 -z-10 bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/mtm_machine_shop.JPG')", backgroundPosition: "5px center", backgroundSize: "120% auto" }}
        />
        {/* Vignette overlays */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 10%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.85) 90%, rgba(255,255,255,1) 100%)"
            }}
          />
        </div>
        {/* Left Side: Text and Placeholder for Image */}
        <section className="flex-1 max-w-xl md:mr-8 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
  Vaughan&apos;s Premiere Machine Shop
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
        At Matte Tool and Machine, we have spent over 50 years perfecting the art of precision machining. Our state-of-the-art facility in Concord, Ontario is equipped with the latest technology to deliver high-quality components for a wide range of industries.
          </p>
        </section>
        {/* Right Side: Quote Request Card */}
        <div className="w-full max-w-md">
          
          <HomeCard>
            <h2 className="text-2xl font-semibold mb-2">Request a quote with us</h2>
          </HomeCard>

        </div>
        
      </main>
      <AboutUs />
      <OurProcess />
      <Gallery />
    </>
  );
}
