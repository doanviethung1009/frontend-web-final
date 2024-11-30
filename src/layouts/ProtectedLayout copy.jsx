import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.Context";

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