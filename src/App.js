import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="setting" element={<Setting />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;