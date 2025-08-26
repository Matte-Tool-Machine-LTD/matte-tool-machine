"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide precision machining for a wide range of industries",
    },
    {
        question: "What are your business hours?",
        answer: "Our shop is open Monday to Friday, 7:30am to 4pm.",
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
        answer: "We work with a variety of materials including steel, stainless steel, aluminum, brass, plastics, and more. View our services page for more details",
    },
    {
        question: "Where are you located?",
        answer: "We are located in Concord near Highway 7 and Jane just off the 400 and 407. Visit our Contact page for our address and directions.",
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
                    src="../MTM Outside.png"
                    alt="About Us"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <p className="mb-4 text-lg">
                Matte Tool & Machine is a family-run business with over 55 years of experience in the machining industry. Founded by Bill Matte, our company has built a reputation for quality craftsmanship, reliability, and personal service. Bill’s dedication and expertise laid the foundation for our commitment to excellence, and today, the Matte family continues to uphold these values in every project we undertake.
            </p>
            <p className="mb-4 text-lg">
                Our current President Bruce Matte has over 30 years of experience in the machining industry, and our team of skilled professionals includes experts with decades of experience in precision machining.
            </p>
            <hr className="my-8 border-t border-gray-300" />
            <FAQAccordion />
        </main>
    );
}