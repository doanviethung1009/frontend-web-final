import NavBarAdmin from "../components/NavBarAdmin";
import Home from "../pages/Home";

const ProtectedLayout = () => {
    return (
        <div>
            <NavBarAdmin />
            <Home />
        </div>
    );
};

export default ProtectedLayout;