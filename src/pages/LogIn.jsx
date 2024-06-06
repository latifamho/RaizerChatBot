import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

// utility functions
import { validateForm } from "../utils/validation";

import { toast } from "react-toastify";

//component
import Button from "../components/button";
import {
    getEmailCookie,
    getPasswordCookie,
    setIdCookie,
} from "../utils/cookie";
import { ID } from "appwrite";

const LogIn = () => {
    // to navigate between pages
    const router = useNavigate();

    //necessary states
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(loading);
    }, [loading]);
    const logIn = async (e) => {
        // to prevent the default behavior
        e.preventDefault();

        setLoading(true);

        // check if there is any errors about validation
        const validationErrors = validateForm({
            email,
            password,
        });
        setErrors(validationErrors);
        // check if there is any errors about validation
        if (validationErrors.email === "" && validationErrors.password === "") {
            setLoading(true);

            const emailCookie = getEmailCookie();
            const passwordCookie = getPasswordCookie();

            if (email === emailCookie && String(passwordCookie) === password) {
                setLoading(true);

                setTimeout(() => {
                    toast.success("Logged in Successfully!");
                }, 1000);
                setLoading(false);
                setTimeout(() => {
                    router("/chat/dashboard", { path: true });
                }, 2500);
            } else {
                toast.error("Please Check Your Email Or Password");
                setLoading(false);
            }
        } else {
            toast.error("Please Check Your Email Or Password");
            setLoading(false);
        }
    };
    const chat = () => {
        setIdCookie(ID.unique());
        setTimeout(() => {
            toast.success("Welcome!");
            router("/chat/dashboard", { path: true });
        }, 1000);
    };
    return (
        <div className=" bg-black w-full h-[100vh]  flex flex-col gap-3  text-center justify-center items-center ">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:w-[700px] w-[90%] mx-auto h-[80%]  rounded-[28px] overflow-hidden flex items-center justify-center  relative"
            >
                <div className=" gradient-bg absolute w-[240%] h-[240%]  z-[9]" />
                <div className=" text-white calc bg-black    flex  flex-col justify-center rounded-[28px]   items-center text-center  gap-[2rem] relative z-10">
                    <div>
                        {" "}
                        <div className=" flex items-center  justify-center m-[1rem]">
                            {" "}
                            <img
                                src="/assests/logo.png"
                                alt="logo"
                                className="md:w-[228px]  w-[20rem] "
                            />
                        </div>
                        <p className=" capitalize m-[10px]  text-[32px]">
                            Log In
                        </p>
                        <p className=" capitalize m-[10px] text-[15px]">
                            welcome back to{" "}
                            <span className=" uppercase"> amaizo</span>
                        </p>
                    </div>
                    <div className="relative w-full xs:w-[460px] flex flex-col justify-center items-center gap-3">
                        <Button
                            src="/assests/Google.svg"
                            text="sign up with Google"
                        />
                        <Button
                            src="/assests/Apple-logo.svg"
                            text="Sign up with Apple"
                        />
                        <Button text="Skip For Now" />
                    </div>
                    <form
                        onSubmit={logIn}
                        className="relative w-full xs:w-[460px]   flex flex-col justify-center  items-center gap-3 "
                    >
                        <div className="w-[80%]">
                            {" "}
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) {
                                        setErrors({ ...errors, email: "" });
                                    }
                                }}
                                type="email"
                                placeholder="Email"
                                className="rounded-xl focus:placeholder:opacity-0 focus:opacity-90 transition-all placeholder:transition-all     w-full pl-6 pr-[68px] bg-white outline-none text-[#7C7979] text-base xs:text-lg placeholder-[#7C7979] h-12"
                            />
                            {errors.email && (
                                <p className="text-red-500 mt-[5px] text-sm text-start">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="w-[80%]">
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPass(e.target.value);
                                    if (errors.password) {
                                        setErrors({ ...errors, password: "" });
                                    }
                                }}
                                type="password"
                                placeholder="Password"
                                className="rounded-xl focus:placeholder:opacity-0 focus:opacity-90 transition-all placeholder:transition-all     w-full pl-6 pr-[68px] bg-white outline-none text-[#7C7979] text-base xs:text-lg placeholder-[#7C7979] h-12"
                            />
                            {errors.password && (
                                <p className="text-red-500 mt-[5px]  text-sm text-start">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <span className=" text-third text-[15px]  cursor-pointer   capitalize">
                            forget password ?
                        </span>
                        <button
                            type="submit"
                            className={`rounded-xl w-[80%] mt-[10px] bg-first outline-none text-white text-[15px] h-12 capitalize ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    style={{
                                        margin: "auto",
                                        background: "transparent",
                                        display: "block",
                                        shapeRendering: "auto",
                                    }}
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="10"
                                        r="35"
                                        strokeDasharray="164.93361431346415 56.97787143782138"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            repeatCount="indefinite"
                                            dur="1s"
                                            keyTimes="0;1"
                                            values="0 50 50;360 50 50"
                                        ></animateTransform>
                                    </circle>
                                </svg>
                            ) : (
                                "log in"
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className=" text-white  whitespace-nowrap">
                    Don't have an account?
                    <NavLink to="/signUp" className="capitalize">
                        {" "}
                        sign up
                    </NavLink>
                </p>
                <span
                    onClick={chat}
                    className="capitalize text-first cursor-pointer"
                >
                    start chat{" "}
                </span>
            </motion.div>
        </div>
    );
};

export default LogIn;
