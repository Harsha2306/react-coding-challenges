import axios, { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";

type DATA_SET_ID = "cars" | "bikes";

type TDataSet = {
  id: string;
  name: string;
};

const FetchData: React.FC = () => {
  const [dataSetId, setDataSetId] = useState<DATA_SET_ID>("cars");
  const [dataset, setDataset] = useState<TDataSet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/firebase-api/${dataSetId}.json`, {
          signal,
        });
        setDataset(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.code === "ERR_CANCELED") {
            console.log("Request canceled:", dataSetId);
          } else {
            alert(error.response?.data);
          }
        } else {
          console.error("unexpected error", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [dataSetId]);

  return (
    <div>
      <button onClick={() => setDataSetId("cars")}>Cars</button>
      <button onClick={() => setDataSetId("bikes")}>Bikes</button>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {dataset.map((row) => (
            <p key={row.id}>{row.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default FetchData;
