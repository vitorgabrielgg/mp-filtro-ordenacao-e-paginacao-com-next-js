import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { OrderType } from "@/@types";
import { OrderTableItem } from "./order-table-item";
import { TableHeadItem } from "./table-head-item";

interface OrdersTableProps {
  orders: OrderType[] | undefined;
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <>
      {orders && orders.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow className="w-full">
              <TableHeadItem text="Cliente" className="table-cell" />
              <TableHeadItem text="Status" className="table-cell" />
              <TableHeadItem
                text="Data"
                className="table-cell cursor-pointer justify-end items-center gap-1"
              />
              <TableHeadItem
                text="Valor"
                className="text-right cursor-pointer flex justify-end items-center gap-1"
              />
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <OrderTableItem key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
