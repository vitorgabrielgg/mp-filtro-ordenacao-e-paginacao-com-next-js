import { IOrderData } from "@/@types";
import axios from "axios";

export const getOrderData = async (
  params: string
): Promise<IOrderData | undefined> => {
  try {
    const res = await axios.get<IOrderData>(
      `https://apis.codante.io/api/orders-api/orders?${params}`
    );

    return res.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
