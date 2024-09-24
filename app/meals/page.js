import Link from "next/link";
import React from "react";

export default function MealsPage() {
  return (
    <>
      <h1>MealsPage</h1>
      <p>
        <Link href="/meals/Hamburger">Hamburger</Link>
      </p>
      <p>
        <Link href="/meals/pizza">pizza</Link>
      </p>
      <p>
        <Link href="/meals/share">share meals</Link>
      </p>
    </>
  );
}
