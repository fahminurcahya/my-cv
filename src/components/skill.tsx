import { skills, } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving";
import React from "react";
import { Button } from "./ui/moving-border";

const Skill = () => {
    return (<section id="skills" className="py-20">
        <h1 className="heading">
            My<span className="text-purple"> Skills</span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
            <div
                className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-8"
            >
                <InfiniteMovingCards
                    items={skills.webApps.frontend}
                    direction="right"
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={skills.webApps.backend}
                    direction="left"
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={skills.webApps.others}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>


    </section >);
}

export default Skill;