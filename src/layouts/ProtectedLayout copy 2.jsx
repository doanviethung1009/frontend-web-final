import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.Context";
import NavBarAdmin2 from "../components/NavBarAdmin2";
import '../styles/adminStyles/protectedLayout.scss'

const ProtectedLayout = (props) => {

    const { checkLang, setCheckLang } = props;
    return (
        <div className="container">
            <div className="navBar-header">
                <header>
                    <NavBarAdmin2
                        checkLang={checkLang}
                        setCheckLang={setCheckLang}
                    />
                </header>

            </div>
            <div className="outLet-container" >
                <main>
                    <Outlet
                        checkLang={checkLang}
                        setCheckLang={setCheckLang}
                    />
                </main>
            </div>

        </div>
    );
};

export default ProtectedLayout;