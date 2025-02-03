import { ComponentProps } from "react";
import { TableHead } from "./ui/table";
import { deleteQueryParam, getQueryParam, setQueryParam } from "@/utils";
import { useRouter } from "next/navigation";
import { ChevronsDown, ChevronsUp, ChevronsUpDown } from "lucide-react";

interface TableHeadItemProps extends ComponentProps<"th"> {
  text: string;
  value?: string;
}

export const TableHeadItem = ({
  text,
  value,
  ...props
}: TableHeadItemProps) => {
  const router = useRouter();
  const sortParam = getQueryParam("sort") ?? "";
  let params: URLSearchParams;

  function handleSort(sortValue: string) {
    if (!sortParam) {
      params = setQueryParam("sort", sortValue);
    } else {
      if (sortParam === sortValue) {
        params = setQueryParam("sort", `-${sortValue}`);
      } else if (sortParam === `-${sortValue}`) {
        params = deleteQueryParam("sort")!;
      } else if (!sortParam.includes(sortValue)) {
        deleteQueryParam("sort")!;
        params = setQueryParam("sort", sortValue);
      }
    }

    router.push(`?${params}`);
  }

  return (
    <TableHead {...props} onClick={() => value && handleSort(value)}>
      <div className="flex items-center gap-1">
        {text}
        {value && (
          <div>
            {sortParam === value ? (
              <ChevronsUp className="w-4" />
            ) : sortParam === `-${value}` ? (
              <ChevronsDown className="w-4" />
            ) : (
              <ChevronsUpDown className="w-4" />
            )}
          </div>
        )}
      </div>
    </TableHead>
  );
};
