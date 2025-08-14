import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
const accessKey = "QNrvJfOiyPe9TSQS1cXNqb6yoCtweGfbobx0sBiVjQ4";
export default function Galery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=flowers&per_page=24&client_id=${accessKey}`
      )
      .then((res) => {
        setImages(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 m-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description}
            className="w-full h-32 object-cover rounded-2xl"
          ></img>
        ))}
      </div>
    </div>
  );
}
