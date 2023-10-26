const Spinner = ({size}) => {
    if (size === "small") {
        return (
            <div className='opacity-40 my-10 inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
        );
    } else if (size === "big") {
        return (
            <div className='opacity-40 my-10 inline-block h-20 w-20 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
        );

    }
};

export default Spinner;
