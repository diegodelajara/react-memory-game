import React from "react";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}
