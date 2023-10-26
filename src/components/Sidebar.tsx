import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
    return (
        <nav className="flex flex-col justify-between h-screen left-0 top-0 w-2/5 bg-stone-100 border-stone-300 border-x">
            <Header />
            <Center />
            <Footer />
        </nav>
    );
};

export default Sidebar;
