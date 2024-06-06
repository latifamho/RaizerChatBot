const Icons = ({ src }) => {
    return (
        <div className=" h-[36px] w-[36px] rounded-[7px] hover:scale-[1.4] transition cursor-pointer  flex items-center justify-center bg-fourth">
            <img src={src} className=" w-[24px] h-[24px]" alt="" />
        </div>
    );
};

export default Icons;
