import React from "react";

const aboutItems = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Delivery Truck Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4285F4"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
            </svg>
        ),
        title: "Delivery",
        description: "Fast and reliable delivery to your doorstep."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Timeliness (Schedule) Icon */}
                <path d="M12 8v5l4.28 2.54.72-1.21-3.5-2.08V8h-1.5zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#34A853"/>
            </svg>
        ),
        title: "Timeliness",
        description: "We value your time and always deliver on schedule."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Precision (Tune) Icon */}
                <path d="M7 7V3h2v4h3V3h2v4h3V3h2v4h1v2h-1v3h1v2h-1v3h1v2h-1v4h-2v-4h-3v4h-2v-4H9v4H7v-4H6v-2h1v-3H6v-2h1V7H6V5h1V3h2v4h3V3h2v4h3V3h2v4h1v2h-1v3h1v2h-1v3h1v2h-1v4h-2v-4h-3v4h-2v-4H9v4H7v-4H6v-2h1v-3H6v-2h1V7z" fill="#FBBC05"/>
            </svg>
        ),
        title: "Precision",
        description: "Attention to detail ensures top quality results."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Customer Service (Support Agent) Icon */}
                <path d="M12 2C6.48 2 2 6.48 2 12v2c0 2.21 1.79 4 4 4h1v-2H6c-1.1 0-2-.9-2-2v-2c0-4.42 3.58-8 8-8s8 3.58 8 8v2c0 1.1-.9 2-2 2h-1v2h1c2.21 0 4-1.79 4-4v-2c0-5.52-4.48-10-10-10zm-1 17h2v-2h-2v2zm1-15c-4.97 0-9 4.03-9 9v2c0 2.76 2.24 5 5 5h1v-2H6c-1.1 0-2-.9-2-2v-2c0-4.42 3.58-8 8-8s8 3.58 8 8v2c0 1.1-.9 2-2 2h-1v2h1c2.76 0 5-2.24 5-5v-2c0-4.97-4.03-9-9-9z" fill="#EA4335"/>
                <circle cx="12" cy="14" r="2" fill="#EA4335"/>
            </svg>
        ),
        title: "Customer Service",
        description: "Friendly support and clear communication every step of the way."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Competitive Quotes (Attach Money) Icon */}
                <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm1 17.93c-3.95-.49-7.07-3.85-7.07-7.93 0-4.08 3.12-7.44 7.07-7.93V5h2v2h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2v2h-2v2h2v2h-2v-2.07z" fill="#34A853"/>
                <text x="8" y="16" fontSize="8" fill="#34A853" fontFamily="Arial">$</text>
            </svg>
        ),
        title: "Competitive Quotes",
        description: "Get fair, transparent pricing for every project."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                {/* Google Material Thorough Inspections (Search) Icon */}
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285F4"/>
            </svg>
        ),
        title: "Thorough Inspections",
        description: "Rigorous checks guarantee your parts meet specifications."
    }
];

const AboutUs: React.FC = () => (
    <section className="py-8 px-4 bg-gray-50">
        <h2 className="text-center my-12 text-3xl md:text-4xl font-bold">
            High Precision Machine Shop Focused on your needs
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis sapien sapien nec velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center w-full">
                {/* Responsive grid for all items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-2 md:px-12 lg:px-24">
                    {aboutItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-6 min-w-[220px] h-[260px] flex flex-col items-center text-center transition hover:shadow-lg"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="mb-2 text-lg md:text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;