import axios, { isAxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";

type JobPost = {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: "job";
  url: string;
};

type JobProps = {
  job: JobPost;
};

type JobListProps = {
  jobIds: number[];
};

const JobsList: React.FC<JobListProps> = ({ jobIds }) => {
  const [jobs, setJobs] = useState<JobPost[]>([]);

  const fetchJobs = useCallback(async () => {
    try {
      if (jobIds.length === 0) return;
      const reqJobs = await Promise.all(
        jobIds.map(async (reqJobId) => {
          const res = await axios.get<JobPost>(
            ` https://hacker-news.firebaseio.com/v0/item/${reqJobId}.json`,
            {
              headers: {
                "Content-Type": "json",
              },
            }
          );
          return res.data;
        })
      );
      setJobs((prev) => {
        const existingJobIds = new Set(prev.map((prevReqJob) => prevReqJob.id));
        const filteredReqJobs = reqJobs.filter(
          (reqJob) => !existingJobIds.has(reqJob.id)
        );
        return [...prev, ...filteredReqJobs];
      });
    } catch (error) {
      if (isAxiosError(error)) alert(error.response?.data);
      else alert("an unexpected error occured");
    }
  }, [jobIds]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <Job job={job} key={job.id} />
      ))}
    </div>
  );
};

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {job.url ? (
        <a href={job.url}>
          <h3>{job.title}</h3>
        </a>
      ) : (
        <h3>{job.title}</h3>
      )}
      <p>by {job.by}</p>
      <p>{new Date(job.time * 1000).toLocaleString()}</p>
    </div>
  );
};

export default JobsList;
