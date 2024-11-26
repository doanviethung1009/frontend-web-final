import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Create AuthContext with default values
export const AuthContext = createContext({
    // avatar: "",
    // email: "",
    // name: "",
    // id: "",
    // role: "",
    // phone: "",
    user: null,
    setUser: () => { },
    isAppLoading: true,
    handleOnClickLogout: () => { },
});



export const AutoWrapper = ({ children }) => {
    const [user, setUser] = useState({
        // avatar: "",
        // email: "",
        // fullName: "",
        // id: "",
        // role: "",
        // phone: "",
    })
    const [isAppLoading, setIsAppLoading] = useState(true);
    const navigate = useNavigate();
    const handleOnClickLogout = () => {
        setUser({
            avatar: "",
            email: "",
            fullName: "",
            _id: "",
            role: "",
            phone: "",
        });
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        // localStorage.removeItem('tourId');
        navigate("/login"); // Redirect to login page
        toast.success("user has been logged out")
    }

    const authCheckToken = () => {
        localStorage.removeItem('userName');
        navigate("/login");  // Redirect to login page
    }




    useEffect(() => {
        const token = window.localStorage.getItem("token")
        // Simulate fetching user data on mount
        const loadUser = async () => {
            // Load user data if token exists
            try {
                if (token) {
                    const storedUser = localStorage.getItem("userName");
                    if (storedUser) {
                        setUser(JSON.parse(storedUser));
                    }
                }
                else {
                    authCheckToken();// Logout if no token
                }
            } catch (error) {
                console.error("Failed to load user data:", error);
            } finally {
                setIsAppLoading(false);// Mark loading as complete
            }
        };
        loadUser();
        // const savedUser = localStorage.getItem('userName');
        // if (savedUser) setUser(savedUser);
    }, []);

    console.log(">>> check storedUser in autowrapper", user)


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAppLoading,
                setIsAppLoading,
                handleOnClickLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )


}

