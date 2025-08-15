import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaFactory } from "../components/gallery/image_factory";

const gallerySections = [
    {
        title: "Milling",
        media: [
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755279942/MTM-Website/IMG_1304_pnfkqe.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755280466/MTM-Website/kitamura_lwhcps.jpg",
            },
            {
                type: "video",
                src: "https://res.cloudinary.com/df1sxi2yf/video/upload/v1755284484/MTM-Website/20250815_100442_zoay1p.mp4",
            },
        ],
    },
    {
        title: "Lathes",
        media: [
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180025/MTM-Website/dual_spindle_tvkj5g.jpg",
            },
            {
                type: "video",
                src: "https://res.cloudinary.com/df1sxi2yf/video/upload/v1755280191/MTM-Website/IMG_1325_yvsgy7.mov",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Camera_rbxrko.jpg",
            },
        ],
    },
    {
        title: "Brass/Bronze",
        media: [
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
        ],
    },
    {
        title: "Castings",
        media: [
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
        ],
    },
    {
        title: "Coatings",
        media: [
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/df1sxi2yf/image/upload/v1755180023/MTM-Website/Manifolds_l0y5pd.jpg",
            },
        ],
    },
];

export default function Gallery() {
    return (
        <main className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
            <p className="mb-12 text-center text-lg text-muted-foreground">
                Explore our work across different machining and finishing processes.
            </p>
            <div className="space-y-12">
                {gallerySections.map((section) => (
                    <section key={section.title}>
                        <Card className="mb-4">
                            <CardHeader>
                                <CardTitle className="text-2xl">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {section.media.map((mediaItem, idx) => (
                                        <div key={idx} className="rounded-lg overflow-hidden shadow">
                                            <MediaFactory
                                                type={mediaItem.type}
                                                src={mediaItem.src}
                                                alt={`${section.title} media ${idx + 1}`}
                                                className="w-full h-[300px] object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                ))}
            </div>
        </main>
    );
}
