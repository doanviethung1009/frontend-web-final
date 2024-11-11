import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";

const ProtectedLayout = (props) => {
    const { checkLang, setCheckLang } = props;
    return (
        <div>
            <header>
                <NavBarAdmin
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

        </div>
    );
};

export default ProtectedLayout;