"use client"
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFileDownload, FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { socialMedia, profile, skills } from '@/data';
import BasicTimeline from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";

const Cv = ({ isGenerate }: { isGenerate?: boolean }) => {
    const [isLoading, setIsLoading] = useState(false);

    const downloadPDF = async () => {
        setIsLoading(true);
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
         <style>
            p {
            line-height: 7.5; /* Improve readability */
            }
          </style>
        </head>
          <body>
            ${document.getElementById("pdf-content")?.innerHTML}
          </body>
        </html>
      `;
        try {
            // const response = await fetch("/api/generate-pdf", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ htmlContent }),
            // });

            // if (response.ok) {
            //     const blob = await response.blob();
            //     const url = window.URL.createObjectURL(blob);
            //     const a = document.createElement("a");
            //     a.href = url;
            //     a.download = "generated-document.pdf";
            //     a.click();
            //     window.URL.revokeObjectURL(url);
            // } else {
            //     console.error("Failed to generate PDF");
            // }

            const response = await fetch('/CV_FAHMI_NURCAHYA.pdf');
            if (!response.ok) {
                throw new Error('Failed to fetch PDF');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV_FAHMI_NURCAHYA.pdf';
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className={cn(
                "flex flex-col md:flex-row min-h-screen md:max-w-[210mm] mx-auto bg-white",
                {
                    "md:min-h-[594mm]": isGenerate
                }
            )}
            id="pdf-content"
        >
            <aside className="w-full md:w-1/3 bg-gray-800 text-white p-8">
                <div className="text-center">
                    <Image
                        src="/profile.jpg"
                        alt="Profile"
                        width={96}
                        height={96}
                        className="rounded-full mx-auto"
                    />
                    <h1 className="text-2xl font-semibold mt-4">{profile.name}</h1>
                    <p className="text-sm text-gray-400">{profile.title}</p>
                    {!isGenerate && (
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded inline-flex items-center"
                            id="download-button"
                            onClick={downloadPDF}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <FaFileDownload className="mr-2" /> Download PDF
                                </>
                            )}
                        </button>
                    )}
                </div>

                <div className="mt-8 space-y-2 text-gray-300 text-sm">
                    <div className="flex items-center">
                        <FiMapPin />
                        <span className="ml-2">{profile.map}</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <CiMail />
                        <span className="ml-2">{profile.mail}</span>
                    </div>
                    <div className="flex items-center">
                        <FaWhatsapp />
                        <span className="ml-2">{profile.whatsapp}</span>
                    </div>

                    {/* <button className="px-4 py-2 bg-green-600 rounded mt-4 inline-flex items-center"><FaWhatsapp className="mr-2" />
                        Whatsapp Me</button> */}
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold text-white">Profile</h2>
                    <p className="text-gray-300 mt-2">
                        {profile.bio}
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold text-white">Social</h2>
                    <div className="flex flex-col mt-2 space-y-2">
                        {socialMedia.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                                <item.icn size={16} />
                                <span className="ml-2">{item.username}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={isGenerate ? "mt-24 pt-10" : "mt-8"}>
                    <h2 className="text-lg font-semibold text-white">Skills</h2>
                    <div className="mt-2">
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold text-gray-400">Frontend</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm">
                                {skills.webApps.frontend.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold text-gray-400">Backend</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm">
                                {skills.webApps.backend.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold text-gray-400">Others</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm">
                                {skills.webApps.others.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {isGenerate && (
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-white">Portfolio</h2>
                        <div className="mt-1">
                            <a href={process.env.NEXT_PUBLIC_BASE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                                <TbWorld className="text-blue-400" />
                                <span className="ml-2 italic underline text-blue-400">{process.env.NEXT_PUBLIC_BASE_URL}</span>
                            </a>
                        </div>
                    </div>
                )}

            </aside>

            <main className="w-full md:w-3/4 bg-gray-100 p-8">
                <section className="mb-8">
                    <h2 className="text-xl font-bold  text-gray-800">Experience</h2>
                    <div >
                        <BasicTimeline section="experienced" isGenerate={isGenerate} />
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold  text-gray-800">Education</h2>
                    <ul >
                        <BasicTimeline />
                    </ul>
                </section>

                {!isGenerate && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-1 text-gray-800">Portfolio</h2>
                        <Link href="/" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 w-full text-center">
                            Go to my portfolio
                        </Link>
                    </section>
                )}
            </main>
        </div>
    );
}

export default Cv;
