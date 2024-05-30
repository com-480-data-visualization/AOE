// src/MirEVA.js
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const MirEVA = () => {
  const [evaData, setEvaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the EVA data
    fetch('./data/eva_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEvaData(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!evaData) {
    return <div>Loading...</div>;
  }

  // Process EVA data
  const evaDurations = evaData.map(eva => ({
    label: `EVA #${eva["EVA #"]}`,
    duration: eva["Duration (min)"]
  }));

  const evaPurposes = evaData.reduce((acc, curr) => {
    acc[curr.Purpose] = (acc[curr.Purpose] || 0) + 1;
    return acc;
  }, {});

  // Chart data
  const durationData = {
    labels: evaDurations.map(eva => eva.label),
    datasets: [
      {
        label: 'Duration of EVAs (min)',
        data: evaDurations.map(eva => eva.duration),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const purposeData = {
    labels: Object.keys(evaPurposes),
    datasets: [
      {
        label: 'Purpose of EVAs',
        data: Object.values(evaPurposes),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'EVA Number',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Duration (minutes)',
        },
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return (
    <div>
      <h2>Duration of Each EVA of Mir Space Station</h2>
      <p>An EVA (Extravehicular Activity) is any activity done by an astronaut outside a spacecraft. This chart shows the duration of each EVA conducted on the Mir space station.</p>
      <Bar data={durationData} options={options} />

      <h2>Purpose of Each EVA of Mir Space Station</h2>
      <p>EVAs are conducted for various purposes such as maintenance, repairs, and scientific experiments. This pie chart categorizes the EVAs based on their purposes.</p>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Pie data={purposeData} />
      </div>
    </div>
  );
};

export default MirEVA;
