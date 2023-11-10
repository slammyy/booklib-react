import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import { book, status } from "../store/bookDataSlice";

const BookCard = () => {
    const booksData = useAppSelector(state => state.books.value);
    const dispatch = useAppDispatch();
    const findBook = async (bookId: string) => {
        dispatch(status(false));
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${import.meta.env.VITE_BOOKSAPI}`);
        const data = await res.json();
        dispatch(book(await data));
        dispatch(status(true));
    };
    return (
        <>
            {
                booksData.map((book: any, index: number) => {
                    if (book.volumeInfo.imageLinks && book.volumeInfo.categories && book.volumeInfo.title && book.volumeInfo.authors) {
                        return (
                            <Link to={`/books/${book.id}`} onClick={() => findBook(book.id)} key={index} className="h-36 px-5 flex items-center gap-5">
                                <img className="rounded-md drop-shadow-lg h-20" src={book.volumeInfo.imageLinks.thumbnail} />
                                <div className="text-left w-full pr-20">
                                    <p className="text-stone-500 truncate">{book.volumeInfo.categories}</p>
                                    <p className="text-lg text-stone-700 truncate">{book.volumeInfo.title}</p>
                                    <p className="text-stone-500 truncate">{book.volumeInfo.authors[0]}</p>
                                </div>
                            </Link>
                        );
                    }
                })
            }
        </>
    );
};

export default BookCard;

