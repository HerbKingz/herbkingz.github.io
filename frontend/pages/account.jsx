import NavBar from '../components/NavBar';

export default function Account() {
  return (
    <>
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">My Account</h1>
        <p>Here you can view your orders, prescriptions, profile details…</p>
      </main>
    </>
  );
}
