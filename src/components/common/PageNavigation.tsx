import { Link } from "react-router-dom";
import { Fragment } from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { ILink } from "@/types";

type PageNavigationProps = {
    prevPages: ILink[];
    curPage: string;
};

function PageNavigation({ prevPages, curPage }: PageNavigationProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList className="capitalize">
                {prevPages.map((page: ILink) => (
                    <Fragment key={page.id}>
                        <BreadcrumbItem className="text-gray-700 font-medium">
                            <BreadcrumbLink asChild>
                                <Link to={page.path}>{page.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-900" />
                    </Fragment>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-primary-600 font-medium">
                        {curPage}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default PageNavigation;
