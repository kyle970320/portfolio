// import { cn, textVariants } from "@/lib/utils/classname";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import type { ColorsType } from "./lib/types/variantsType";
import type { VariantProps } from "class-variance-authority";
import { cn, textVariants } from "./lib/utils/classname";

type TextProps<T extends React.ElementType = "span"> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "color"
> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
    as?: T;
    color?: ColorsType;
  };

/**
 * text 기본 함수
 */
export const Typography = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      variant,
      size,
      weight,
      color,
      textStyle,
      textLine,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        className={cn(
          textVariants({ variant, color, size, weight, textStyle, textLine }),
          className,
        )}
        {...props}
      />
    );
  },
);

Typography.displayName = "Text";
