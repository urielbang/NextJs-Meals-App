import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    return {
      title: "Meal Not Found",
      description: "The meal you are looking for does not exist.",
    };
  }

  return {
    title: meal.title,
    description: meal.description,
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  if (!meal) {
    notFound();
    return null;
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <min>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
          className={classes.instructions}
        />
      </min>
    </>
  );
}
