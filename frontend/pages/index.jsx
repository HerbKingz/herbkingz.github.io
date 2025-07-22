import '../styles/style.css';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>🌿 HerbKingz</h1>
        <nav>
          <a href="/education">Education</a>
          <a href="/clinics">Clinics</a>
          <a href="/store">Store</a>
        </nav>
      </header>

      <main className="main">
        <h2>Welcome to HerbKingz</h2>
        <p>Your trusted UK source for medical cannabis education, market data, and resources.</p>
        <div className="buttons">
          <a href="/education" className="btn-primary">Learn More</a>
          <a href="/store" className="btn-outline">Visit Store</a>
        </div>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} HerbKingz • UK-regulated • People-first.
      </footer>
    </div>
  );
}
