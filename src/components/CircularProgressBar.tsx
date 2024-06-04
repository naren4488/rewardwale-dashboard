import React from "react";

type CircularProgressBarProps = {
  value: number; // Value between 0 and 100 representing the progress percentage
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  // Calculate the radius and circumference of the circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  // Calculate the stroke-dashoffset based on the progress value
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 100 100">
      <circle
        className="stroke-current text-gray-200"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="6"
        fill="none"
      />
      <circle
        className="stroke-current text-blue-500"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="6"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-lg font-bold text-gray-700"
      >
        {value}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
