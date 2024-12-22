"use server";

import axios from "@/lib/axios";

export const sendQuery = async (queryData) => {
  try {
    const response = await axios.post("/api/contactMe", queryData);

    console.log("Query sent successfully:", response.data.message);
    return { message: response.data.message };
  } catch (error) {
    // Log the error in full to see what went wrong
    console.error("Error sending query:", error);
    const errorMessage =
      error.response?.data?.message || "Failed to send query";
    throw new Error(errorMessage);
  }
};
