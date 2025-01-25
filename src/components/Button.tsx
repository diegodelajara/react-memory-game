import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children }: ButtonProps) {
  return <div>{children}</div>;
}
