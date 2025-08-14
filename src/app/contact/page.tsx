export default function Contact() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
      backgroundImage: "url('../contact_us.JPG')",
      }}
    >
      {/* Overlay for increased opacity */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl p-8 relative z-10 gap-4 md:gap-8">
          {/* Left Side: Contact Info & Location */}
          <div className="md:w-1/2 md:pr-4 mb-4 flex flex-col">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
              <div className="mb-2">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:info@matte.com" className="text-blue-600 underline">
                    info@matte.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Fax:</span> (905) 123-4567
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> (905) 987-6543
                </p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Location:</p>
                <p>111 Buttermill Ave, Concord, ON, Canada</p>
              </div>
            </div>
            
          </div>
        {/* Right Side: Home Card */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=111+Buttermill+Ave,+Concord,+ON,+Canada&output=embed"
                width="400"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
