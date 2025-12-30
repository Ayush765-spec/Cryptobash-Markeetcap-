import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });

    return (
        <div className="bg-[#181918] flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[320px]
      sm:max-w-[380px]
      min-w-full
      flex-col p-6 rounded-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10"
        >
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col justify-start w-full mb-8 space-y-3">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="hover:text-[#37c7da] transition-colors">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="hover:text-[#37c7da] transition-colors">
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-white text-base font-medium">Amount: {amount} ETH</p>
                    {message && (
                        <p className="text-white text-base mt-2">Message: {message}</p>
                    )}
                </div>
                <div className="w-full mb-6">
                    <img
                        src={gifUrl || url}
                        alt="transaction"
                        className="w-full h-72 2xl:h-[400px] rounded-lg shadow-2xl object-cover"
                    />
                </div>
                <div className="bg-black p-4 px-6 w-max rounded-3xl shadow-2xl border border-white/10">
                    <p className="text-[#37c7da] font-bold text-sm">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center gradient-bg-transactions min-h-screen">
            <div className="flex flex-col md:px-20 md:py-32 py-20 px-4 max-w-7xl w-full">
                {currentAccount ? (
                    <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center mb-4 text-gradient leading-tight">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center mb-4 text-gradient leading-tight">
                        Connect your account to see the latest transactions
                    </h3>
                )}

                <div className="flex flex-wrap justify-center items-start mt-16 gap-8">
                    {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                        <TransactionsCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
