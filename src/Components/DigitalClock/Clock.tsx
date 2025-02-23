import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "24px", fontFamily: "monospace" }}>
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  );
};

export default Clock;
