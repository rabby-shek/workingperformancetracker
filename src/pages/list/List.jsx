import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await axios.get("http://localhost:6060/working-records");
      // Update state with fetched data
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to get the day of the week from the date
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  };

  const calculateStatus = (time) => {
    if (time >= 180) {
      return "Good";
    } else if (time >= 120) {
      return "Average";
    } else if (time >= 60) {
      return "Bad";
    } else {
      return "Worst";
    }
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "Good":
        return "badge badge-success rounded-pill";
      case "Average":
        return "badge badge-warning rounded-pill";
      case "Bad":
        return "badge badge-danger rounded-pill";
      case "Worst":
        return "badge badge-dark rounded-pill";
      default:
        return "";
    }
  };

  const calculateHourFromMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours ${remainingMinutes} minutes`;
  };

  return (
    <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Status</th>
          <th>Daily Minutes</th>
          <th>Daily Hours</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>
              <p className="fw-normal mb-1">{record.date}</p>
              <p className="text-muted mb-0">{getDayOfWeek(record.date)}</p>
            </td>
            <td>{record.title}</td>
            <td>
              <span
                className={`badge badge-${getStatusColorClass(
                  calculateStatus(record.workingMinutes)
                )} rounded-pill d-inline`}
              >
                {calculateStatus(record.workingMinutes)}
              </span>
            </td>
            <td>{record.workingMinutes} minutes</td>
            <td>{calculateHourFromMinutes(record.workingMinutes)}</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(List);
