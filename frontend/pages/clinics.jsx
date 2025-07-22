import NavBar from '../components/NavBar';
import ClinicList from '../components/ClinicList';
import { useState, useEffect } from 'react';

export default function Clinics() {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clinics')
      .then(r => r.json())
      .then(setClinics);
  }, []);

  return (
    <>
      <NavBar />
      <main className="p-8">
        <ClinicList clinics={clinics} />
      </main>
    </>
  );
}
