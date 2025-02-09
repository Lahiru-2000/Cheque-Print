import React from 'react';
import '../print.css';

function Cheque({ details }) {
    const { payee, amount, amountInWords, date, showXXXX } = details; // Add showXXXX to destructuring

    const day = new Date(date).toLocaleDateString('en-GB', { day: '2-digit' });
    const month = new Date(date).toLocaleDateString('en-GB', { month: '2-digit' });
    const year = new Date(date).toLocaleDateString('en-GB', { year: '2-digit' }).slice(-2); // Last two digits of the year

    return (
        <div className="printable border border-gray-300 rounded-lg p-6 relative bg-white shadow-lg w-[7in] h-[3.5in]">
            {/* Conditional "XXXX" above the bearer line */}
            <div className="absolute top-4 left-4 ml-28 mt-10">
                
                <span className="font-medium text-lg text-gray-900">{payee}</span>
            </div>

            <div className="absolute top-4 right-4 mt-32 mr-[90px]">
                <span className="font-medium text-lg text-gray-900">{amount}.00</span>
            </div>
            <div className="absolute top-16 left-4 w-[330px] ml-20 mt-14">
                <span className="font-medium text-lg text-gray-900">{amountInWords} Rupees Only</span>
            </div>

            <div className="font-medium text-lg text-gray-900 mr-[-8px] flex float-end" style={{ letterSpacing: '0.6em' }}>
                <span className="mr-2">{day}</span>
                <span className="mr-6">{month}</span>
                <span className="ml-8">{year}</span>
            </div>
            <div className="absolute font-medium text-lg text-gray-700 right-4 mt-20 mr-[60px]">
            {showXXXX && (
                    <div className="text-gray-700 font-medium">XXXX</div>  // Display "XXXX"
                )}
            </div>
        </div>
    );
}

export default Cheque;
