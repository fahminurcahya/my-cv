"use client";

import { ImagesSlider } from "./ui/image-slider";
import { motion } from "framer-motion";

const ImagePortfolio = () => {
    const images = [
        "/exp1.svg",
        "/exp2.svg",
        "/exp3.svg",
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >

            </motion.div>
        </ImagesSlider>
    )
}

export default ImagePortfolio;