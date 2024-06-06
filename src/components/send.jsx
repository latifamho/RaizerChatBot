import { motion } from "framer-motion";

import { bouncy } from "ldrs";

bouncy.register();

const Send = ({ text }) => {
    return (
        <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex  flex-row-reverse  my-[10px]    gap-[10px]  items-first"
        >
            <div className=" w-[44px] h-[44px] py-[10px] px-[7px] bg-first text-second rounded-full flex  items-center text-center justify-center  text-[15px] font-bold font-poppins ">
                You
            </div>
            <div className="  text-[15px]  rounded-lg flex items-center justify-center  py-[12px] px-[16px] bg-fourth text-second max-w-[600px]">
                {text}
            </div>
        </motion.div>
    );
};
export default Send;
