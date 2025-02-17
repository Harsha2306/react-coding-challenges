import React, { memo } from "react";
import { ILoanData } from "../../types";
import { termData } from "../../data/LoanData";

interface ILoanFormProps {
  loanData: ILoanData;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLoanData: (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const LoanForm: React.FC<ILoanFormProps> = memo(
  ({ loanData, handleSubmit, handleLoanData }: ILoanFormProps) => {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="amount">Loan Amount</label>
        <br />
        <input
          value={loanData.amount}
          onChange={(e) => handleLoanData("amount", e)}
          type="text"
          id="amount"
        />
        {loanData.amountErr && (
          <p style={{ color: "red", fontSize: "15px" }}>
            only Numbers are allowed
          </p>
        )}
        <br />
        <label htmlFor="interest">Annual Interest</label>
        <br />
        <input
          onChange={(e) => handleLoanData("interest", e)}
          value={loanData.interest}
          type="text"
          id="interest"
        />
        {loanData.interestErr && (
          <p style={{ color: "red", fontSize: "15px" }}>
            only Numbers are allowed
          </p>
        )}
        <br />
        <label style={{ marginRight: "50px" }} htmlFor="term">
          Term
        </label>
        <select
          id="term"
          value={loanData.term + ""}
          onChange={(e) => handleLoanData("term", e)}
        >
          {termData.map((optn) => (
            <option key={optn.id} value={optn.value}>
              {optn.value}
            </option>
          ))}
        </select>
        <p style={{ color: "blue" }}>term * 12 months</p>
        <br />
        <button
          disabled={loanData.amountErr || loanData.interestErr}
          type="submit"
        >
          Calculate
        </button>
      </form>
    );
  }
);

export default LoanForm;
