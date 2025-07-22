import NavBar from '../components/NavBar';

export default function Education() {
  return (
    <>
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Education</h1>
        <ul className="list-disc mt-4 ml-6">
          <li>How to get a prescription</li>
          <li>What conditions are eligible</li>
          <li>THC vs CBD guidance</li>
          <li>UK legal regulations</li>
        </ul>
      </main>
    </>
  );
}
