import ChatInterface from "./chatinterface";
import Head from "./Head";

const Dashboard = () => {
    return (
        <div className=" bg-[#13141A] w-full flex flex-col h-full justify-between ">
            <Head />
            <ChatInterface />
        </div>
    );
};

export default Dashboard;
