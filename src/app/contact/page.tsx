"use client"
import { useEffect, useState } from "react";

function getOpenStatus() {
  // Get current time in EST (America/New_York)
  const now = new Date();
  // Convert to EST
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const estOffset = -5; // EST is UTC-5
  const estDate = new Date(utc + 3600000 * estOffset);
  const day = estDate.getDay(); // 0=Sun, 1=Mon, ...
  const hour = estDate.getHours();
  const minute = estDate.getMinutes();
  // Open Mon-Fri, 7:30am-4pm
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && ((hour > 7 || (hour === 7 && minute >= 30)) && (hour < 16));
  return isOpen;
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(getOpenStatus());
    const interval = setInterval(() => setIsOpen(getOpenStatus()), 60000);
    return () => clearInterval(interval);
  }, []);
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
            {/* LinkedIn Icon and Link */}
            <div className="my-4 flex items-center gap-2">
              <a href="https://www.linkedin.com/company/matte-tool-&-machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
              <p>
              
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:mattetool@bellnet.ca" className="text-blue-600 underline">
                  mattetool@bellnet.ca
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (905) 669-2797
              </p>
              <p>
                <span className="font-semibold my-4">Fax:</span> (905) 669-0797
              </p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Location:</p>
              <p>111 Buttermill Ave, Concord, ON, Canada</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Business Hours:</p>
              <p>Mon-Fri: 7:30am - 4:00pm (EST)</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded font-semibold text-white ${isOpen ? "bg-green-600" : "bg-red-600"}`}>
                {isOpen ? "Open" : "Closed"}
              </span>
            </div>
            
          </div>
        </div>
        {/* Right Side: Home Card */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Matte+Tool+&+Machine+Ltd+111+Buttermill+Ave.,+Concord,+ON+L4K+3X5&output=embed&z=13"
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
