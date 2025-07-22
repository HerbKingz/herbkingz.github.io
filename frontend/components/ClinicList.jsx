export default function ClinicList({ clinics }) {
  return (
    <div className="space-y-4">
      {clinics.map(c => (
        <div key={c._id} className="p-4 border rounded">
          <h3 className="text-lg font-semibold">{c.name}</h3>
          <p>{c.address}</p>
          <a href={c.website} target="_blank" className="text-blue-600">Visit site</a>
        </div>
      ))}
    </div>
  );
}
