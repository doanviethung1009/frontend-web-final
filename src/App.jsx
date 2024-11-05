import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import CentralVietnam from "./pages/vietnamTravel/CentralVietnam";
import Login from "./pages/Login";
import NorthernVietnam from './pages/vietnamTravel/northernVietnam';
import ProtectedLayout from './layouts/ProtectedLayout';

const App = () => {
    return (

        <Router>
            <Routes>
                {/* public layouts */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path='/travelVietnam/northernVietnam' element={<NorthernVietnam />} />
                    <Route path='/travelVietnam/centralVietnam' element={<CentralVietnam />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/login" element={<Login />} />
                    {/* protected routes */}
                    {/*... */}

                </Route>
            </Routes>
        </Router>
    );
};

export default App;