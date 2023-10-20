"use client";

import ProductPage from "./components/ProductPage/";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-950">
      <ProductPage />
    </main>
  );
}
