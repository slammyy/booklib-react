import BookCard from "./BookCard";

const Center = () => {
    return (
        <center className="relative w-full grid grid-cols-1 divide-y divide-stone-300 overflow-y-auto overflow-x-hidden">
            <BookCard />
        </center>
    );
};

export default Center;
