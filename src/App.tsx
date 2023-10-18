import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import IndexPage from "./components/IndexPage";
import LibraryPage from "./components/LibraryPage";
import ErrorPage from "./components/ErrorPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <IndexPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/library",
            element: <LibraryPage />,
        },
    ]);
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
