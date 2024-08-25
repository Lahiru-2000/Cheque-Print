import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ChequeForm from './Components/ChequeForm';
import ChequePage from './Components/ChequePage';

function App() {
    const [chequeDetails, setChequeDetails] = useState(null);

    const handleFormSubmit = (details) => {
        setChequeDetails(details);
    };

    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold mb-8">Cheque Printer</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                <ChequeForm onSubmit={handleFormSubmit} />
                            </div>
                        }
                    />
                    <Route
                        path="/cheque"
                        element={<ChequePage details={chequeDetails} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
