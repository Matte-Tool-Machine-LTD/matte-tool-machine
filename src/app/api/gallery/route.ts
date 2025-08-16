import { NextResponse } from "next/server";

export async function GET() {
    const CLOUD_NAME = "df1sxi2yf";
    const API_KEY = process.env.CLOUDINARY_API_KEY;
    const API_SECRET = process.env.CLOUDINARY_API_SECRET;
    const FOLDER = "MTM-Website/upload";

    console.log("API_KEY:", API_KEY);
    console.log("API_SECRET:", API_SECRET ? "Present" : "Missing");
    console.log("FOLDER:", FOLDER);

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?type=upload&prefix=${FOLDER}/&max_results=50`;
    console.log("Fetch URL:", url);

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
    console.log("Auth header:", `Basic ${auth}`);

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        console.log("Fetch status:", res.status);

        const data = await res.json();
        console.log("Response data:", data);

        return NextResponse.json(data.resources || []);
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json([]);
    }
}