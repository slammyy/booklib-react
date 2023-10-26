import { useAppSelector } from "../store/hooks";

const BookPage = () => {
    const bookLoadStatus = useAppSelector(state => state.book.load);
    const bookInfo = useAppSelector<any>(state => state.book.value);
    if (bookLoadStatus) {
        return (
            <div className="w-3/5 p-10 flex-col gap-5 overflow-x-auto h-screen">
                <h1 className="text-5xl text-stone-600 mb-5 font-bold">{bookInfo.volumeInfo.title}</h1>
                <hr className="mb-5 border-stone-300" />
                <div className="flex gap-10">
                    <div className="w-1/4 flex flex-col items-center gap-5 rounded-md">
                        <img src={bookInfo.volumeInfo.imageLinks.thumbnail} className="h-60 shadow drop-shadow-lg shadow-stone-200" />
                        <button onClick={() => localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(bookInfo))} className="bg-stone-100 text-stone-600 px-5 py-2 border-stone-300 border drop-shadow-lg shadow-stone-200">Add to library</button>
                    </div>
                    <div className="w-3/4">
                        <p className="text-stone-600"><b>Categories:</b> {bookInfo.volumeInfo.categories}</p>
                        <p className="text-stone-600"><b>Author:</b> {bookInfo.volumeInfo.authors[0]}</p>
                        <p className="text-stone-600"><b>Page count:</b> {bookInfo.volumeInfo.pageCount}</p>
                        <p className="text-stone-600"><b>Publisher:</b> {bookInfo.volumeInfo.publisher}</p>
                        <p className="text-stone-600"><b>Published date:</b> {bookInfo.volumeInfo.publishedDate}</p>
                        <p className="text-stone-600"><b>Description: </b>{bookInfo.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default BookPage;
