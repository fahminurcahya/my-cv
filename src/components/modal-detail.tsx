"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Project, projects } from "@/data";
import { ImagesSlider } from "./ui/image-slider";
import { cn } from "@/lib/utils";

export function ModalDetail({ id, setActive, data }: {
    id: string,
    setActive: React.Dispatch<React.SetStateAction<(typeof projects)[number] | boolean | null>>;
    data: Project | boolean | null
}) {

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {data && typeof data === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {data && typeof data === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${data.id}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[120]"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${data.id}-${id}`}
                            ref={ref}
                            className="w-full max-w-4xl h-full md:h-fit md:max-h-[95%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden pb-4"
                        >
                            <motion.div layoutId={`image-${data.title}-${id}`}>
                                <ImagesSlider className={cn(data.type == "others" ? "h-[350px] sm:h-[550px] md:h-[600px] " : "h-52 sm:h-72 md:h-96", "object - cover object - top")} images={data.img}
                                >
                                    <motion.div>

                                    </motion.div>
                                </ImagesSlider>

                            </motion.div>

                            <div className=" overflow-y-auto w-full">
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h2
                                            layoutId={`title-${data.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {data.title}
                                        </motion.h2>
                                        <motion.p
                                            layoutId={`description-${data.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {data.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    {data.type != "others" &&
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start  overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                        >
                                            <ul>
                                                <li><strong>Category  : </strong>{data.category}</li>
                                                <li><strong>Client : </strong>{data.client}</li>
                                                <li><strong>Project year : </strong>{data.year}</li>
                                                <li><strong>Project URL : </strong> {data.url ? <a href={data.url} target="_blank" rel="noopener noreferrer"> {data.url} </a> : ' - '} </li>
                                                <li><strong>Technology : </strong>{data.technology}</li>
                                                <li><strong>Features : </strong>
                                                    <ul>
                                                        {data.features.map((feature) => (
                                                            <li>
                                                                - {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </motion.div>
                                    }

                                </div>
                            </div>
                        </motion.div>
                    </div >
                ) : null
                }
            </AnimatePresence >

        </>
    );

}

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

