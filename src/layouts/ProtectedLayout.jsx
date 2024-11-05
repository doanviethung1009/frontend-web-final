import NavBarAdmin from "../components/NavBarAdmin";
import Home from "../pages/Home";

const ProtectedLayout = () => {
    return (
        <div>
            <NavBarAdmin />
            <Home />
            {/* <NavBarPublic /> */}
        </div>
    );
};

export default ProtectedLayout;