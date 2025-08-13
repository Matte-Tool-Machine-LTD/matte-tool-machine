import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Services() {
    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-primary">
                Our Services
            </h1>
            <section className="mb-10">
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-bold text-secondary">Capabilities</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">
                            With the latest equipment, from <span className="font-semibold">2 - 6 axis CNC turning & milling</span>, Matte Tool & Machine can handle all your machining needs. Our advanced machinery ensures precision, flexibility, and efficiency for projects of any scale.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Multi-axis CNC turning & milling (2-6 axis)</li>
                            <li>Prototype & production runs</li>
                            <li>Complex geometries & tight tolerances</li>
                            <li>Custom tooling & fixturing</li>
                            <li>Assembly & finishing services</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <section className="mb-10 grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold text-secondary">Materials We Work With</h2>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Aluminum (6061 T6, 6511)</li>
                            <li>Brass (C360, Naval)</li>
                            <li>Bronze</li>
                            <li>Carbon & Alloy Steel (4140)</li>
                            <li>Hot Rolled Steel (C1018, C1045)</li>
                            <li>Stainless Steel (316, 303, 430)</li>
                            <li>Nylon & Polymers</li>
                            <li>Other specialty alloys (on request)</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold text-secondary">Services Provided</h2>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Timely quotes & project consultation</li>
                            <li>Efficient customer service</li>
                            <li>Prompt delivery & logistics support</li>
                            <li>Inspection Sheets (upon request)</li>
                            <li>PPAP documentation (upon request)</li>
                            <li>Material & Finish certificates (upon request)</li>
                            <li>Quality assurance & traceability</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <section className="mb-10">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold text-secondary">Industries & Clients</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">
                            We proudly serve a diverse range of industries and clients, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Automotive manufacturers & suppliers</li>
                            <li>Aerospace & defense contractors</li>
                            <li>Medical device companies</li>
                            <li>Industrial equipment OEMs</li>
                            <li>Local businesses & startups</li>
                            <li>Custom projects for inventors & engineers</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">
                            Some of our clients include: <span className="font-semibold">ABC Automotive, SkyTech Aerospace, MedPro Devices, and more.</span>
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold text-secondary">Sample Work</h2>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Precision machined engine components</li>
                            <li>Custom brackets & housings</li>
                            <li>High-tolerance medical parts</li>
                            <li>Prototype assemblies for R&D</li>
                            <li>Complex multi-axis turned parts</li>
                            <li>Custom fixtures & tooling</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">
                            <span className="font-semibold">Contact us</span> for a portfolio or to discuss your specific project needs!
                        </p>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
