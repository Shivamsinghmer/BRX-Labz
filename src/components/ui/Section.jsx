import * as React from "react";

import { cn } from "@/lib/utils";

function Section({ className, ...props }) {
  return (
    <section
      data-slot="section"
      className={cn("line-b px-4 py-12 sm:py-20 md:py-24", className)}
      {...props}
    />
  );
}

export { Section };