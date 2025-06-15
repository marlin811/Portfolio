// src/components/Gallery.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Gallery.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: '/images/dog.jpg' },
  { src: '/images/img1.jpeg' },
  { src: '/images/img2.JPG' },
  { src: '/images/img3.jpg' }
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <Header />

      <main className="gallery-main">
        <div className="pagelink">
          <ul>
            <li className="ima">2023</li>
            <li><a href="/gallery2">2024</a></li>
          </ul>
        </div>

        <div className="pct">
          {images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              alt={`gallery-${i}`}
              onClick={() => handleClick(i)}
              className="gallery-image"
            />
          ))}
        </div>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            index={index}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default Gallery;
