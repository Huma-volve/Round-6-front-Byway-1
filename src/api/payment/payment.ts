import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handleGetPaymentMethods = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/payment/user-payment-methods`, {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ||
          "48|iH20muYyxoXa82JWYLeIbkpJQ1knjMrfjBcnjwiHd5c44d80"
        }`,
      },
    });
    if (res.status === 200) {
      toast.success("Payment methods fetched successfully");
      return res.data.payment_methods;
    }
    return [];
  } catch (error) {
    console.error("Error fetching payment methods:", error);
    toast.error("Error fetching payment methods");
    return [];
  }
};

export const handleGetPaymentHistory = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/payment/payment-history`, {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ||
          "48|iH20muYyxoXa82JWYLeIbkpJQ1knjMrfjBcnjwiHd5c44d80"
        }`,
      },
    });

    if (res.status === 200) {
      return res;
    }

    return null;
  } catch (error) {
    console.error("Error fetching payment history:", error);
    return null;
  }
};
