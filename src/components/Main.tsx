import { useAppSelector } from "../store/hooks";
import BookCard from "./BookCard";

const Main = () => {
    const find = useAppSelector(state => state.find.value);

    return (
        <div className="mb-auto flex-grow my-10">
            {find
                ?
                <div className="mb-10 space-y-5 columns-1 md:columns-2 xl:columns-3 justify-center xl:justify-between">
                    <BookCard />
                </div>
                :
                <div className="flex flex-col gap-20 justify-center items-center mt-10 mb-40">
                    <h1 className="text-8xl text-center font-bold text-stone-700">Welcome to the place, where all of your books are stored conveniently</h1>
                    <a href="#" className="hover:opacity-50 w-fit h-fit px-10 py-5 bg-white rounded-xl border-4 border-stone-700">
                        <p className="select-none font-bold text-2xl text-stone-700">Go to library</p>
                    </a>
                </div>
            }
        </div>
    );
};

export default Main;
