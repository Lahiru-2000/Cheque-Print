import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cheque from './Cheque';

function ChequePage({ details }) {
    const navigate = useNavigate();

    // Redirect to the home page if there are no cheque details
    useEffect(() => {
        if (!details) {
            navigate('/');
        }
    }, [details, navigate]);

    const printCheque = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            {details && (
                <div className="print-container">
                    <Cheque details={details} />
                    <button
                        onClick={printCheque}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md print:hidden"
                    >
                        Print Cheque
                    </button>
                </div>
            )}
        </div>
    );
}

export default ChequePage;
