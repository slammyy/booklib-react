import SearchBar from "./SearchBar";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="w-full h-16 bg-white rounded-xl flex items-center justify-between px-10">
            <a href="#" className="flex items-center">
                <img src={logo} className="w-8 h-8"/>
                <h1 className="select-none font-bold text-4xl text-stone-700">BookLib</h1>
            </a>
            <SearchBar />
            <ul className="flex gap-5 justify-self-end">
                <li className="text-stone-700"><a href="#">Search</a></li>
                <li className="text-stone-700"><a href="#">Library</a></li>
            </ul>
        </div>
    );
};

export default Header;
