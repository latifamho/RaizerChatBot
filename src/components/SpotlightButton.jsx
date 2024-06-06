import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
    return (
        <div className="flex  items-center justify-center bg-transparent  px-4">
            <SpotlightButton />
        </div>
    );
};

const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { width } = e.target.getBoundingClientRect();
            const offset = e.offsetX;
            const left = `${(offset / width) * 100}%`;

            spanRef.current.animate(
                { left },
                { duration: 250, fill: "forwards" }
            );
        };

        const handleMouseLeave = () => {
            spanRef.current.animate(
                { left: "50%" },
                { duration: 100, fill: "forwards" }
            );
        };

        btnRef?.current?.addEventListener("mousemove", handleMouseMove);
        btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
            btnRef?.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, []);

    return (
        <motion.button
            whileTap={{ scale: 0.985 }}
            ref={btnRef}
            className="relative w-full max-w-xs overflow-hidden  bg-transparent  group   text-white
            font-thin  md:text-[20px] text-[12px] py-3  md:px-16 px-10 border-3xl border-first border-2 rounded-full
            "
        >
            <span className="pointer-events-none relative z-10 mix-blend-difference text-second">
                Get Started
            </span>
            <span
                ref={spanRef}
                className="pointer-events-none transition-all absolute left-[50%] top-[50%] w-0 h-0 group-hover:h-32 group-hover:w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-first"
            />
        </motion.button>
    );
};

export default ButtonWrapper;
