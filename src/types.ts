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

export interface IUser {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export interface ITableData {
  users: IUser[];
  loading: boolean;
}

export interface IPagination {
  noOfUsers: number;
  page: number;
  totalPages: number;
  collectionSize: number;
}
