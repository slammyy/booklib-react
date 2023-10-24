import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

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
