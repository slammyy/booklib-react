import Header from "./Header";
import BookCard from "./BookCard";
import Footer from "./Footer";


const LibraryPage = () => {
    return (
        <div className="flex flex-col h-screen justify-between m-10">
            <Header />
            <div className="mb-10 space-y-5 columns-1 md:columns-2 xl:columns-3 justify-center xl:justify-between">
                <BookCard />
            </div>
            <Footer />
        </div>
    );
};

export default LibraryPage;
