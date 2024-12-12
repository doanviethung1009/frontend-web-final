import { Outlet } from "react-router-dom";
import NavBarPublic from "../components/NavBarPublic";
import Footer from "../components/publicComponents/Footer";

const PublicLayout = (props) => {
    const { checkLang, setCheckLang } = props;
    return (
        <div>
            <header>
                <NavBarPublic
                    checkLang={checkLang}
                    setCheckLang={setCheckLang}
                />
            </header>
            <main>
                <Outlet
                    checkLang={checkLang}
                    setCheckLang={setCheckLang}
                />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;