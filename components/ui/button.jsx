import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-2 border-neutral-darkest bg-milan font-medium text-neutral-darkest shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_2px_2px_0_var(--color-neutral-darkest-15)] hover:-translate-y-0.5 hover:bg-milan-light hover:shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_4px_4px_0_var(--color-neutral-darkest-15)]",
            alternate: "border-2 border-neutral-darkest bg-milan font-medium text-neutral-darkest shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_2px_2px_0_var(--color-neutral-darkest-15)] hover:-translate-y-0.5 hover:bg-milan-light hover:shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_4px_4px_0_var(--color-neutral-darkest-15)]",
            secondary: "border-2 border-neutral-darkest bg-neutral-lightest font-medium text-neutral-darkest shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_2px_2px_0_var(--color-neutral-darkest-15)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_4px_4px_0_var(--color-neutral-darkest-15)]",
            "secondary-alt": "border-2 border-neutral-darkest bg-neutral-lightest font-medium text-neutral-darkest shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_2px_2px_0_var(--color-neutral-darkest-15)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[inset_0_4px_0_0_var(--color-white-20),inset_0_-5px_0_0_var(--color-neutral-darkest-15),0_4px_4px_0_var(--color-neutral-darkest-15)]",
            link: "gap-2 text-scheme-text",
            "link-alt": "gap-2 text-white",
            ghost: "hover:bg-neutral-darkest hover:text-white",
            none: "",
        },
        size: {
            default: "px-6 py-3",
            sm: "px-5 py-2",
            link: "p-0",
            icon: "size-10",
            none: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Button({ className, variant, size, asChild = false, iconLeft, iconRight, children, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (<Comp data-slot="button" data-variant={variant || "default"} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {iconLeft && iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight && iconRight}
    </Comp>);
}
export { Button, buttonVariants };
