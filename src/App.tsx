import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import BookPage from "./pages/BookPage";
import LibraryPage from "./pages/LibraryPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootPage />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/books/:bookId",
                    element: <BookPage />,
                },
            ]
        },
        {
            path: "/library",
            element: <LibraryPage />,
            errorElement: <ErrorPage />,
        }
    ]);
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
