import axios, { isAxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import JobsList from "./JobsList";

const PER_PAGE = 6;

const Jobs: React.FC = () => {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchJobIds = useCallback(async () => {
    try {
      const res = await axios.get<number[]>(
        "https://hacker-news.firebaseio.com/v0/jobstories.json",
        {
          headers: {
            "Content-Type": "json",
          },
        }
      );
      setJobIds(res.data);
    } catch (error) {
      if (isAxiosError(error)) alert(error.response?.data);
      else alert("an unexpected error occured");
    }
  }, []);

  useEffect(() => {
    fetchJobIds();
  }, [fetchJobIds]);

  return (
    <div>
      <JobsList jobIds={jobIds.slice((page - 1) * PER_PAGE, page * PER_PAGE)} />
      {Math.ceil(jobIds.length / PER_PAGE) !== page && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Jobs;
