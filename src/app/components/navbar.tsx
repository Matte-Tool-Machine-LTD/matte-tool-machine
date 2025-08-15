"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import HomeCard from "./homepage/homeCard";

const Navbar: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const navLinks = [
        { href: "/services", label: "Services" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-20 py-4 bg-white/90 border-b border-gray-200 shadow-xl">
            <Link href="/" className="flex items-center min-w-[120px] h-10 cursor-pointer">
                <img src="/mtm_logo.png" alt="Company Logo" className="h-[150%]" />
                <h2 className="ml-2 text-2xl font-semibold whitespace-nowrap">Matte Tool & Machine LTD.</h2>
            </Link>
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
                {navLinks.map((link) => (
                    <li key={link.href} className="text-xl">
                        <Link
                            href={link.href}
                            className="text-gray-800 transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-4"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <Dialog open={openModal} onOpenChange={setOpenModal}>
                        <DialogTrigger asChild>
                            <Button
                                variant="default"
                                className="ml-4"
                                onClick={() => setOpenModal(true)}
                            >
                                Request a Quote
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg flex justify-center items-center">
                            <div className="w-full flex justify-center items-center">
                                <HomeCard />
                            </div>
                        </DialogContent>
                    </Dialog>
                </li>
            </ul>
            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu className="w-7 h-7" />
                        </Button>
                    </SheetTrigger>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetContent side="right" className="w-64 p-0">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center px-4 py-4 border-b">
                                <img src="/mtm_logo.png" alt="Company Logo" className="h-8" />
                                <span className="ml-2 text-lg font-semibold">Matte Tool & Machine LTD.</span>
                            </div>
                            <ul className="flex flex-col gap-4 px-6 py-8">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block text-lg text-gray-800 transition-colors duration-200 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-4"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Dialog open={openModal} onOpenChange={setOpenModal}>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="default"
                                                className="w-full mt-4"
                                                onClick={() => setOpenModal(true)}
                                            >
                                                Request a Quote
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-lg p-0 flex flex-col" style={{ maxHeight: '80vh' }}>
                                            {/* Add extra space for the close "x" */}
                                            <div className="flex justify-end p-4">
                                                {/* The close button is handled by DialogContent, so just add padding */}
                                            </div>
                                            <div className="overflow-y-auto px-4 pb-4" style={{ maxHeight: '60vh' }}>
                                                <HomeCard />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </li>
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navbar;