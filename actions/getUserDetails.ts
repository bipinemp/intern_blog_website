import axios from "axios";

export const getAllUsers = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_BASE_URL}/users/${userId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
