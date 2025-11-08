import Content from "../components/Content";
import FooterButton from "../components/FooterButton";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="relative min-h-screen pb-[100px]">
            <Navbar />
            <Content />
            <FooterButton />
        </div>
    )
}

export default Home;