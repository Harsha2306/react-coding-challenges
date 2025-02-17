export type TNullableString = string | null;

export interface ILoanData {
  amount: string;
  amountErr: boolean;
  interest: string;
  interestErr: boolean;
  term: number;
}

export interface ILoanDetails {
  monthlyPayment: number;
  totalPayment: number;
  totalInterestPaid: number;
  display: boolean;
}
