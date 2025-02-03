"use client";

import { useRouter, useSearchParams } from "next/navigation";
import OrdersTable from "./orders-table";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { getOrderData } from "@/services";
import { IOrderData } from "@/@types";
import { setQueryParam } from "@/utils";

export const OrdersContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [ordersData, setOrdersData] = useState<IOrderData>();

  useEffect(() => {
    if (!searchParams.has("page")) {
      const params = setQueryParam("page", "1");
      router.push(`?${params.toString()}`);
    }

    async function fetchOrdersData() {
      const res = await getOrderData(`${searchParams}`);
      setOrdersData(res);
    }

    fetchOrdersData();
  }, [searchParams, router]);

  useEffect(() => {
    if (!ordersData?.data.length && +searchParams.get("page")! > 1) {
      const params = setQueryParam("page", "1");
      router.push(`?${params.toString()}`);
    }
  }, [router, ordersData?.data, searchParams]);

  return (
    <>
      <OrdersTable orders={ordersData?.data} />
      <div className="mt-8">
        <Pagination links={ordersData?.meta.links} />
      </div>
    </>
  );
};
