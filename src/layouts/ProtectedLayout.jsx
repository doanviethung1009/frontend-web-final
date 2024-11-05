import NavBarAdmin from "../components/NavBarAdmin";
import Login from "../pages/Login";

const ProtectedLayout = () => {
    return (
        <div>
            <header>
                <NavBarAdmin />
            </header>
            <main>
                <Login />
            </main>

        </div>
    );
};

export default ProtectedLayout;