// app/api/generate-pdf/route.ts
import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { content } = await req.json();

        // Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();

        if (content) {
            await page.setContent(content); // Set custom HTML content
        } else {
            await page.goto(`${process.env.NEXT_PUBLIC_BASE_URL}/cv?generate=true`, {
                waitUntil: "networkidle2",
            }); // Replace with actual page URL if needed
        }

        // Generate the PDF
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
        });

        await browser.close();

        // Send PDF as response
        return new NextResponse(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=generated-document.pdf",
            },
        });
    } catch (error) {
        console.error("Error generating PDF:", error);
        return new NextResponse("Failed to generate PDF", { status: 500 });
    }
}
