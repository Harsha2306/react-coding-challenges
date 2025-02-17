import React, { memo, useCallback } from "react";
import { ILoanDetails } from "../../types";

interface ILoanDetailsProps {
  loanDetails: ILoanDetails;
}

const LoanDetails: React.FC<ILoanDetailsProps> = memo(
  ({ loanDetails }: ILoanDetailsProps) => {
    const formatToINR = useCallback((value: number) => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(value);
    }, []);
    return (
      <div>
        {loanDetails.display && (
          <>
            <p>Total Payment: {formatToINR(loanDetails.totalPayment)}</p>
            <br />
            <p>
              Toatl Interest Paid: {formatToINR(loanDetails.totalInterestPaid)}
            </p>
            <br />
            <p>Montly Payment: {formatToINR(loanDetails.monthlyPayment)}</p>
          </>
        )}
      </div>
    );
  }
);

export default LoanDetails;
