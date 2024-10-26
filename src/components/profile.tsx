"use client"
import Image from "next/image";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generator";
import { FaLocationArrow } from "react-icons/fa6";
import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";


const Profile = () => {
    const links = [
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    return <div className="pb-20 pt-20">
        <div>
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
            className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
     absolute top-0 left-0 flex items-center justify-center"
        >
            <div
                className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <Image src={"/profile.jpg"} alt="img" width={200} height={200}
                    style={{
                        objectFit: "cover",
                        borderRadius: "100px",
                    }} />


                <TextGenerateEffect
                    words="Hi! I&apos;m Fahmi Nurcahya, a Software Engineer based in Indonesia"
                    className="text-center text-[30px] md:text-4xl lg:text-5xl"
                />

                {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi! I&apos;m Fahmi Nurcahya, a Software Engineer based in Indonesia.
                </p> */}

                <div className="flex items-center justify-center w-full">
                    <FloatingDock
                        mobileClassName="translate-y-20" // only for demo, remove for production
                        items={links}
                    />
                </div>

                <a href="/cv">
                    <MagicButton
                        title="Download My CV"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
        </div>
    </div>;
}

export default Profile;

