export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.imageUrl} alt={product.name} className="h-32 w-full object-cover" />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p>THC: {product.thc}% – CBD: {product.cbd}%</p>
      <p>£{product.price}</p>
      <p className="mt-2 text-sm">{product.description}</p>
    </div>
  );
}
