import React from "react";
import classes from "./page.module.css";
import Image from "next/image";

export default function MealDetailsPage({ params }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.creator}>
            by <a href={` mailto: %{Email}`}>Name</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <min>
        <p
          dangerouslySetInnerHTML={{
            __html: "...",
          }}
          className={classes.instructions}
        />
      </min>
    </>
  );
}
