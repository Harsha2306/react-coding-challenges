import React, { useCallback, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import axios, { isAxiosError } from "axios";
import { IPagination, ITableData, IUser } from "../../types";
import Pagination from "./Pagination";

const COLUMN_HEADERS = ["ID", "Name", "Age", "Occupation"];

const UserTable: React.FC = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [tableData, setTableData] = useState<ITableData>({
    users: [],
    loading: false,
  });
  const [pagination, setPagination] = useState<IPagination>({
    noOfUsers: 5,
    page: 1,
    totalPages: 0,
    collectionSize: tableData.users.length,
  });

  const fetchUsers = useCallback(async () => {
    try {
      setTableData((prev) => ({ ...prev, loading: true }));
      const response = await axios.get("/firebase-api/users.json");
      console.log("Request sent to backend");
      const data: IUser[] = response.data;
      setAllUsers(data);
      setPagination((prev) => {
        setTableData({
          users: data.slice(0, prev.noOfUsers),
          loading: false,
        });
        return {
          ...prev,
          totalPages: Math.ceil(data.length / prev.noOfUsers),
          collectionSize: data.length,
        };
      });
    } catch (error) {
      if (isAxiosError(error)) alert(error.response?.data);
    } finally {
      setTableData((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    setTableData((prev) => ({
      ...prev,
      users: allUsers.slice(
        pagination.noOfUsers * (pagination.page - 1),
        pagination.page * pagination.noOfUsers
      ),
    }));
  }, [allUsers, pagination.noOfUsers, pagination.page]);

  return (
    <>
      <table>
        <TableHeader columnHeaders={COLUMN_HEADERS} />
        <TableData tableData={tableData} />
      </table>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </>
  );
};

export default UserTable;
