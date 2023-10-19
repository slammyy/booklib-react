import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center mt-20 sm:gap-4">
            <div className="w-30 flex flex-col justify-center items-center">
                <h1 className="sm:text-8xl text-stone-700 text-5xl font-bold tracking-normal">404</h1>
                <p className="sm:text-4xl text-stone-700 text-xl font-bold">
                    {error.statusText || error.message}
                </p>
            </div>
            <p className="sm:text-2xl w-44 sm:w-80 text-justify text-stone-700 mt-3">Sorry, but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable</p>
        </div>
    );
};

export default ErrorPage;
