"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide precision machining, fabrication, and repair services for a wide range of industries.",
    },
    {
        question: "What are your business hours?",
        answer: "Our shop is open Monday to Friday, 8am to 5pm.",
    },
    {
        question: "Do you work with custom projects?",
        answer: "Yes, we specialize in custom machining solutions tailored to your needs.",
    },
    {
        question: "How can I request a quote?",
        answer: "You can request a quote by contacting us via phone, email, or through our website’s contact form.",
    },
    {
        question: "What materials do you work with?",
        answer: "We work with a variety of materials including steel, aluminum, brass, plastics, and more.",
    },
    {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we offer emergency repair services. Please contact us directly for urgent requests.",
    },
    {
        question: "Where are you located?",
        answer: "We are located in the heart of the community. Visit our Contact page for our address and directions.",
    },
];

function FAQAccordion() {
    return (
        <div className="mt-8">
            <h2 className="text-4xl font-semibold mb-2">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border-b">
                        <AccordionTrigger className="py-2 text-left text-3xl">{faq.question}</AccordionTrigger>
                        <AccordionContent className="py-2 text-gray-700 text-xl">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default function About() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="mb-4 overflow-hidden h-[40%] relative" style={{ height: "320px" }}>
                <img
                    src="../mtm_machine_shop.JPG"
                    alt="About Us"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <p className="mb-4 text-lg">
                Matte Tool & Machine is a family-run business with over 55 years of experience in the machining industry. Founded by Bill Matte, our company has built a reputation for quality craftsmanship, reliability, and personal service. Bill’s dedication and expertise laid the foundation for our commitment to excellence, and today, the Matte family continues to uphold these values in every project we undertake.
            </p>
            <p className="mb-4 text-lg">
                From our humble beginnings to becoming a trusted name in the community, we take pride in our legacy and look forward to serving our customers for generations to come.
            </p>
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Our Founder</h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Image
                        src="https://res.cloudinary.com/df1sxi2yf/image/upload/v1755284043/MTM-Website/20250814_150603_r32yb6.jpg"
                        alt="Manifolds"
                        width={400}
                        height={300}
                        loading="lazy" // explicitly lazy load
                        className="rounded-xl"
                        />
                    <p className="text-lg">
                        Reny Santos, our legendary founder, has spent over 5 millennia across 6 galaxies battling the machining deities to achieve godhood. His unmatched skill and cosmic dedication have shaped our company’s ethos, inspiring generations to pursue excellence beyond the stars.
                    </p>
                </div>
            </section>
            <hr className="my-8 border-t border-gray-300" />
            <FAQAccordion />
        </main>
    );
}