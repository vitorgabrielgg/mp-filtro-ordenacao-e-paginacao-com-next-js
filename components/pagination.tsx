import { LinkType } from "@/@types";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { deleteQueryParam } from "@/utils";
import { useRouter } from "next/navigation";

interface PaginationProps {
  links: LinkType[] | undefined;
}

export default function Pagination({ links }: PaginationProps) {
  const router = useRouter();
  const params = deleteQueryParam("page") ?? "";

  function handleRoute(url: string) {
    if (!url.includes("undefined")) {
      router.push(`?${url}`);
    }
  }

  return (
    <PaginationComponent>
      <PaginationContent>
        {links?.map((link) => {
          const pageIndex = link.url?.split("?")[1];
          const url = !params.toString()
            ? `${pageIndex}`
            : `${pageIndex}&${params}`;

          if (link.label.includes("Anterior")) {
            return (
              <PaginationItem key={link.label} className="cursor-pointer">
                <PaginationPrevious onClick={() => handleRoute(url)} />
              </PaginationItem>
            );
          }

          if (link.label.includes("Próximo")) {
            return (
              <PaginationItem key={link.label} className="cursor-pointer">
                <PaginationNext onClick={() => handleRoute(url)} />
              </PaginationItem>
            );
          }

          if (link.label.includes("...")) {
            return (
              <PaginationItem key={link.label}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem
              key={link.label}
              className="hidden md:inline-flex cursor-pointer"
            >
              <PaginationLink
                onClick={() => handleRoute(url)}
                isActive={link.active}
              >
                {link.label}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </PaginationComponent>
  );
}
