import type { ReactNode } from "react";

type OutletLayoutProps = {
    title: string;
    titleColor?: string;
    subTitle?: string;
    children: ReactNode;
};

function OutletLayout({
    title,
    titleColor = "text-secondary-main",
    subTitle,
    children,
}: OutletLayoutProps) {
    return (
        <div className="py-8 px-0 text-gray-900">
            <header className="mb-4">
                <h1 className={`${titleColor} font-medium text-xl mb-2`}>
                    {title}
                </h1>
                {subTitle && <p>{subTitle}</p>}
            </header>
            <div>{children}</div>
        </div>
    );
}

export default OutletLayout;
