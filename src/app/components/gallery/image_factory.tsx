import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Shadcn utility for classnames

type MediaType = "image" | "video";

interface MediaFactoryProps {
    type: string; // Changed from MediaType to string to avoid type issues
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
    if (type === "image") {
        return (
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className={cn("rounded-lg shadow-md", className)}
                priority
            />
        );
    }

    if (type === "video") {
        return (
            <video
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