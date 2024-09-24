import React from "react";

export default function page({ params }) {
  return <h1>{params.slug}</h1>;
}
