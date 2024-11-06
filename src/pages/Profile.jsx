import { toast } from "react-toastify";

const Profile = () => {
    const handleSuccess = () => {
        toast.success("Operation was successful!");
    };

    const handleError = () => {
        toast.error("Something went wrong.");
    };
    return (
        <div>
            <h1>React-Toastify Example</h1>
            <button onClick={handleSuccess}>Show Success Toast</button>
            <button onClick={handleError}>Show Error Toast</button>


        </div>
    );
};

export default Profile; 