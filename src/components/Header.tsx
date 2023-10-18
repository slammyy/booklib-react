import SearchBar from "./SearchBar";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full h-16 bg-white rounded-xl flex items-center justify-between px-10">
            <Link to={"/"} className="flex items-center">
                <img src={logo} className="w-8 h-8"/>
                <h1 className="select-none font-bold text-4xl text-stone-700">BookLib</h1>
            </Link>
            <SearchBar />
            <ul className="flex gap-5 justify-self-end">
                <li className="text-stone-700"><Link to={"/"}>Browse</Link></li>
                <li className="text-stone-700"><Link to={"/library"}>Library</Link></li>
            </ul>
        </div>
    );
};

export default Header;
