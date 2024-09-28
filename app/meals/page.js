import React from "react";
import classes from "./page.module.css";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is ease and fun!
          <p className={classes.cta}>
            <Link href="/meals/share">Share your Favorite Recipe</Link>
          </p>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
