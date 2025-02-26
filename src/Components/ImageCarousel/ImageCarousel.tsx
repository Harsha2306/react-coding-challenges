import React, { useCallback, useState } from "react";
import { TImage } from "../../types";

type TImageCarouselProps = {
  images: TImage[];
};

type TImageProps = {
  src: string;
  alt: string;
};

const ImageCarousel: React.FC<TImageCarouselProps> = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const handleClick = useCallback((updaterFn: (prev: number) => number) => {
    setIdx(updaterFn);
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      <button
        onClick={() =>
          handleClick((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        Prev
      </button>
      <Image key={idx} {...images[idx]} />
      <button
        onClick={() =>
          handleClick((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      >
        Next
      </button>
    </div>
  );
};

const Image: React.FC<TImageProps> = ({ src, alt }) => {
  return (
    <img
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
      src={src}
      alt={alt}
    />
  );
};

export default ImageCarousel;
