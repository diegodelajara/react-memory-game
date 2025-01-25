import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children }: CardProps) {
  return <>{children}</>;
}
