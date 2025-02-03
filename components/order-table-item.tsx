import { OrderType } from "@/@types";
import { Badge } from "./ui/badge";
import { TableRow, TableCell } from "./ui/table";

interface OrderTableItemProps {
  order: OrderType;
}

export const OrderTableItem = ({ order }: OrderTableItemProps) => {
  const status = order.status === "pending" ? "Pendente" : "Completo";

  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{order.customer_name}</div>
        <div className="hidden md:inline text-sm text-muted-foreground">
          {order.customer_email}
        </div>
      </TableCell>
      <TableCell>
        <Badge className={`text-xs`} variant="outline">
          {status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {order.order_date.toString()}
      </TableCell>
      <TableCell className="text-right">{order.amount_in_cents}</TableCell>
    </TableRow>
  );
};
