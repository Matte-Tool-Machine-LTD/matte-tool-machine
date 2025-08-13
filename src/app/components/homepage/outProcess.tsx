import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
    {
        title: 'Planning and Quotes',
        description: (
            <>
                <strong>Consultation:</strong> We start by listening to your needs and project goals. Our team works with you to understand every detail.<br />
                <strong>Quotes:</strong> Once we have your requirements, we provide clear, competitive quotes—no surprises, just honest pricing.
            </>
        ),
    },
    {
        title: 'Machining your parts',
        description: (
            <>
                <strong>Precision Machining:</strong> Our skilled machinists use state-of-the-art equipment to craft your parts to exact specifications.<br />
                <strong>Testing & Inspection:</strong> Every part is thoroughly tested and inspected to ensure it meets our high standards and your expectations.
            </>
        ),
    },
    {
        title: 'Delivery',
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
        <section className="py-8 bg-white">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-5xl mx-auto">
                {processSteps.map((step) => (
                    <div key={step.title} className="flex-1 min-w-[250px]">
                        <h3 className="border-b-2 border-blue-600 pb-2 mb-4 text-xl font-semibold text-gray-800">
                            {step.title}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <div className="mt-1 text-gray-700">{step.description}</div>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
