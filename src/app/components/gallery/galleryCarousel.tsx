"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Replace with your Cloudinary folder and API key

type MediaItem = {
    public_id: string;
    format: string;
    secure_url: string;
    resource_type: "image" | "video";
};

const getMediaUrl = (item: MediaItem) => item.secure_url;

export default function GalleryCarousel() {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [hoverSide, setHoverSide] = useState<"left"|"right"|null>(null);
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: currentIdx,
        slideChanged(s) {
            setCurrentIdx(s.track.details.rel);
        },
        mode: "free",
        rubberband: true,
        loop: true,
    });

    useEffect(() => {
        async function fetchMedia() {
            setLoading(true);
            try {
                const res = await fetch("/api/gallery");
                const data = await res.json();
                setMedia(data);
            } catch {
                setMedia([]);
            } finally {
                setLoading(false);
            }
        }
        fetchMedia();
    }, []);

    const handlePrev = () => slider.current?.prev();
    const handleNext = () => slider.current?.next();

    if (loading) {
        return (
            <div className="text-center py-8 flex justify-center items-center">
            <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            </div>
        );
    }

    if (!media.length) {
        return <div className="text-center py-8">No media found.</div>;
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2">
                {/* Hide arrows on mobile unless modal is open */}
                {!modalOpen && (
                    <div className="hidden sm:block">
                        <Button variant="ghost" onClick={handlePrev} size="icon">
                            <ChevronLeft />
                        </Button>
                    </div>
                )}
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
                            {media[currentIdx].resource_type === "image" ? (
                                <Image
                                    src={getMediaUrl(media[currentIdx])}
                                    alt={media[currentIdx].public_id}
                                    width={400}
                                    height={300}
                                    className="rounded shadow h-64 w-auto object-cover cursor-pointer"
                                    loading="lazy"
                                />
                            ) : (
                                <video
                                    src={getMediaUrl(media[currentIdx])}
                                    controls
                                    className="h-64 w-auto rounded shadow cursor-pointer"
                                />
                            )}
                        </div>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-screen-2xl max-h-[90vh] flex flex-col items-center p-4">
                        <DialogTitle className="w-full text-center mb-2"></DialogTitle>
                        <div ref={sliderRef} className="keen-slider w-full h-full max-h-[70vh]">
                            {media.map((item, idx) => (
                                <div key={item.public_id} className="keen-slider__slide flex justify-center items-center">
                                    {item.resource_type === "image" ? (
                                        <Image
                                            src={getMediaUrl(item)}
                                            alt={item.public_id}
                                            width={1600}
                                            height={1200}
                                            className="rounded-lg shadow-lg max-h-[70vh] max-w-[1800px] w-full object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <video
                                            src={getMediaUrl(item)}
                                            controls
                                            className="rounded-lg shadow-lg max-h-[70vh] max-w-[1800px] w-full object-contain"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between w-full mt-4">
                            <div className="hidden sm:block">
                                <Button variant="ghost" onClick={handlePrev} size="icon">
                                    <ChevronLeft />
                                </Button>
                            </div>
                            <div className="hidden sm:block">
                                <Button variant="ghost" onClick={handleNext} size="icon">
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                {!modalOpen && (
                    <div className="hidden sm:block">
                        <Button variant="ghost" onClick={handleNext} size="icon">
                            <ChevronRight />
                        </Button>
                    </div>
                )}
            </div>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {media.map((item, idx) => (
                    <div
                        key={item.public_id}
                        className={`cursor-pointer border rounded p-1 ${idx === currentIdx ? "border-primary" : "border-transparent"}`}
                        onClick={() => setCurrentIdx(idx)}
                    >
                        {item.resource_type === "image" ? (
                            <Image
                                src={getMediaUrl(item)}
                                alt={item.public_id}
                                width={64}
                                height={64}
                                className="h-16 w-16 object-cover rounded"
                            />
                        ) : (
                            <video
                                src={getMediaUrl(item)}
                                className="h-16 w-16 object-cover rounded"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}