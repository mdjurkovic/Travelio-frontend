import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultLoaderImage from "../../Images/Image-loader.png";
import DefaultImage from "../../Images/Image-Default.png";

const StyledImage = styled.img`
  filter: ${(props) => (props.imageLoading ? "blur(20px)" : "")};
  transition: 0.5s filter linear;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
`;

const BlurryLoadingImage = ({
  image,
  alt,
  imageStyleClass,
  bgColor = "transparent",
}) => {
  const [currentImage, setCurrentImage] = useState(DefaultLoaderImage);
  const [imageLoading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src ? `/images/${src}` : DefaultImage;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
    loadingImage.onerror = () => {
      setCurrentImage(DefaultImage);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [image]);

  return (
    <StyledImage
      src={currentImage}
      alt={alt}
      className={imageStyleClass}
      bgColor={bgColor}
      imageLoading={imageLoading}
    />
  );
};

export default BlurryLoadingImage;
