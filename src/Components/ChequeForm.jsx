import React, { useState } from 'react';
import numberToWords from './numberToWords'; // Import the utility function
import { useNavigate } from 'react-router-dom';

function ChequeForm({ onSubmit }) {
    const [payee, setPayee] = useState('');
    const [amount, setAmount] = useState('');
    const [amountInWords, setAmountInWords] = useState('');
    const [date, setDate] = useState('');
    const [showXXXX, setShowXXXX] = useState(false); // State for showing "XXXX"

    const navigate = useNavigate();

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);

        // Convert amount to words
        if (!isNaN(value) && value !== '') {
            setAmountInWords(numberToWords(Number(value)));
        } else {
            setAmountInWords('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = { payee, amount, amountInWords, date, showXXXX }; // Include showXXXX in details
        onSubmit(details);
        navigate('/cheque');  // Navigate to the cheque page
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Payee</label>
                <input
                    type="text"
                    value={payee}
                    onChange={(e) => setPayee(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2" required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2" required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Amount in Words</label>
                <p className="mt-1 text-lg font-semibold">{amountInWords} Rupees Only</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2" required
                />
            </div>

            {/* Add or remove the "XXXX" */}
            <div className="flex items-center">
                <label className="mr-2 text-sm font-medium text-gray-700">Add "XXXX" Above Payee</label>
                <input
                    type="checkbox"
                    checked={showXXXX}
                    onChange={() => setShowXXXX(!showXXXX)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Generate Cheque
            </button>
        </form>
    );
}

export default ChequeForm;
