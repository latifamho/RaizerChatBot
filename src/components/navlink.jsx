import { NavLink } from "react-router-dom";

const Link = ({ icon, text, reff }) => {
    return (
        <NavLink
            to={reff}
            className={`text-[15px] flex items-center gap-[15px] pl-[20px]  p-[15px] transition-all font-semibold text-base  ${
                text === "dashboard"
                    ? "text-first ! border-l-8 ! border-first !"
                    : "text-[#ECE9E9]/90 "
            } hover:text-first hover:border-l-8 hover:border-first  `}
        >
            <div className=" w-[24px] h-[24px]">
                <img src={icon} alt="icon" />
            </div>
            <span className="capitalize">{text}</span>
        </NavLink>
    );
};

export default Link;
