import { NavLink } from "react-router-dom";

// components
import FadeIn from "../components/FadeIn";
import AnimatedImage from "../components/AnimatedImage ";
import ButtonWrapper from "../components/SpotlightButton";

const Welcome = () => {
    return (
        <div className=" w-full h-[100vh] bg-black  text-white font-poppins relative overflow-hidden ! ">
            <AnimatedImage />
            <div className=" p-[10px] flex flex-col justify-center text-center items-center h-full  relative z-10">
                <FadeIn delay={0.3} direction="up" padding fullWidth>
                    <h1 className=" leading-relaxed font-bold md:leading-relaxed tracking-widest md:text-[96px] text-[40px] lg:leading-relaxed">
                        AI-Powered
                        <br />
                        Productivity.
                    </h1>
                </FadeIn>
                <FadeIn delay={0.6} direction="up" padding fullWidth>
                    <p className=" leading-loose   md:text-[20px] text-[15px]  font-thin capitalize mb-8   ">
                        AI-powered tools in one to supercharge your team
                        productivity. <br />
                        With Taskade, all your work is in sync in one unified
                        workspace.
                    </p>{" "}
                </FadeIn>
                <FadeIn delay={0.9} direction="up" padding fullWidth>
                    <NavLink to="/login">
                        <ButtonWrapper />
                    </NavLink>
                </FadeIn>
            </div>
        </div>
    );
};

export default Welcome;
