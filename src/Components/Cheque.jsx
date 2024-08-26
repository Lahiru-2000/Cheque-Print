import React from 'react';
import '../print.css';

function Cheque({ details }) {
    const { payee, amount, amountInWords, date } = details;

    const day = new Date(date).toLocaleDateString('en-GB', { day: '2-digit' });
    const month = new Date(date).toLocaleDateString('en-GB', { month: '2-digit' });
    const year = new Date(date).toLocaleDateString('en-GB', { year: '2-digit' }).slice(-2); // Last two digits of the year

    return (
        <div className="printable border border-gray-300 rounded-lg p-6 relative bg-white shadow-lg w-[7.25in] h-[3in]">
            <div className="absolute top-4 left-4 ml-20 mt-10">
                <span className="font-semibold text-md">{payee}</span>
            </div>

            <div className="absolute top-4 right-4 mt-24 mr-20">
                <span className="font-semibold text-md">{amount}</span>
            </div>
            <div className="absolute top-16 left-4 w-[330px] ml-24 mt-7">
                <span className="font-semibold text-md">{amountInWords} Rupees Only</span>
            </div>

            <div className="absolute top-4 right-4">
                <span className="font-semibold text-md mr-5 tracking-wider" >{day} {month} &nbsp;&nbsp;&nbsp;&nbsp;{year}</span>
            </div>
        </div>
    );
}

export default Cheque;
