import NavBar from '../components/NavBar';
import LiveStats from '../components/LiveStats';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <main className="p-8">
        <LiveStats />
      </main>
    </>
  );
}
