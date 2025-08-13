import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const gallerySections = [
    {
        title: "Milling",
        images: [
            "/images/milling1.jpg",
            "/images/milling2.jpg",
            "/images/milling3.jpg",
        ],
    },
    {
        title: "Lathe Work",
        images: [
            "/images/lathe1.jpg",
            "/images/lathe2.jpg",
            "/images/lathe3.jpg",
        ],
    },
    {
        title: "Brass/Bronze",
        images: [
            "/images/brass1.jpg",
            "/images/bronze1.jpg",
            "/images/brass2.jpg",
        ],
    },
    {
        title: "Castings",
        images: [
            "/images/casting1.jpg",
            "/images/casting2.jpg",
            "/images/casting3.jpg",
        ],
    },
    {
        title: "Coatings",
        images: [
            "/images/coating1.jpg",
            "/images/coating2.jpg",
            "/images/coating3.jpg",
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
                                    {section.images.map((src, idx) => (
                                        <div key={idx} className="rounded-lg overflow-hidden shadow">
                                            <img
                                                src={src}
                                                alt={`${section.title} ${idx + 1}`}
                                                className="w-full h-48 object-cover transition-transform hover:scale-105"
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
