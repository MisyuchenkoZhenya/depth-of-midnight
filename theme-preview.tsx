// A small storefront card.
import { useState } from "react";

const TAX_RATE = 0.2;

interface Product {
  title: string;
  price: number;
}

export function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);
  const total = Math.round(product.price * (1 + TAX_RATE));
  const label = saved ? `Saved ${product.title}` : "Save";

  return (
    <article className="card" data-saved={saved}>
      <h2>{product.title}</h2>
      <button type="button" onClick={() => setSaved(true)}>
        {label}
      </button>
    </article>
  );
}
