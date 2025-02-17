import React, { useCallback, useState } from "react";
import LoanForm from "./LoanForm";
import { ILoanData, ILoanDetails } from "../../types";
import LoanDetails from "./LoanDetails";

const initialLoanData: ILoanData = {
  amount: "0",
  amountErr: false,
  interest: "0",
  interestErr: false,
  term: 10,
};

const initialLoanDetails: ILoanDetails = {
  display: false,
  monthlyPayment: 0,
  totalInterestPaid: 0,
  totalPayment: 0,
};

const Widget: React.FC = () => {
  const [loanData, setLoanData] = useState(initialLoanData);
  const [loanDetails, SetLoanDetails] = useState(initialLoanDetails);

  const handleLoanData = useCallback(
    (
      key: string,
      e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
      if (key === "term") {
        setLoanData((prev) => ({ ...prev, [key]: Number(e.target.value) }));
      } else {
        const currency = e.target.value;
        const numericCurrency = Number(currency);
        setLoanData((prev) => ({
          ...prev,
          [key]: isNaN(numericCurrency) ? currency : numericCurrency,
          [key + "Err"]: isNaN(numericCurrency),
        }));
      }
    },
    []
  );

  const calculateLoanDetails = useCallback(
    (loanAmount: number, annualInterest: number, tenureMonths: number) => {
      const monthlyInterest = annualInterest / 12 / 100;
      const monthlyEMI =
        (loanAmount *
          monthlyInterest *
          Math.pow(1 + monthlyInterest, tenureMonths)) /
        (Math.pow(1 + monthlyInterest, tenureMonths) - 1);
      const totalLoanAmount = monthlyEMI * tenureMonths;
      const totalInterest = totalLoanAmount - loanAmount;

      return {
        calculatedMonthlyPayment: monthlyEMI,
        calculatedTotalPayment: totalLoanAmount,
        calculatedTotalInterestPaid: totalInterest,
      };
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const numericLoanAmount = Number(loanData.amount);
      const numericInterest = Number(loanData.interest);
      const term = loanData.term;
      const {
        calculatedMonthlyPayment,
        calculatedTotalPayment,
        calculatedTotalInterestPaid,
      } = calculateLoanDetails(numericLoanAmount, numericInterest, term * 12);
      SetLoanDetails({
        monthlyPayment: calculatedMonthlyPayment,
        totalPayment: calculatedTotalPayment,
        totalInterestPaid: calculatedTotalInterestPaid,
        display: true,
      });
    },
    [calculateLoanDetails, loanData.amount, loanData.interest, loanData.term]
  );

  return (
    <>
      <LoanForm
        loanData={loanData}
        handleLoanData={handleLoanData}
        handleSubmit={handleSubmit}
      />
      <LoanDetails loanDetails={loanDetails} />
    </>
  );
};

export default Widget;
