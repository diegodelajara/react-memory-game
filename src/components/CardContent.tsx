import React from "react";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export default function CardContent({
  children: image,
  title,
}: CardContentProps) {
  return (
    <div className="flex flex-col">
      <div>{image}</div>
      <p>{title}</p>
    </div>
  );
}
