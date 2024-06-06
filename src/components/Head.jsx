import { icons } from "../utils/data";
import Icons from "./icons";

const Head = () => {
    return (
        <div className="  border-b-[1px] border-third flex lg:flex-row  flex-col-reverse   md:justify-between justify-center items-center p-[10px] flex-wrap">
            <div className=" flex flex-row   justify-evenly items-center  gap-[10px]">
                <div className="md:py-[8px] group md:px-[9px] px-[10px] py-[8px] rounded-lg flex items-center justify-center bg-fourth">
                    <img
                        src="/assests/Expand_right_double.svg"
                        className=" w-[20px] h-[20px]  group-hover:scale-[1.3] transition cursor-pointer"
                        alt=""
                    />
                </div>
                <div className=" group h-[35px] rounded-lg flex items-center justify-center  md:py-[12px] md:px-[16px] px-[10px] bg-fourth cursor-pointer">
                    <p className=" md:text-[16px] text-[12px] text-second capitalize  ">
                        {" "}
                        example session
                    </p>
                    <img
                        src="/assests/Expand_down_light.svg"
                        className=" w-[20px] h-[20px] ml-[5px]  group-hover:scale-[1.3] transition cursor-pointe"
                        alt=""
                    />
                </div>
                <div className=" h-[35px] group rounded-lg flex items-center justify-center  md:py-[12px] md:px-[16px] px-[10px] bg-fourth cursor-pointer">
                    {" "}
                    <img
                        src="/assests/Arhive_alt_export_light.svg"
                        className=" w-[20px] h-[20px] mr-[5px] group-hover:scale-[1.3] transition cursor-pointe"
                        alt=""
                    />
                    <p className=" md:text-[16px] text-[12px] text-second capitalize">
                        {" "}
                        upload files
                    </p>
                </div>
            </div>
            <div className=" h-[55px] flex flex-row justify-between items-center px-[15px]   gap-[14px]   ">
                {icons.map((icon, index) => {
                    return <Icons key={index} src={icon.src} />;
                })}
            </div>
        </div>
    );
};

export default Head;
