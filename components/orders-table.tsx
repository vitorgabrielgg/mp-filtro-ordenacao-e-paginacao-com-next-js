import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronsUpDown } from "lucide-react";
import { OrderType } from "@/@types";
import { OrderTableItem } from "./order-table-item";

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
              <TableHead className="table-cell">Cliente</TableHead>
              <TableHead className="table-cell">Status</TableHead>
              <TableHead className="table-cell cursor-pointer justify-end items-center gap-1">
                <div className="flex items-center gap-1">
                  Data
                  <ChevronsUpDown className="w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right cursor-pointer flex justify-end items-center gap-1">
                Valor
                <ChevronsUpDown className="w-4" />
              </TableHead>
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
