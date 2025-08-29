"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type MediaType = "image" | "video";

interface MediaFactoryProps {
    type: string;
    src: string;
    alt?: string;
    className?: string;
}

export const MediaFactory: React.FC<MediaFactoryProps> = ({
    type,
    src,
    alt = "",
    className,
}) => {
    const [open, setOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (type === "video" && videoRef.current) {
            videoRef.current.volume = 0.25;
        }
    }, [type, src]);

    if (type === "image") {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={300}
                        className={cn("rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105", className)}
                        onClick={() => setOpen(true)}
                    />
                </DialogTrigger>
                <DialogContent className="flex justify-center items-center bg-white p-0">
                    <DialogTitle className="sr-only">{alt}</DialogTitle>
                    <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={900}
                        className="rounded-lg shadow-lg max-h-[80vh] w-auto object-contain"
                    />
                </DialogContent>
            </Dialog>
        );
    }

    if (type === "video") {
        return (
            <video
                ref={videoRef}
                src={src}
                controls
                className={cn("rounded-lg shadow-md", className)}
                width={800}
                height={600}
            >
                Your browser does not support the video tag.
            </video>
        );
    }

    return null;
};