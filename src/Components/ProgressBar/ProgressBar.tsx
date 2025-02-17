import React, { useEffect, useState } from "react";

const INCREMENT = 10;

const ProgressBar: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width > 0 && width < 100) {
      const timer = setTimeout(() => {
        setWidth((prev) => Math.min(prev + INCREMENT, 100));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [width]);

  return (
    <div>
      <button onClick={() => setWidth((prev) => (prev === 0 ? INCREMENT : 0))}>
        {width === 0 ? "Add" : "Reset"}
      </button>
      <div
        style={{
          height: "10px",
          width: "100%",
          backgroundColor: "lightgray",
          marginTop: "10px",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            backgroundColor: "green",
            transition: "width 0.2s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
