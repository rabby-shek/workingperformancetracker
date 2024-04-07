import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Home = () => {
  const [workingRecords, setWorkingRecords] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:6060/working-records')
      .then(response => response.json())
      .then(data => {
        setWorkingRecords(data);
      })
      .catch(error => console.error('Error fetching working records:', error));
  }, []);

  useEffect(() => {
    if (workingRecords.length > 0) {
      // Calculate total working minutes
      const totalWorkingMinutes = workingRecords.reduce((acc, record) => acc + parseInt(record.workingMinutes), 0);

      // Filter today's and previous day's records
      const today = new Date().toISOString().split('T')[0];
      const todayRecord = workingRecords.find(record => record.date === today);
      const previousDay = new Date();
      previousDay.setDate(previousDay.getDate() - 1);
      const previousDayFormatted = previousDay.toISOString().split('T')[0];
      const previousDayRecord = workingRecords.find(record => record.date === previousDayFormatted);

      // Calculate today's and previous day's working minutes
      const todayWorkingMinutes = todayRecord ? parseInt(todayRecord.workingMinutes) : 0;
      const previousDayWorkingMinutes = previousDayRecord ? parseInt(previousDayRecord.workingMinutes) : 0;

      // Destroy existing chart instance if it exists
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }

      // Chart rendering
      const ctx = document.getElementById('workingMinutesChart');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Total Working Minutes', 'Today\'s Working Minutes', 'Previous Day\'s Working Minutes'],
          datasets: [{
            label: 'Minutes',
            data: [totalWorkingMinutes, todayWorkingMinutes, previousDayWorkingMinutes],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [workingRecords]);

  return (
    <div>
      <canvas id="workingMinutesChart" width="400" height="400"></canvas>
    </div>
  );
}

export default React.memo(Home);
