import React from "react";
import { ShimmerThumbnail, ShimmerText, ShimmerButton } from "react-shimmer-effects";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col items-center">
      <ShimmerThumbnail height={200} width={280} />
      <ShimmerText line={1} gap={10} />
      <ShimmerText line={1} gap={5} />
      <ShimmerButton size="sm" />
    </div>
  );
};

export default ShimmerCard;
