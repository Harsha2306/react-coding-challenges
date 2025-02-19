import React from "react";
import { IUser } from "../../types";

const TableDataRow: React.FC<IUser> = ({
  id,
  name,
  age,
  occupation,
}: IUser) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{occupation}</td>
    </tr>
  );
};

export default TableDataRow;
