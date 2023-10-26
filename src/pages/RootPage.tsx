import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default RootPage;
