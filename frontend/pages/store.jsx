import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

export default function Store() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(r => r.json())
      .then(setItems);
  }, []);

  return (
    <>
      <NavBar />
      <main className="p-8 grid grid-cols-3 gap-4">
        {items.map(p => <ProductCard key={p._id} product={p} />)}
      </main>
    </>
  );
}
