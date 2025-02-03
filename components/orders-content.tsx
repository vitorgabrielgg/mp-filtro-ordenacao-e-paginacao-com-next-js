"use client";

import { useRouter, useSearchParams } from "next/navigation";
import OrdersTable from "./orders-table";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { getOrderData } from "@/services";
import { IOrderData } from "@/@types";
import { setQueryParam } from "@/utils";
import { Loading } from "./loading";
import { useDebounce } from "@uidotdev/usehooks";

export const OrdersContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [ordersData, setOrdersData] = useState<IOrderData>();
  const [loading, setLoading] = useState(false);

  const deboundeSearchParams = useDebounce(searchParams, 500);

  useEffect(() => {
    if (!deboundeSearchParams.has("page")) {
      const params = setQueryParam("page", "1");
      router.push(`?${params.toString()}`);
    }

    async function fetchOrdersData() {
      try {
        setLoading(true);
        const res = await getOrderData(`${deboundeSearchParams}`);
        setOrdersData(res);
      } finally {
        setLoading(false);
      }
    }

    fetchOrdersData();
  }, [deboundeSearchParams, router]);

  useEffect(() => {
    if (!ordersData?.data.length && +deboundeSearchParams.get("page")! > 1) {
      const params = setQueryParam("page", "1");
      router.push(`?${params.toString()}`);
    }
  }, [router, ordersData?.data, deboundeSearchParams]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {ordersData?.data.length && ordersData.meta ? (
            <div className="">
              <OrdersTable orders={ordersData?.data} />
              <div className="mt-8">
                <Pagination links={ordersData?.meta.links} />
              </div>
            </div>
          ) : (
            <p>Nenhum resultado foi encontrado.</p>
          )}
        </>
      )}
    </>
  );
};
