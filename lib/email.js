"use server";

import axios from "@/lib/axios";

export const sendQuery = async ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}) => {
  try {
    // Make a POST request to the Laravel backend to send the query
    const response = await axios.post("/api/contact", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      service: service,
      message: message,
    });

    console.log("Query sent successfully:", response.data.message);
    return {
      message: response.data.message,
    };
  } catch (error) {
    console.error("An error occurred while sending a query:", error);
    //check if the error response exists and has a message
    const errorMessage =
      error.response?.data?.message || "Failed to send query";

    throw new Error(errorMessage);
  }
};
