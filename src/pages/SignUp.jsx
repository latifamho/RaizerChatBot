import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../index.css";

import { motion } from "framer-motion";

// utility functions
import { ID } from "appwrite";
import { validateForm } from "../utils/validation";
import {
    setEmailCookie,
    setIdCookie,
    setPasswordCookie,
} from "../utils/cookie";

import { toast } from "react-toastify";
//components
import Button from "../components/button";

const SingUp = () => {
    // to navigate between pages
    const router = useNavigate();
    //necessary states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordC] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const signUp = (e) => {
        // to prevent the default behavior
        e.preventDefault();
        setLoading(true);
        // check if there is any errors about validation
        const validationErrors = validateForm({
            name,
            email,
            password,
            passwordConfirm,
        });
        setErrors(validationErrors);
        // to make sure there is no errors in all of the
        if (Object.values(validationErrors).every((x) => x === "")) {
            setLoading(true);
            const id = ID.unique();

            setIdCookie(id);
            setEmailCookie(email);
            console.log("sdfsdf", typeof password);
            setPasswordCookie(password);

            setLoading(false);
            setTimeout(() => {
                toast.success("registered successfully");
            }, 4000);
            setTimeout(() => {
                router("/login", { path: true });
            }, 7000);
        } else {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-black w-full h-[100vh]  flex flex-col gap-3  text-center justify-center items-center ">
            {" "}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-[700px] w-[90%] mx-auto h-[85%]  rounded-[28px] overflow-hidden flex items-center justify-center  relative"
            >
                {" "}
                <div className=" gradient-bg absolute w-[240%] h-[240%] z-[9]" />{" "}
                <div className=" text-white calc bg-black    flex  flex-col justify-center rounded-[28px]   items-center text-center  h-full md:gap-[1rem] relative z-10">
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
                        <p className="  text-[32px] ">Sign Up</p>
                        <p className=" capitalize m-[10px] text-[15px]">
                            Create your free account
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
                        onSubmit={signUp}
                        className="relative w-full xs:w-[460px] mt-[25px] flex flex-col justify-center items-center gap-3"
                    >
                        <div className="w-[80%]    items-start">
                            <input
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name) {
                                        setErrors({ ...errors, name: "" });
                                    }
                                }}
                                type="text"
                                placeholder="Username"
                                className="rounded-xl focus:placeholder:opacity-0 focus:opacity-90 transition-all placeholder:transition-all     w-full pl-6 pr-[68px] bg-white outline-none text-[#7C7979] text-base xs:text-lg placeholder-[#7C7979] h-12"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm text-start">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="w-[80%]">
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
                                <p className="text-red-500    text-sm text-start">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="w-[80%]">
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) {
                                        setErrors({ ...errors, password: "" });
                                    }
                                }}
                                type="password"
                                placeholder="Password"
                                className="rounded-xl focus:placeholder:opacity-0 focus:opacity-90 transition-all placeholder:transition-all     w-full pl-6 pr-[68px] bg-white outline-none text-[#7C7979] text-base xs:text-lg placeholder-[#7C7979] h-12"
                            />
                            {errors.password && (
                                <p className="text-red-500  text-sm text-start">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="w-[80%]">
                            <input
                                value={passwordConfirm}
                                onChange={(e) => {
                                    setPasswordC(e.target.value);
                                    if (errors.passwordConfirm) {
                                        setErrors({
                                            ...errors,
                                            passwordConfirm: "",
                                        });
                                    }
                                }}
                                type="password"
                                placeholder="ConfirmPassword"
                                className="rounded-xl focus:placeholder:opacity-0 focus:opacity-90 transition-all placeholder:transition-all     w-full pl-6 pr-[68px] bg-white outline-none text-[#7C7979] text-base xs:text-lg placeholder-[#7C7979] h-12"
                            />
                            {errors.passwordConfirm && (
                                <p className="text-red-500 mt-[5px]  text-sm text-start">
                                    {errors.passwordConfirm}
                                </p>
                            )}
                        </div>
                        <button
                            color="#DFE2EB"
                            type="submit"
                            className={`rounded-xl w-[80%] mt-[5px] bg-first outline-none text-white text-base xs:text-lg h-12 capitalize ${
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
                                "Create your free account"
                            )}
                        </button>
                    </form>
                    <div className="relative w-full xs:w-[460px]   flex flex-col justify-center  items-center gap-3 ">
                        <p className=" capitalize text-[#7C7979] mt-[10px] text-[14px]">
                            By signing up you agree to our{" "}
                            <span className=" underline cursor-pointer text-fifth">
                                {" "}
                                Terms of Service.
                            </span>{" "}
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className=" text-white text-[15px]">
                    Already have an account?
                    <NavLink to="/login" className="capitalize">
                        {" "}
                        log in
                    </NavLink>
                </p>
            </motion.div>
        </div>
    );
};

export default SingUp;
