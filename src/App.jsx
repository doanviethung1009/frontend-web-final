import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
const App = () => {

    return (
        <Fragment>

            <Router>
                <Routes>
                    {/* public layouts */}
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path='/travelVietnam/northernVietnam' element={<NorthernVietnam />} />
                        <Route path='/travelVietnam/centralVietnam' element={<CentralVietnam />} />
                    </Route>
                    {/* <Route element={<ProtectedLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route> */}
                    <Route element={<ProtectedLayout />}>
                        {/* Wrap protected routes */}
                        <Route path='/tourAdmin' element={

                            <ProtectedRoute>
                                <TourAdmin />
                            </ProtectedRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        {/* protected routes */}
                        <Route path="/profile" element={
                            <ProtectedRoute2>
                                <Profile />
                            </ProtectedRoute2>
                        } />
                        {/*... */}
                    </Route>
                </Routes>
            </Router>
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

export default App;