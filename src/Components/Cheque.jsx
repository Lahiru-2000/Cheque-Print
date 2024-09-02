import React from 'react';
import '../print.css';

function Cheque({ details }) {
    const { payee, amount, amountInWords, date } = details;

    const day = new Date(date).toLocaleDateString('en-GB', { day: '2-digit' });
    const month = new Date(date).toLocaleDateString('en-GB', { month: '2-digit' });
    const year = new Date(date).toLocaleDateString('en-GB', { year: '2-digit' }).slice(-2); // Last two digits of the year

    return (
        <div className="printable border border-gray-300 rounded-lg p-6 relative bg-white shadow-lg w-[7in] h-[3.5in]">
            <div className="absolute top-4 left-4 ml-20 mt-14">
                <span className="font-semibold text-xl">{payee}</span>
            </div>

            <div className="absolute top-4 right-4 mt-32 mr-20">
                <span className="font-semibold text-xl">{amount}.00</span>
            </div>
            <div className="absolute top-16 left-4 w-[330px] ml-20 mt-14">
                <span className="font-semibold text-xl">{amountInWords} Rupees Only</span>
            </div>

            <div className="font-semibold text-xl mr-[-2px] flex float-end " style={{ letterSpacing: '0.6em' }}>
    <span className="mr-2">{day}</span>
    <span className="mr-6">{month}</span>
    <span className="ml-8">{year}</span>
</div>

        </div>
    );
}

export default Cheque;
