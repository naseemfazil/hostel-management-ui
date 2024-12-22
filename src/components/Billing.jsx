import React, { useState } from "react";

const HotelBillingScreen = () => {
    const [step, setStep] = useState(1); // 1: Billing, 2: Payments, 3: Invoice
    const [billingDetails, setBillingDetails] = useState({
        roomRent: "",
        utilities: "",
        additionalCharges: "",
        discount: "",
        lateFee: "",
    });
    const [paymentDetails, setPaymentDetails] = useState({
        amount: "",
        method: "",
        cardNumber: "",
        cardExpiry: "",
        cardCVV: "",
    });
    const [invoice, setInvoice] = useState(null); // State to hold the generated invoice

    const handleBillingSubmit = () => {
        const total =
            parseFloat(billingDetails.roomRent || 0) +
            parseFloat(billingDetails.utilities || 0) +
            parseFloat(billingDetails.additionalCharges || 0) -
            parseFloat(billingDetails.discount || 0) +
            parseFloat(billingDetails.lateFee || 0);

        alert(`Total Invoice Amount: ₹${total}`);
        setStep(2);
    };

    const handlePaymentSubmit = () => {
        if (paymentDetails.method === "Card" && !paymentDetails.cardNumber) {
            alert("Please enter card details.");
            return;
        }

        // Generate static invoice data
        const generatedInvoice = {
            id: `INV-${Math.floor(Math.random() * 1000000)}`,
            date: new Date().toLocaleDateString(),
            amount: paymentDetails.amount,
            method: paymentDetails.method,
            details: billingDetails,
        };

        setInvoice(generatedInvoice); // Save the invoice data
        setStep(3); // Move to the invoice step
    };

    const resetProcess = () => {
        setStep(1);
        setBillingDetails({
            roomRent: "",
            utilities: "",
            additionalCharges: "",
            discount: "",
            lateFee: "",
        });
        setPaymentDetails({
            amount: "",
            method: "",
            cardNumber: "",
            cardExpiry: "",
            cardCVV: "",
        });
        setInvoice(null);
    };

    return (
        <div className="w-full">
            {step === 1 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
                    <form className="space-y-4">
                        <input
                            type="number"
                            placeholder="Room Rent"
                            className="w-full p-2 border rounded"
                            value={billingDetails.roomRent}
                            onChange={(e) =>
                                setBillingDetails({ ...billingDetails, roomRent: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Utilities"
                            className="w-full p-2 border rounded"
                            value={billingDetails.utilities}
                            onChange={(e) =>
                                setBillingDetails({ ...billingDetails, utilities: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Additional Charges"
                            className="w-full p-2 border rounded"
                            value={billingDetails.additionalCharges}
                            onChange={(e) =>
                                setBillingDetails({ ...billingDetails, additionalCharges: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Discount"
                            className="w-full p-2 border rounded"
                            value={billingDetails.discount}
                            onChange={(e) =>
                                setBillingDetails({ ...billingDetails, discount: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Late Fee"
                            className="w-full p-2 border rounded"
                            value={billingDetails.lateFee}
                            onChange={(e) =>
                                setBillingDetails({ ...billingDetails, lateFee: e.target.value })
                            }
                        />
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleBillingSubmit}
                        >
                            Next
                        </button>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
                    <form className="space-y-4">
                        <input
                            type="number"
                            placeholder="Amount"
                            className="w-full p-2 border rounded"
                            value={paymentDetails.amount}
                            onChange={(e) =>
                                setPaymentDetails({ ...paymentDetails, amount: e.target.value })
                            }
                        />
                        <select
                            className="w-full p-2 border rounded"
                            value={paymentDetails.method}
                            onChange={(e) =>
                                setPaymentDetails({ ...paymentDetails, method: e.target.value })
                            }
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="UPI">UPI</option>
                        </select>

                        {paymentDetails.method === "Card" && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full p-2 border rounded"
                                    value={paymentDetails.cardNumber}
                                    onChange={(e) =>
                                        setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                                    }
                                />
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        placeholder="Expiry (MM/YY)"
                                        className="w-1/2 p-2 border rounded"
                                        value={paymentDetails.cardExpiry}
                                        onChange={(e) =>
                                            setPaymentDetails({ ...paymentDetails, cardExpiry: e.target.value })
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        className="w-1/2 p-2 border rounded"
                                        value={paymentDetails.cardCVV}
                                        onChange={(e) =>
                                            setPaymentDetails({ ...paymentDetails, cardCVV: e.target.value })
                                        }
                                    />
                                </div>
                            </>
                        )}

                        {paymentDetails.method === "UPI" && (
                            <div className="flex flex-col items-center">
                                <p className="text-center font-medium">Scan the QR Code to Pay</p>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="UPI QR Code"
                                    className="mt-4"
                                />
                            </div>
                        )}

                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={handlePaymentSubmit}
                            >
                                Submit Payment
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {step === 3 && invoice && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Invoice</h1>
                    <p><strong>Invoice ID:</strong> {invoice.id}</p>
                    <p><strong>Date:</strong> {invoice.date}</p>
                    <p><strong>Amount Paid:</strong> ₹{invoice.amount}</p>
                    <p><strong>Payment Method:</strong> {invoice.method}</p>
                    <h2 className="text-xl font-bold mt-4">Billing Details</h2>
                    <p>Room Rent: ₹{invoice.details.roomRent}</p>
                    <p>Utilities: ₹{invoice.details.utilities}</p>
                    <p>Additional Charges: ₹{invoice.details.additionalCharges}</p>
                    <p>Discount: ₹{invoice.details.discount}</p>
                    <p>Late Fee: ₹{invoice.details.lateFee}</p>
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={resetProcess}
                    >
                        Start New Billing
                    </button>
                </div>
            )}
        </div>
    );
};

export default HotelBillingScreen;
