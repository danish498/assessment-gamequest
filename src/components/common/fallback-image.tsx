import { fallBackImg } from "@/assets/image";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageWithFallbackProps {
  src: string;
  alt: string;
  fallBackSrc?: string;
}

const OptimizedImageWithFallback = ({
  src,
  alt,
  fallBackSrc = fallBackImg.src,
}: OptimizedImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        objectFit: "cover",
      }}
    >
      <Image
        src={imageError ? fallBackSrc : src}
        alt={alt}
        width={500}
        height={0}
        style={{ width: "100%", height: "100%" }}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default OptimizedImageWithFallback;
