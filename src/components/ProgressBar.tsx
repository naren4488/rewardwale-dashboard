import React from "react";

type ProgressBarProps = {
  value: number; // Value between 0 and 100 representing the progress percentage
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-2 bg-blue-500"
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;
