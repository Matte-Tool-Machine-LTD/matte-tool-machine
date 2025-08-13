"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { title } from 'process';

const images = [
    {
        src: 'Manifolds.jfif',
        title: 'Manifolds',
        alt: 'Manifolds',
        description: 'Some of the manifolds we do for hydraulic systems.',
    },
    {
        src: 'Gears.jfif',
        title: 'Gears',
        alt: 'Gears',
        description: 'Gears that display some of our thread turning and broaching capabilities.',
    },
    {
        src: 'Camera.jfif',
        title: 'Camera Housing',
        alt: 'Camera Housing',
        description: 'Some camera housings made with a mix of lathe work and live tooling',
    }
    // Add more images as needed
];

export default function Gallery() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="bg-white py-8">
            <div>
                <h2 className="text-4xl font-bold my-8 text-center">Some samples of our work</h2>
            </div>
            <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={img.src}
                            className="relative cursor-pointer group"
                            onClick={() => setSelected(idx)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                                <span className="text-white text-lg font-semibold px-3 py-1 bg-black/60 rounded">
                                    {img.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
                <DialogContent className="w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl p-0 rounded-xl shadow-2xl">
                    {selected !== null && (
                    <div className="relative">
                        <img
                        src={images[selected].src}
                        alt={images[selected].alt}
                        className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain block bg-white"
                        />
                        <div className="absolute bottom-0 w-full bg-white/70 text-gray-900 px-4 py-3 backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                            <DialogTitle className="text-xl sm:text-xl m-0">
                            {images[selected].title}
                            </DialogTitle>
                            <DialogDescription className="text-lg sm:text-lg m-0">
                            {images[selected].description}
                            </DialogDescription>
                        </div>
                        </div>
                        <DialogClose />
                    </div>
                    )}
                </DialogContent>
                </Dialog>
            </div>
            <div className="my-8 flex justify-center">
                <a href="/gallery">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold shadow transition-colors transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105"
                    >
                        View more of our work
                        <span className="ml-2">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}
