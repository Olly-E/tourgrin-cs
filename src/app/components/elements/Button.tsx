import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { Loader } from "./Loader";

interface ButtonProps {
  variant?: "primary" | "outline" | "backdrop" | "none";
  className?: string;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  as?: "button" | "link";
  href?: string | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  isLoading = false,
  type = "button",
  className,
  children,
  onClick,
  as = "button",
  href,
}) => {
  const Tag = as === "button" ? "button" : Link;

  if (as === "link" && !href) {
    throw new Error("href is required when button is used as link");
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      href={as === "link" ? href : undefined}
      className={clsx(
        "rounded-md justify-center font-[600] w-fit whitespace-nowrap focus:outline-none disabled:cursor-not-allowed gap-2 disabled:opacity-70 cursor-pointer flex items-center gap hover:opacity-90 transition-opacity duration-100",
        variant === "primary" &&
          "bg-gradient-linear py-5 px-8 font-[600] text-white-state",
        variant === "outline" &&
          "py-4 px-8 bg-none flex items-center border-2 border-white justify-center",
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading && <Loader size="md" className="text-current" />}
      {children}
    </Tag>
  );
};
