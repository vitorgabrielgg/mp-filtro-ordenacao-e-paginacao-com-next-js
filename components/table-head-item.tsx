import { ComponentProps } from "react";
import { TableHead } from "./ui/table";

interface TableHeadItemProps extends ComponentProps<"th"> {
  text: string;
}

export const TableHeadItem = ({ text, ...props }: TableHeadItemProps) => {
  return <TableHead {...props}>{text}</TableHead>;
};
