import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        outline: "bg-transparent border border-gray-300 hover:bg-gray-100",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const textVariants = cva(
  "leading-tight break-all", // 기본 텍스트 속성
  {
    variants: {
      variant: {
        default: "text-gray-900",
        muted: "text-gray-500",
        danger: "text-red-600",
        success: "text-green-600",
        info: "text-blue-600",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        lightGray: "text-gray-400",
        white: "text-white",
        black: "text-black",
        gray: "text-gray-500",
        brown: "text-amber-700",
        orange: "text-orange-500",
        yellow: "text-yellow-500",
        green: "text-green-500",
        blue: "text-blue-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
        inherit: "text-inherit",
        default: "text-inherit",
        gray_background: "bg-gray-100",
        brown_background: "bg-amber-100",
        orange_background: "bg-orange-100",
        yellow_background: "bg-yellow-100",
        green_background: "bg-green-100",
        blue_background: "bg-blue-100",
        purple_background: "bg-purple-100",
        pink_background: "bg-pink-100",
        red_background: "bg-red-100",
        default_background: "bg-transparent",
      },
      textLine: {
        underline: "underline decoration-solid",
        strikethrough: "line-through",
      },

      textStyle: {
        italic: "italic",
        noTitalic: "not-italic",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "normal",
    },
  },
);

export const inputVariants = cva(
  "outline outline-1 outline-gray-300 border-none focus:outline-2 focus:outline-blue-500 px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);
