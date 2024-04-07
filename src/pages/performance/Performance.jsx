import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Performance = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:6060/working-records');
      setProgressData(response.data);
      renderChart(response.data);
    } catch (error) {
      console.error('Error fetching progress data:', error);
    }
  };

  const renderChart = (data) => {
    const labels = data.map((item) => item.date);
    const values = data.map((item) => parseInt(item.workingMinutes));

    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: ' Working minutes',
            data: values,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  };

  return (
    <div>
      <h2>Performance</h2>
      <canvas id="progressChart" width="400" height="200"></canvas>
    </div>
  );
};

export default React.memo(Performance);
