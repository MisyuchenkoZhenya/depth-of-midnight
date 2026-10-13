// A small storefront card. Useful as a swatch for the theme.
import { useState } from "react";

const TAX_RATE = 0.2;
const CURRENCY = "USD";
const FEATURED = ["ink", "gold", "navy"];

interface Product {
  id: number;
  title: string;
  price: number;
}

function formatPrice(cents: number): string {
  const amount = cents / 100;
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: CURRENCY,
  }).format(amount);
}

function savedNote(product: Product): string {
  // Shown under the title once the card is kept.
  return `Saved ${product.title}`;
}

export function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);
  const total = Math.round(product.price * (1 + TAX_RATE));
  const label = saved ? "Saved" : "Save for later";
  const featured = FEATURED.includes(product.title);

  return (
    <article className="card" data-saved={saved} data-featured={featured}>
      <h2>{product.title}</h2>
      <p className="price">{formatPrice(total)}</p>
      {saved ? <p className="note">{savedNote(product)}</p> : null}
      <button
        type="button"
        aria-pressed={saved}
        onClick={() => setSaved(true)}
      >
        {label}
      </button>
    </article>
  );
}
