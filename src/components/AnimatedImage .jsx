import { motion } from "framer-motion";

const AnimatedImage = () => {
    return (
        <motion.img
            src="assests/gradiant.png"
            alt=""
            className="h-full w-full absolute"
            animate={{
                scale: [1, 0.7, 1],
                rotate: [0, 360],
            }}
            transition={{
                duration: 13,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    );
};

export default AnimatedImage;
