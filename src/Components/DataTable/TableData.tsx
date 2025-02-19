import React from "react";
import TableDataRow from "./TableDataRow";
import { ITableData } from "../../types";

interface ITableDataProps {
  tableData: ITableData;
}

const TableData: React.FC<ITableDataProps> = ({
  tableData,
}: ITableDataProps) => {
  console.log("TableData");
  return (
    <tbody>
      {tableData.loading ? (
        <tr>
          <td>loading...</td>
        </tr>
      ) : (
        <>
          {tableData.users.map((user) => (
            <TableDataRow key={user.id} {...user} />
          ))}
        </>
      )}
    </tbody>
  );
};

export default TableData;
