import { useEffect, useState } from "react";

// importing icons
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowLeft } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";

import Link from "./navlink";

import { links } from "../utils/data";

import { useMediaQuery } from "@react-hook/media-query";
import {
    deleteEmailCookie,
    deleteIdCookie,
    deletePasswordCookie,
} from "../utils/cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const router = useNavigate();
    const logout = () => {
        // deleteEmailCookie();
        // deletePasswordCookie();
        // deleteIdCookie();
        setTimeout(() => {
            router("/", { path: true });
        }, 2000);
        toast.success("logged out successfully");
    };
    const [open, setopen] = useState(true);
    const isWide = useMediaQuery("(min-width: 750px)");
    useEffect(() => {
        if (!isWide) {
            setopen(false);
        } else {
            setopen(true);
        }
    }, [isWide]);
    return (
        <div className=" bg-black text-second flex flex-row relative z-[100]">
            <div className=" border-r-[0.1px]  relative border-[#ddd] w-[10%] h-[100vh] flex gap-[10px] p-[10px]  flex-col items-end  justify-end">
                <div className=" sm:block hidden">
                    {" "}
                    <CiLogout
                        className="  cursor-pointer"
                        size={24}
                        onClick={logout}
                    />
                    <IoSettingsOutline
                        size={24}
                        className="  flex justify-end items-end ! cursor-pointer "
                    />{" "}
                </div>
                <SlArrowLeft
                    size={24}
                    onClick={() => setopen(!open)}
                    style={{
                        right: open ? "-350px" : "-30px",
                        rotate: open ? "0deg" : "180deg",
                    }}
                    className=" cursor-pointer hover:scale-[0.8] absolute top-1/2 translate-y-1/2 transition-all bg-transparent -right-10 text-white bg-black"
                />
            </div>
            <div
                className=" z-10 bg-black h-full w-0 overflow-hidden transition-all   flex flex-col justify-between absolute left-0 sm:relative "
                style={{
                    width: open ? "327px" : "0",
                }}
            >
                <div className="flex flex-col gap-4">
                    <div className=" w-full p-[15px] flex flex-row gap-4 text-center justify-between   items-center">
                        <div className=" flex flex-row items-center gap-7">
                            {" "}
                            <div className=" bg-first  rounded-2xl w-[48px] h-[48px] flex justify-center items-center ">
                                {" "}
                                <span className=" font-bold">AC</span>
                            </div>
                            <h2 className=" capitalize text-[24px] font-bold font-poppins whitespace-nowrap">
                                amaizo chat
                            </h2>
                        </div>
                        <IoIosArrowBack
                            onClick={() => setopen(!open)}
                            size={30}
                            className=" cursor-pointer hover:scale-[0.8]   transition-all"
                        />
                    </div>
                    <div>
                        <h2 className=" text-second text-[20px] mb-[15px] p-[15px] font-bold">
                            Menu
                        </h2>
                        <div className=" flex flex-col gap-[5px]">
                            {links.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        icon={link.icon}
                                        text={link.text}
                                        reff={link.reff}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <button className=" text-[15px] py-[10px] px-[5px] capitalize rounded-[15px] border flex items-center justify-center text-center bg-first cursor-pointer transition  hover:bg-first/80  border-first w-[80%] mx-auto">
                        <img
                            src="/assests/icons8-coins-50 1.svg"
                            alt="google"
                            className=" mr-[10px]"
                        />
                        <p className=" capitalize text-[16px] text-[#2C2D32] font-bold">
                            view plan
                        </p>
                    </button>
                </div>
                <div className=" w-full p-[15px] flex flex-row gap-4   justify-between   items-center">
                    <div className=" flex flex-row items-center gap-7">
                        {" "}
                        <div className=" bg-first  rounded-2xl w-[48px] h-[48px]   items-center  flex justify-center text-center  i ">
                            <span className=" font-bold  text-[16px]">
                                {" "}
                                L M
                            </span>
                        </div>
                        <div className=" flex flex-col ">
                            <h2 className=" capitalize text-[24px]  font-poppins ">
                                Latifa Mho
                            </h2>
                            <span className=" capitalize text-third text-[12px] font-thin">
                                {" "}
                                8 dialogues
                            </span>
                        </div>
                    </div>
                    <div>
                        <IoIosArrowUp size={20} className=" cursor-pointer" />
                        <IoIosArrowDown size={20} className=" cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
