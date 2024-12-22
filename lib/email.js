"use server";

import axios from "@/lib/axios";

export const sendQuery = async (queryData) => {
  const apiEndpoint = "/api/contactMe";

  try {
    console.log(`Sending request to API route: ${apiEndpoint}`);
    const response = await axios.post(apiEndpoint, queryData);

    console.log("Query sent successfully:", response.data.message);
    return { message: response.data.message };
  } catch (error) {
    console.error(`Error sending query to API route: ${apiEndpoint}`, error);
    const errorMessage =
      error.response?.data?.message || "Failed to send query";
    throw new Error(errorMessage);
  }
};
