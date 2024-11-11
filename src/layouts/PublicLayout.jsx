import { Outlet } from "react-router-dom";
import NavBarPublic from "../components/NavBarPublic";

const PublicLayout = (props) => {
    const { checkLang, setCheckLang } = props;
    return (
        <div>
            {console.log("checklangguae:", checkLang)}
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

        </div>
    );
};

export default PublicLayout;