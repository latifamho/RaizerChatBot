import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className=" bg-fourth">
            <div className="h-[100vh] text-second flex flex-row gap-[10px] wrapper  justify-center items-center capitalize  ">
                <p className=" text-xl ml-[20px]">page not found !</p>
                <NavLink
                    to="/chat/dashboard"
                    className="underline capitalize text-first text-[16px] "
                >
                    Back to dashboard
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
