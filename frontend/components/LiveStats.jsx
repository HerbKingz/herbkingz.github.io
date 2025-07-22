import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

export default function LiveStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats/latest')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Market Snapshot</h2>
      <div className="grid grid-cols-3 gap-4">
        <div><h3>{data.activePatients}</h3><p>Patients</p></div>
        <div><h3>£{data.avgSpendPerYear}</h3><p>Avg Spend</p></div>
        <div><h3>{data.prescribingClinics}</h3><p>Clinics</p></div>
      </div>
      <div className="mt-4">
        <Line data={data.chartData} />
      </div>
    </div>
  );
}
