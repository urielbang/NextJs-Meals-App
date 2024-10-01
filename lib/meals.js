import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
};

export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Slugify the meal title for a URL-friendly slug
  meal.slug = slugify(meal.title, { lower: true });

  // Sanitize the instructions to prevent XSS attacks
  meal.instructions = xss(meal.instructions);

  // Get the image extension
  const extension = meal.image.name.split(".").pop();

  // Create a file name using the slug and the image extension
  const fileName = `${meal.slug}.${extension}`;

  // Create a stream to save the image to the public folder
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  try {
    // Convert the image to a buffer and write it to the stream
    const bufferdImage = Buffer.from(await meal.image.arrayBuffer());

    // Write the buffer to the file
    stream.write(bufferdImage);

    // Close the stream after writing
    stream.end();
  } catch (error) {
    throw new Error("Saving image failed");
  }

  // Save the image path
  meal.image = `/images/${fileName}`;

  // Insert the meal details into the database
  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run(meal);
}
