import * as React from "react";
import { cn } from "@/lib/utils";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

const Separator = ({ className, orientation = "horizontal", ...props }: SeparatorProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-white/10",
        orientation === "vertical" ? "w-px h-full" : "h-px w-full",
        className
      )}
      {...props}
    />
  );
};

export { Separator };
export default Separator;
