"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export const SkeletonThree = ({ img }: { img: string }) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
        >
            <Image
                src={img}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
            />
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};