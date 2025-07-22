import Link from 'next/link';
export default function NavBar() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <ul className="flex space-x-4">
        {['/', '/dashboard', '/store', '/clinics', '/education', '/account'].map(path => (
          <li key={path}>
            <Link href={path}>
              <a className="hover:underline">{path === '/' ? 'Home' : path.replace('/', '')}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
