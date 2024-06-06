const Button = ({ src, text }) => {
    return (
        <button className=" text-[15px] py-[10px] px-[5px] capitalize rounded-full border flex items-center justify-center text-center border-second w-[80%] mx-auto">
            {src && <img src={src} alt="google" className=" mr-[10px]" />}
            {text}
        </button>
    );
};

export default Button;
