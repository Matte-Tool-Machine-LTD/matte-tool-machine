"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


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

    useEffect(() => {
        async function fetchMedia() {
            setLoading(true);
            try {
                const res = await fetch("/api/gallery");
                const data = await res.json();
                setMedia(data);
            } catch (err) {
                setMedia([]);
            } finally {
                setLoading(false);
            }
        }
        fetchMedia();
    }, []);

    const handlePrev = () => setCurrentIdx((idx) => (idx > 0 ? idx - 1 : media.length - 1));
    const handleNext = () => setCurrentIdx((idx) => (idx < media.length - 1 ? idx + 1 : 0));

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
                <Button variant="ghost" onClick={handlePrev} size="icon">
                    <ChevronLeft />
                </Button>
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    <DialogTrigger asChild>
                        <div
                            className="cursor-pointer"
                            onClick={() => setModalOpen(true)}
                        >
                            {media[currentIdx].resource_type === "image" ? (
                                <Image
                                    src={getMediaUrl(media[currentIdx])}
                                    alt={media[currentIdx].public_id}
                                    width={400}
                                    height={256}
                                    className="rounded shadow h-64 w-auto object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <video
                                    src={getMediaUrl(media[currentIdx])}
                                    controls
                                    className="h-64 w-auto rounded shadow"
                                />
                            )}
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl flex flex-col items-center">
                        <DialogTitle className="w-full text-center mb-2"></DialogTitle>
                        <div className="relative flex justify-center items-center w-full" style={{ minHeight: "70vh" }}>
                            {/* Left clickable area (outer 25%) */}
                            <div
                                className="absolute left-0 top-0 h-full" 
                                style={{ width: "25%", cursor: "pointer", zIndex: 10 }}
                                onClick={handlePrev}
                                onMouseEnter={() => setHoverSide("left")}
                                onMouseLeave={() => setHoverSide(null)}
                            >
                                {hoverSide === "left" && (
                                    <div
                                        className="h-full w-full"
                                        style={{
                                            background: "linear-gradient(to right, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
                                            transition: "background 0.3s"
                                        }}
                                    />
                                )}
                            </div>
                            {/* Right clickable area (outer 25%) */}
                            <div
                                className="absolute right-0 top-0 h-full"
                                style={{ width: "25%", cursor: "pointer", zIndex: 10 }}
                                onClick={handleNext}
                                onMouseEnter={() => setHoverSide("right")}
                                onMouseLeave={() => setHoverSide(null)}
                            >
                                {hoverSide === "right" && (
                                    <div
                                        className="h-full w-full"
                                        style={{
                                            background: "linear-gradient(to left, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
                                            transition: "background 0.3s"
                                        }}
                                    />
                                )}
                            </div>
                            <div className="flex justify-center w-full">
                                {media[currentIdx].resource_type === "image" ? (
                                    <Image
                                        src={getMediaUrl(media[currentIdx])}
                                        alt={media[currentIdx].public_id}
                                        width={800}
                                        height={600}
                                        className="max-h-[70vh] w-auto rounded shadow object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <video
                                        src={getMediaUrl(media[currentIdx])}
                                        controls
                                        className="max-h-[70vh] w-auto rounded shadow"
                                    />
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Button variant="ghost" onClick={handleNext} size="icon">
                    <ChevronRight />
                </Button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {media.map((item, idx) => (
                    <div
                        key={item.public_id}
                        className={`cursor-pointer border rounded p-1 ${idx === currentIdx ? "border-primary" : "border-transparent"}`}
                        onClick={() => setCurrentIdx(idx)}
                    >
                        {item.resource_type === "image" ? (
                            <img
                                src={getMediaUrl(item)}
                                alt=""
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