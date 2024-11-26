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
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        // localStorage.removeItem('tourId');
        toast.success("user has been logged out")
        navigate("/login");  // Redirect to login page
    }

    useEffect(() => {
        // Simulate fetching user data on mount
        const loadUser = async () => {
            try {
                const storedUser = localStorage.getItem("userName");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error("Failed to load user data:", error);

                // localStorage.removeItem("access_token");
            } finally {
                setIsAppLoading(false);
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

