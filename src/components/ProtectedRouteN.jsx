import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';  // Import PropTypes


const ProtectedRoute2 = ({ children }) => {
    console.log(">>> check protected route", children)
    const token = localStorage.getItem('token');
    if (!token) {
        toast.error("You need to log in to access this page");
        return <Navigate to="/login" replace />;
    }

    return children;


};
// PropTypes validation
ProtectedRoute2.propTypes = {
    children: PropTypes.node.isRequired,  // Validate children as a required prop
};

export default ProtectedRoute2;