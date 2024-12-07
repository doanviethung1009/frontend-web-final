import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import CentralVietnam from "./pages/vietnamTravel/CentralVietnam";
import Login from "./pages/Login";
import NorthernVietnam from './pages/vietnamTravel/NorthernVietnam';
import ProtectedLayout from './layouts/ProtectedLayout';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useContext, useState } from 'react';
import TourAdmin from './pages/adminPages/TourAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoute2 from './components/ProtectedRouteN';
import Stories from './pages/publicPages/abouts/Stories';
import VietnamDestinations from './pages/publicPages/guides/VietnamDestinations';
import CreateTour from './pages/adminPages/CreateTour';
import TestApi from './pages/adminPages/TestApi';
import ProcessBar from './components/adminComponents/ProcessBar';
import About from './pages/About';
import { AuthContext, AutoWrapper } from './context/Auth.Context';
import CreateTourComponent from './components/adminComponents/CreateTourComponent';
import MarkdownComponent from './components/adminComponents/MarkdownComponent';
import Partner from './pages/publicPages/Partner';
import ErrorPage from './pages/Error';



const App2 = () => {
    const [checkLang, setCheckLang] = useState('en')
    const { user } = useContext(AuthContext)

    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <ErrorPage />, // validate the error element for routes 
            element: <PublicLayout
                checkLang={checkLang}
                setCheckLang={setCheckLang}
            />,
            children: [
                {
                    index: true,
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about-us',
                    element: <About />
                },
                {
                    path: '/products',
                    children: [
                        {
                            path: '/products/travelVietnam/',
                            children: [
                                {
                                    path: '/products/travelVietnam/northernVietnam',
                                    element: <NorthernVietnam />
                                },
                                {
                                    path: '/products/travelVietnam/centralVietnam',
                                    element: <CentralVietnam />
                                }
                            ]
                        },
                    ]
                },
                {
                    path: '/partner',
                    element: <Partner />
                    // children: [
                    //     {
                    //         path: '/partner/strategic',
                    //         element: <Strategics />
                    //     },
                    // ]
                },
                {
                    path: '/guide',
                    // element: <TravelGuide />
                    // children: [
                    //     {
                    //         path: '/guide/vietnamDestinations',
                    //         element: <VietnamDestinations />
                    //     },
                    // ]
                }

            ]
        },
        {
            path: '/',
            element: (
                // <ProtectedLayout
                //     checkLang={checkLang}
                //     setCheckLang={setCheckLang}
                // />
                <AutoWrapper>
                    <ProtectedLayout
                        checkLang={checkLang}
                        setCheckLang={setCheckLang}
                    />
                </AutoWrapper>
            ),
            children: [
                {
                    index: true,
                    path: '/tourAdmin',
                    element: (
                        <ProtectedRoute>
                            <TourAdmin />
                        </ProtectedRoute>
                    )
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/createTour',
                    element:
                        (
                            // <CreateTour />
                            <ProtectedRoute>
                                <CreateTour />
                            </ProtectedRoute>
                        )
                },
                {
                    path: '/testApi',
                    element:
                        (
                            // <CreateTour />
                            <ProtectedRoute>
                                <TestApi />
                            </ProtectedRoute>
                        )
                },
                {
                    path: '/processBar',
                    element:
                        (
                            <ProtectedRoute>
                                <ProcessBar />
                            </ProtectedRoute>

                        )
                },
                {
                    path: '/tourBlog',
                    element:
                        (
                            <ProtectedRoute>
                                <MarkdownComponent />
                            </ProtectedRoute>

                        )
                }

            ]
        }
    ])
    return (
        <Fragment>
            <RouterProvider router={router} />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Fragment>

    );
};

export default App2;