import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <header style={{ borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2e7d32' }}>Herb Kingz</h1>
        <nav style={{ marginTop: '1rem' }}>
          <Link href="/clinics" style={{ marginRight: '1rem' }}>Clinics</Link>
          <Link href="/education" style={{ marginRight: '1rem' }}>Education</Link>
          <Link href="/store">Store</Link>
        </nav>
      </header>

      <section style={{ maxWidth: '700px' }}>
        <h2>Welcome to the UK’s #1 Medical Cannabis Resource</h2>
        <p>
          We provide verified live data on licensed clinics, educational content for patients, 
          and a marketplace to access cannabis-related resources legally and safely.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/dashboard">
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: '#2e7d32',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Launch Dashboard
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
