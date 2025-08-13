import React from 'react';

const PlanningIcon = () => (
    <svg className="text-blue-600 mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2" />
        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const MachiningIcon = () => (
    <svg className="text-blue-600 mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="6" width="2" height="6" fill="currentColor" />
        <rect x="11" y="12" width="2" height="6" fill="currentColor" />
        <rect x="6" y="11" width="6" height="2" fill="currentColor" />
        <rect x="12" y="11" width="6" height="2" fill="currentColor" />
    </svg>
);

const DeliveryIcon = () => (
    <svg className="text-blue-600 mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="16" y="10" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor" />
        <circle cx="17.5" cy="18.5" r="1.5" fill="currentColor" />
    </svg>
);

const processSteps = [
    {
        title: 'Planning and Quotes',
        icon: <PlanningIcon />,
        description: (
            <>
                <strong>Consultation:</strong> We start by listening to your needs and project goals. Our team works with you to understand every detail.<br />
                <strong>Quotes:</strong> Once we have your requirements, we provide clear, competitive quotes—no surprises, just honest pricing.
            </>
        ),
    },
    {
        title: 'Machining your parts',
        icon: <MachiningIcon />,
        description: (
            <>
                <strong>Precision Machining:</strong> Our skilled machinists use state-of-the-art equipment to craft your parts to exact specifications.<br />
                <strong>Testing & Inspection:</strong> Every part is thoroughly tested and inspected to ensure it meets our high standards and your expectations.
            </>
        ),
    },
    {
        title: 'Delivery',
        icon: <DeliveryIcon />,
        description: (
            <>
                <strong>Coating & Finishing:</strong> We apply the right coatings and finishes for durability and appearance.<br />
                <strong>On-Time Delivery:</strong> Your completed parts are carefully packaged and delivered promptly, ready for use.
            </>
        ),
    },
];

export default function OurProcess() {
    return (
        <section className="py-8 bg-white relative">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90 z-0"
                style={{ backgroundImage: "url('/grinding.JPG')" }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4 text-white justify-center text-center">
                    A deep dive into our process
                </h1>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch max-w-5xl mx-auto p-8 bg-gray-50/80 rounded-lg shadow-sm">
                    {processSteps.map((step) => (
                        <div
                            key={step.title}
                            className="flex-1 min-w-[250px] p-5 mb-4 md:mb-0"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {step.icon}
                                <h3 className="border-b-2 border-blue-600 pb-2 text-lg md:text-xl font-semibold text-gray-800 m-0">
                                    {step.title}
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                <li>
                                    <div className="mt-1 text-gray-700 text-sm md:text-base">
                                        {step.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
