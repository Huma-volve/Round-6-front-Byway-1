import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handleGetNotifications = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/notifications`, {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ||
          "33|3MiA8Oajszy5lhMtI0S2hq1fQJJxvNvbngBaCeSX9cd2c61d"
        }`,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};
