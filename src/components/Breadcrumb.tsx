import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadCrumb({ currentPage }: { currentPage: string }) {
    return (
        <div className="flex flex-row items-center w-[95%] justify-start gap-2 mx-auto mt-2">
            <p className="text-sm">Ti trovi in: </p>
            <Breadcrumb>
                <BreadcrumbList>
                    {currentPage == '' && (
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-primary">Home</BreadcrumbLink>
                        </BreadcrumbItem>)}
                    {currentPage && (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="underline text-black dark:text-white">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="#"
                                    className="text-gray-700 dark:text-muted-foreground cursor-default pointer-events-none"
                                >
                                    {currentPage}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}