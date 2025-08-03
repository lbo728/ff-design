import Image from "next/image";

const dummyProductImages = [
  { alt: "T-Shirts", path: "/img/product-01.png" },
  { alt: "Hoodies", path: "/img/product-02.png" },
  { alt: "Jackets", path: "/img/product-03.png" },
  { alt: "Shoes", path: "/img/product-04.png" },
  { alt: "Accessories", path: "/img/product-05.png" },
  { alt: "Sale", path: "/img/product-06.png" },
  { alt: "New Arrivals 01", path: "/img/product-07.png" },
  { alt: "New Arrivals 02", path: "/img/product-08.png" },
  { alt: "New Arrivals 03", path: "/img/product-09.png" },
  { alt: "New Arrivals 04", path: "/img/product-10.png" },
  { alt: "New Arrivals 05", path: "/img/product-11.png" },
  { alt: "New Arrivals 06", path: "/img/product-12.png" },
  { alt: "New Arrivals 07", path: "/img/product-13.png" },
  { alt: "New Arrivals 08", path: "/img/product-14.png" },
  { alt: "New Arrivals 09", path: "/img/product-15.png" },
  { alt: "New Arrivals 10", path: "/img/product-16.png" },
];

export const DummyProductImage = (image: {
  index: number;
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={dummyProductImages[image.index].path}
      alt={dummyProductImages[image.index].alt}
      width={image.width}
      height={image.height}
    />
  );
};
