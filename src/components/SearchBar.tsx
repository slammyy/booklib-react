import searchIcon from "../assets/searchIcon.svg";
import { input } from "../store/inputSlice.ts";
import { sort } from "../store/sortSlice.ts";
import { books } from "../store/booksDataSlice.ts";
import { find } from "../store/isFindSlice.ts";
import { load } from "../store/idLoadSlice.ts";
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import Spinner from "./Spinner";

const SearchBar = () => {
    const inputState = useAppSelector(state => state.input.value);
    const sortState = useAppSelector(state => state.sort.value);
    const loadingState = useAppSelector(state => state.load.value);
    const dispatch = useAppDispatch();

    const findBooks = async (query: string) => {
        dispatch(load(true));
        query.replace(/ /g, "+");
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortState}&maxResults=30&fields=items(volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/categories,volumeInfo/imageLinks/thumbnail)&key=${import.meta.env.VITE_BOOKSAPI}`);
        const data = await res.json();
        dispatch(books(await data.items));
        dispatch(find(true));
        dispatch(load(false));
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        inputState && findBooks(inputState);
    };

    return (
        <form className="md:w-1/2 w-full my-5" onSubmit={handleSubmit}>
            <div className="relative block">
                <input
                    className="caret-stone-600 text-xl text-stone-600 w-full bg-stone-100 rounded-xl py-2 sm:pl-36 pl-16 pr-10 focus:outline-none"
                    placeholder="Search" type="text" onChange={e => dispatch(input(e.target.value))} value={inputState} />
                <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    type="submit">
                    {
                        loadingState
                            ? <Spinner />
                            :
                            <img src={searchIcon} alt="Search icon" className="opacity-60" />
                    }
                </button>
                <select
                    className="cursor-pointer text-stone-600 absolute inset-y-0 left-0 w-1 sm:w-fit bg-stone-100 border-r-4 border-white rounded-l-xl pl-3 pr-3 focus:outline-none"
                    onChange={e => { dispatch(sort(e.target.value)); }}
                    value={sortState}
                >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
        </form>
    );
};

export default SearchBar;
