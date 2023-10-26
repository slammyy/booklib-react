import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="bottom-0 w-full border-stone-300 border-t flex">
                <Link to={"/"} className="p-4 border-stone-300 border-r w-1/2 flex justify-center items-center">
                    <p className="text-stone-600 text-xl">Browse</p>
                </Link>
                <Link to={"/library"} className="p-4 w-1/2 flex justify-center items-center">
                    <p className="text-stone-600 text-xl">Library</p>
                </Link>
            </footer>
    );
};

export default Footer;
