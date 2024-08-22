import React from "react";

const LineChart = () => {
  const data = [
    { label: "Jan", value: 30 },
    { label: "Feb", value: 60 },
    { label: "Mar", value: 45 },
    { label: "Apr", value: 80 },
    { label: "May", value: 55 },
    { label: "Jun", value: 75 },
  ];

  return (
    <div className="flex h-full flex-col items-center">
      {/* Y-Axis Labels */}
      <div className="mb-2 flex h-full w-full justify-between">
        <div className="text-14 flex flex-col justify-between text-gray-500">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* Bar Container */}
        <div className="ml-4 flex w-full items-end justify-between">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Bar with shadow */}
              <div
                className={`bg-red w-12 rounded-t-lg shadow-md md:w-4`}
                style={{
                  height: `${item.value}px`,
                }}
              ></div>
              {/* X-Axis Label */}
              <span className="mt-2 text-sm text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
