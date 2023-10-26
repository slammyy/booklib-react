const LibraryPage = () => {
    const book = JSON.parse(localStorage.getItem("1"));
    const title = book.volumeInfo.title;

    return (
        <h1>{title}</h1>
    );
};

export default LibraryPage;
