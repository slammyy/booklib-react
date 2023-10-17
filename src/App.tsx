import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="flex flex-col h-screen justify-between m-10">
                <Header />
                <Main />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
