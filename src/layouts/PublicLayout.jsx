import { Outlet } from "react-router-dom";
import NavBarPublic from "../components/NavBarPublic";

const PublicLayout = () => {
    return (
        <div>
            <header>
                <NavBarPublic />
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default PublicLayout;