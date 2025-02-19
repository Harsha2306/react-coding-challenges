import React, { memo } from "react";
import { usersLimit } from "../../data/userTableData";
import { IPagination } from "../../types";

interface IPaginationProps {
  pagination: IPagination;
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
}

const Pagination: React.FC<IPaginationProps> = memo(
  ({ pagination, setPagination }: IPaginationProps) => {
    const handleNoOfUsers = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const updatedNoOfUsers = Number(e.target.value);
      setPagination((prev) => ({
        ...prev,
        page: 1,
        noOfUsers: updatedNoOfUsers,
        totalPages: Math.ceil(prev.collectionSize / updatedNoOfUsers),
      }));
    };

    const handleNext = () => {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    };

    const handlePrevious = () => {
      setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
    };

    console.log("Pagination");

    return (
      <div>
        <button
          onClick={handlePrevious}
          disabled={pagination.page === 1}
          style={{ margin: "5px" }}
        >
          previous
        </button>
        <p style={{ display: "inline-block" }}>
          Showing {pagination.page} of {pagination.totalPages} pages
        </p>
        <button
          onClick={handleNext}
          disabled={pagination.page === pagination.totalPages}
          style={{ margin: "5px" }}
        >
          next
        </button>
        <label htmlFor="noOfUsers">No Of Users</label>
        <select
          value={pagination.noOfUsers}
          onChange={handleNoOfUsers}
          name="noOfUsers"
          id="noOfUsers"
        >
          {usersLimit.map((userLimit) => (
            <option value={userLimit.limit} key={userLimit.id}>
              {userLimit.limit}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Pagination;
