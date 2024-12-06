import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.Context";
import { LangContext, LangProvider } from "../context/Lang.Context";
import '../styles/adminStyles/protectedLayout.scss'
import NavBarAdmin2 from "../components/NavBarAdmin2";

const ProtectedLayout = () => {
    // const { checkLang, setCheckLang } = useContext(LangContext)
    // const { checkLang, setCheckLang } = props;

    return (
        <div className="container-protectedLayout">
            <div className="navBar-header">
                <header>
                    <NavBarAdmin

                    />
                </header>

            </div>
            <div className="outLet-container" >
                <main>
                    <Outlet

                    />
                </main>
            </div>

        </div>
    );
};

export default ProtectedLayout;