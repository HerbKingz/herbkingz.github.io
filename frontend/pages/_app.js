// frontend/pages/_app.js
import '../style.css'; // relative to the project root

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
