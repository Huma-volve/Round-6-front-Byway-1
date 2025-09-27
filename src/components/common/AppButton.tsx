import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type AppButtonProps<T extends ElementType> = {
    as?: T;
    variant?: "default" | "outline" | "ghost";
    Icon?: LucideIcon;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

function AppButton<T extends ElementType>({
    as,
    variant = "default",
    Icon,
    children,
    ...props
}: AppButtonProps<T>) {
    const Element = as || "button";

    return (
        <Element
            className={`flex gap-2 items-center py-2 text-sm hover:scale-105 transition font-medium cursor-pointer ${
                variant === "outline"
                    ? "text-gray-700 border-1 border-gray-700 px-2"
                    : variant === "ghost"
                    ? "text-gray-700"
                    : "bg-gray-700 text-white px-2"
            }`}
            {...props}
        >
            {Icon && (
                <Icon
                    size={20}
                    className="stroke-gray-700 hover:scale-105 transition"
                />
            )}
            {children}
        </Element>
    );
}

export default AppButton;
