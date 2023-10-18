import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const IndexPage = () => {
    return (
        <div className="flex flex-col h-screen justify-between m-10">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default IndexPage;
