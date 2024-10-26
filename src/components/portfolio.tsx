"use client"
import { projects } from "@/data";
import React, { useEffect, useId, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";
import { SkeletonThree } from "./ui/skeleton";
import { IconSignature } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ModalDetail } from "./modal-detail";



const Portfolio = () => {

    const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
        null
    );

    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }
        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (<section id="portfolio" className="py-20 min-h-screen">
        <h1 className="heading">
            My<span className="text-purple"> Portfolio</span>
        </h1>
        <ModalDetail id={id} setActive={setActive} data={active} />


        <div className="flex flex-col items-center justify-center max-lg:mt-10 py-10">
            <Tabs defaultValue="all" className="w-full ">
                <TabsList className="flex text-center justify-center bg-transparent">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="project">Project</TabsTrigger>
                    <TabsTrigger value="course">Course</TabsTrigger>
                    <TabsTrigger value="others">Others</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="">
                    <BentoGrid className="max-w-10xl mx-auto md:auto-rows-[20rem]">
                        {projects.map((item, i) => (
                            <BentoGridItem
                                item={item}
                                setActive={setActive}
                                id={id}
                                key={i}
                                title={item.title}
                                className={cn("[&>p:text-lg]", "md:col-span-1")}
                                icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
                                header={<SkeletonThree img={item.img[0]} />}
                            />
                        ))}
                    </BentoGrid>
                </TabsContent>
                <TabsContent value="project">
                    <BentoGrid className="max-w-10xl mx-auto md:auto-rows-[20rem]">
                        {projects.map((item, i) => (
                            item.type === "project" &&
                            <BentoGridItem
                                item={item}
                                setActive={setActive}
                                id={id}
                                key={i}
                                title={item.title}
                                className={cn("[&>p:text-lg]", "md:col-span-1")}
                                icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
                                header={<SkeletonThree img={item.img[0]} />}
                            />
                        ))}
                    </BentoGrid>
                </TabsContent>
                <TabsContent value="course">
                    <BentoGrid className="max-w-10xl mx-auto md:auto-rows-[20rem]">
                        {projects.map((item, i) => (
                            item.type === "course" &&
                            <BentoGridItem
                                item={item}
                                setActive={setActive}
                                id={id}
                                key={i}
                                title={item.title}
                                className={cn("[&>p:text-lg]", "md:col-span-1")}
                                icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
                                header={<SkeletonThree img={item.img[0]} />}
                            />
                        ))}
                    </BentoGrid>
                </TabsContent>
                <TabsContent value="others">
                    <BentoGrid className="max-w-10xl mx-auto md:auto-rows-[20rem]">
                        {projects.map((item, i) => (
                            item.type === "others" &&
                            <BentoGridItem
                                item={item}
                                setActive={setActive}
                                id={id}
                                key={i}
                                title={item.title}
                                className={cn("[&>p:text-lg]", "md:col-span-1")}
                                icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
                                header={<SkeletonThree img={item.img[0]} />}
                            />
                        ))}
                    </BentoGrid>
                </TabsContent>
            </Tabs>
        </div>


    </section >);


}

export default Portfolio;