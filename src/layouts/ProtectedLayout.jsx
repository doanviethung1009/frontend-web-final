import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";

const ProtectedLayout = () => {
    return (
        <div>
            <header>
                <NavBarAdmin />
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default ProtectedLayout;