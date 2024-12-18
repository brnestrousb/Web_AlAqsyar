"use client";

import React, { useState, useEffect } from "react";

interface CalendarProps {
  holidays: string[]; // Format: ["YYYY-MM-DD", "YYYY-MM-DD", ...]
}

const Calendar: React.FC<CalendarProps> = ({ holidays }) => {
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const today = new Date(); // Tanggal hari ini

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return <div>Loading...</div>;
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderMonth = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = startDayOfMonth(year, month);

    return (
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
          {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
          {year}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center font-medium text-gray-600 uppercase"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={index}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isToday =
              year === today.getFullYear() &&
              month === today.getMonth() &&
              day === today.getDate();
            const isSunday = new Date(year, month, day).getDay() === 0; // Hari Minggu
            const formattedDate = `${year}-${String(month + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
            const isHoliday = holidays.includes(formattedDate);

            return (
              <div
                key={day}
                className={`text-center p-2 rounded ${
                  isToday
                    ? "bg-blue-500 text-white font-bold"
                    : isHoliday
                    ? "bg-red-500 text-white"
                    : isSunday
                    ? "bg-red-300 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-700 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={handlePrevMonth}
        >
          Previous
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
        <button
          className="text-gray-700 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderMonth(year, month)}
        {renderMonth(year, month + 1)}
      </div>
    </div>
  );
};

export default Calendar;
