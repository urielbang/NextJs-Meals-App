"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const input = useRef();

  const handlePickClick = () => {
    input.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )}
        </div>
        <input
          ref={input}
          className={classes.input}
          type="file"
          id="image"
          accept="image/png , image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
