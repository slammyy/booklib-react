import { useAppSelector } from "../store/hooks";
import addIcon from "../assets/addIcon.svg";

const BookCard = () => {
    const booksData = useAppSelector(state => state.books.value);
    return (
        <>
            {
                booksData.map((book: any, index: number) => {
                    if (book.volumeInfo.imageLinks && book.volumeInfo.categories && book.volumeInfo.title && book.volumeInfo.authors) {
                        return (
                            <div key={index} className="h-fit w-96 md:w-auto bg-stone-200 flex items-center p-5 rounded-md gap-5 mb-5 drop-shadow-lg">
                                <div className="absolute right-5 top-5 cursor-pointer">
                                    <img src={addIcon} className="w-5 h-5 opacity-50"/>
                                </div>
                                <img className="rounded-md drop-shadow-lg" src={book.volumeInfo.imageLinks.thumbnail} />
                                <div>
                                    <p className="text-stone-500">{book.volumeInfo.categories}</p>
                                    <p className="text-lg text-stone-700">{book.volumeInfo.title}</p>
                                    <p className="text-stone-500">{book.volumeInfo.authors}</p>
                                </div>
                            </div>
                        );
                    }
                })
            }
        </>
    );
};

export default BookCard;

