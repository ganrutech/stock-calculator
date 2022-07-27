import React, { useState, useEffect } from "react";

const targetData = { long: 0, short: 0 };

const HighLow = () => {
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [target, setTarget] = useState(targetData);

  useEffect(() => {
    function calcFun() {
      if (high && low && high > low) {
        const diffVal = high - low;
        const result = parseInt(diffVal / 2);

        setTarget({
          long: parseInt(high) + result,
          short: parseInt(low) - result,
        });
      } else {
        setTarget(targetData);
      }
    }
    calcFun();
  }, [high, low]);

  return (
    <div className="w-full flex justify-center pt-6">
      <div className="flex-col space-y-3 w-96">
        <div className="underline underline-offset-2 text-center font-semibold">
          High and Low - 15 Mins Timeframe Strategy
        </div>

        <div className="w-full flex items-center bg-red-200 text-white text-center font-semibold">
          <div className="w-1/2 bg-green-500">LONG: {target.long}</div>
          <div className="w-1/2 bg-red-500">SHORT: {target.short}</div>
        </div>

        <div className="flex space-x-2">
          <div className="w-12 font-semibold">HIGH:</div>
          <input
            className="inputField"
            type="number"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
          />
        </div>

        <div className="flex space-x-2">
          <div className="w-12 font-semibold">LOW:</div>
          <input
            className="inputField"
            type="number"
            value={low}
            onChange={(e) => setLow(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HighLow;
