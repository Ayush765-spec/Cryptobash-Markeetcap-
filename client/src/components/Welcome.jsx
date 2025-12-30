import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full rounded-lg p-3 outline-none bg-transparent text-white border border-gray-600 text-sm white-glassmorphism focus:border-[#2952e3] focus:ring-1 focus:ring-[#2952e3] transition-all duration-300"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="flex mf:flex-row flex-col items-start justify-between md:px-20 md:py-32 py-20 px-4 max-w-7xl w-full">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white text-gradient py-2 leading-tight">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-8 text-white font-light md:w-9/12 w-11/12 text-lg leading-relaxed">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-8 bg-[#2952e3] px-6 py-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <AiFillPlayCircle className="text-white mr-2 text-xl" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-16 gap-2">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-16">
          <div className="p-5 flex justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full mb-8 eth-card white-glassmorphism shadow-2xl">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={24} color="#fff" />
                </div>
                <BsInfoCircle fontSize={20} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-xl mt-2">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 sm:w-[420px] w-full flex flex-col justify-start items-center blue-glassmorphism shadow-2xl rounded-2xl">
            <div className="w-full mb-4">
              <label className="text-white text-sm font-light mb-2 block">Ethereum</label>
            </div>
            <div className="w-full mb-6">
              <label className="text-white text-sm font-light mb-2 block">Address To</label>
              <Input placeholder="Address To" name="addressTo" type="text" value={formData.addressTo} handleChange={handleChange} />
            </div>
            <div className="w-full mb-6">
              <label className="text-white text-sm font-light mb-2 block">Amount (ETH)</label>
              <Input placeholder="Amount (ETH)" name="amount" type="number" value={formData.amount} handleChange={handleChange} />
            </div>
            <div className="w-full mb-6">
              <label className="text-white text-sm font-light mb-2 block">Keyword (Gif)</label>
              <Input placeholder="Keyword (Gif)" name="keyword" type="text" value={formData.keyword} handleChange={handleChange} />
            </div>
            <div className="w-full mb-6">
              <label className="text-white text-sm font-light mb-2 block">Enter Message</label>
              <Input placeholder="Enter Message" name="message" type="text" value={formData.message} handleChange={handleChange} />
            </div>

            <div className="h-[1px] w-full bg-gray-400 my-4" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-4 border-[1px] py-3 px-6 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer transition-all duration-300 font-medium"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
