import Header from "../components/Header";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";


const LibraryPage = () => {
    const find = useAppSelector(state => state.find.value);
    return (
        <div className="flex flex-col h-screen justify-between m-10">
            <Header />
            <div className="mt-10">
                {find
                    ?
                    <div className="mb-10 space-y-5 columns-1 md:columns-2 xl:columns-3 justify-center xl:justify-between">
                        <BookCard />
                    </div>
                    :
                    <div className="flex flex-col gap-20 justify-center items-center mt-10 mb-40">
                        <h1 className="text-8xl text-center font-bold text-stone-700">You have no books in your library. Search for books and add them here</h1>
                        <Link to={"/"} className="hover:opacity-50 w-fit h-fit px-10 py-5 bg-white rounded-xl border-4 border-stone-700">
                            <p className="select-none font-bold text-2xl text-stone-700">Browse books</p>
                        </Link>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default LibraryPage;
