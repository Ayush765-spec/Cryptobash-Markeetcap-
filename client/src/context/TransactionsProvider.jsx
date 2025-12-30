import React, { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { TransactionContext } from "./TransactionContext";

const createEthereumContract = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) throw new Error("Ethereum object not found");

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error("Error creating ethereum contract:", error);
    return null;
  }
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount") || "0");
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const transactionsContract = await createEthereumContract();
        if (!transactionsContract) return;

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseFloat(ethers.formatEther(transaction.amount))
        }));

        setTransactions(structuredTransactions);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const sendTransaction = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = await createEthereumContract();
        if (!transactionsContract) return;

        const parsedAmount = ethers.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 GWEI
            value: "0x" + parsedAmount.toString(16),
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        await transactionHash.wait();
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();
        setTransactionCount(Number(transactionsCount));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) return;

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length) {
          setCurrentAccount(accounts[0]);
          getAllTransactions();
        }

        const transactionsContract = await createEthereumContract();
        if (transactionsContract) {
          const count = await transactionsContract.getTransactionCount();
          window.localStorage.setItem("transactionCount", count.toString());
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    };

    checkWalletConnection();
  }, [getAllTransactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};


