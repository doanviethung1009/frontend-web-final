import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import CentralVietnam from "./pages/vietnamTravel/CentralVietnam";
import Login from "./pages/Login";
import NorthernVietnam from './pages/vietnamTravel/northernVietnam';
import ProtectedLayout from './layouts/ProtectedLayout';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';
import TourAdmin from './pages/adminPages/TourAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoute2 from './components/ProtectedRouteN';
import Strategics from './pages/publicPages/partners/Strategics';
import Stories from './pages/publicPages/abouts/Stories';
import VietnamDestinations from './pages/publicPages/guides/VietnamDestinations';
const App2 = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/about',
                    children: [
                        {
                            path: '/about/story',
                            element: <Stories />
                        },
                        {
                            //...
                        }
                    ]
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
                        {
                            //...
                        }
                    ]
                },
                {
                    path: '/partner',
                    children: [
                        {
                            path: '/partner/strategic',
                            element: <Strategics />
                        },
                        {
                            // ...
                        },
                    ]
                },
                {
                    path: '/guide',
                    children: [
                        {
                            path: '/guide/vietnamDestinations',
                            element: <VietnamDestinations />
                        },
                        {
                            // ...
                        },
                    ]
                }

            ]
        },
        {
            path: '/',
            element: <ProtectedLayout />,
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