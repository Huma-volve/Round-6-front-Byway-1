import type { ReactNode } from "react";

type FooterListProps = {
    title: string;
    children: ReactNode;
};
function FooterList({ title, children }: FooterListProps) {
    return (
        <div>
            <h2 className="font-semibold mb-2">{title}</h2>
            <ul className="flex flex-col gap-1 text-sm">{children}</ul>
        </div>
    );
}

export default FooterList;
