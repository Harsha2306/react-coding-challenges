import React, { memo } from "react";

interface ITableHeader {
  columnHeaders: string[];
}

const TableHeader: React.FC<ITableHeader> = memo(
  ({ columnHeaders }: ITableHeader) => {
    console.log("TableHeader");
    return (
      <thead>
        <tr>
          {columnHeaders.map((columnHeader) => (
            <th key={columnHeader}>{columnHeader}</th>
          ))}
        </tr>
      </thead>
    );
  }
);

export default TableHeader;
