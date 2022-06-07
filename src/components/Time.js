import React, { useEffect, useState } from "react";

const Time = ({ time }) => {
  const [t, setT] = useState(0);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setT(Date.now() - time);
    }, 1000);

    return () => {
      clearInterval(timeOut);
    };

    // eslint-disable-next-line
  }, []);

  const s = parseInt(t / 1000);
  return (
    <div
      style={{
        position: "relative",
        padding: "0 20px",
      }}
    >
      {`${parseInt(s / 60)} min : ${parseInt(s % 60)} sec`}
    </div>
  );
};

export default Time;