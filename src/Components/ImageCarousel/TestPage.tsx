import React from "react";
import ImageCarousel from "./ImageCarousel";
import { images } from "../../data/imageCarouselData";

const TestPage: React.FC = () => {
  return <ImageCarousel images={images} />;
};

export default TestPage;
