import { useEffect, useState } from "react";

// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// utility functions
import { getIdCookie } from "../utils/cookie";
import Send from "./send";
import {
    getArrayFromLocalStorage,
    setArrayInLocalStorage,
} from "../utils/events";
import axios from "axios";
import Reply from "./reply";
import LoadingReply from "./loadingReply";

const ChatInterface = () => {
    const userId = getIdCookie();

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState(
        Array.isArray(getArrayFromLocalStorage(userId))
            ? getArrayFromLocalStorage(userId)
            : []
    );

    const handleTranslate = async (e) => {
        e.preventDefault();
        if (text === "") {
            return;
        }
        setLoading(true);
        const tt = text;
        setText("");
        const arra = getArrayFromLocalStorage(userId);
        arra.push(tt);
        setArrayInLocalStorage(userId, arra);
        setChats(getArrayFromLocalStorage(userId));
        console.log("object");
        const encodedParams = new URLSearchParams();
        encodedParams.set("from", "auto");
        encodedParams.set("to", "en");
        encodedParams.set("text", tt);
        // translating process
        const options = {
            method: "POST",
            url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Key":
                    "01caaa137cmsh2651af1cad49c17p18da88jsnb9731f6a9e9c",
                "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            const arra = getArrayFromLocalStorage(userId);
            arra.push(response.data.trans);
            setArrayInLocalStorage(userId, arra);
            setChats(getArrayFromLocalStorage(userId));
            setLoading(false);
            return response.data.trans;
        } catch (error) {
            const arra = getArrayFromLocalStorage(userId);
            arra.push(
                "error  translating message please try again .... 😥  make sure you are using VPN 😇"
            );
            setArrayInLocalStorage(userId, arra);
            setChats(getArrayFromLocalStorage(userId));
            setLoading(false);
            return null;
        }
    };
    useEffect(() => {}, []);
    return (
        <>
            <div className="h-full overflow-auto flex flex-col gap-[2px] md:px-16 p-8 pt-10">
                {chats.map((e, index) => {
                    if (index % 2 === 0) return <Send text={e} />;
                    else return <Reply text={e} index={index} />;
                })}
                {loading && <LoadingReply />}
            </div>
            <div className="flex flex-col w-full  md:px-12 px-6">
                <div className="   flex justify-center items-center  relative z-[10]  rounded-2xl overflow-hidden bg-fourth   w-full   ">
                    <div className=" gradient-bg absolute w-[115%] h-[3000%] z-[9]" />{" "}
                    <form
                        onSubmit={handleTranslate}
                        className=" calc  relative z-[10]  rounded-2xl flex items-center justify-center overflow-hidden   bg-fourth   w-full   "
                    >
                        <div className="   gap-[10px]  w-full flex flex-row justify-between items-center py-3 ps-4 pe-2     bg-fourth  ">
                            {" "}
                            <input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter your question, goal or next big project ...."
                                className="    w-full    h-full bg-fourth outline-none focus:placeholder:opacity-0 placeholder:transition text-white "
                            />{" "}
                            <img
                                className=" cursor-pointer  hover:scale-[1.3] transition"
                                src="/assests/Trash_light.svg"
                                onClick={() => setText("")}
                                alt=""
                            />
                            <img
                                className=" cursor-pointer hover:scale-[1.3] transition"
                                src="/assests/Copy_alt_light.svg"
                                alt=""
                            />
                            <button
                                disabled={loading}
                                className="   p-1.5 rounded-full bg-first hover:bg-first/80  group transition flex justify-center items-center "
                            >
                                <img
                                    src="/assests/send.svg"
                                    alt="send"
                                    className="w-[35px] group-hover:scale-[1.3] transition"
                                />
                            </button>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-row justify-between my-[20px]  items-center">
                    <div className=" h-[35px] group cursor-pointer hover:bg- gap-[10px] rounded-lg flex items-center justify-center  md:py-[12px] md:pl-[8px] md:pr-[10px]  px-[10px] py-[8px] bg-fourth">
                        {" "}
                        <img
                            src="/assests/Cancel_light.svg"
                            className=" w-[20px] h-[20px] ml-[5px]  group-hover:scale-[1.3] transition cursor-pointe"
                            alt=""
                        />
                        <p className=" md:text-[16px] text-[12px] text-second capitalize ">
                            {" "}
                            no tool
                        </p>{" "}
                        <div>
                            <IoIosArrowUp
                                size={10}
                                className=" cursor-pointer "
                            />
                            <IoIosArrowDown
                                size={10}
                                className=" cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className=" h-[35px]  rounded-lg flex items-center justify-center  md:py-[12px] md:px-[16px]  px-[10px] py-[8px] bg-fourth">
                        <p className=" md:text-[16px] text-[12px] text-second capitalize">
                            {" "}
                            Credit remaining
                        </p>
                        <div className=" bg-[#C66CE530]  rounded-[12px] mx-[5px] px-[6px] text-[14px] ">
                            {" "}
                            400
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatInterface;
