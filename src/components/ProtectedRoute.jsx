import { Link, Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
import PropTypes from 'prop-types';  // Import PropTypes
import { Button, Result } from 'antd';


const ProtectedRoute = (props) => {
    const token = localStorage.getItem('token');
    if (token) {
        return (
            <>
                {props.children}
            </>
        )
    }

    // return <Navigate to="/login" replace />;
    return (
        <div id="error-page">
            <Result
                status="403"
                title="403"
                subTitle=
                {<>
                    <p>Sorry, you need login to get information.</p>

                </>
                }
                extra={<Button type="primary">
                    <Link to="/login">
                        <span>
                            Back to login page
                        </span>
                    </Link>


                </Button>}
            />
        </div>
    );

};
// PropTypes validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,  // Validate children as a required prop
};

export default ProtectedRoute;