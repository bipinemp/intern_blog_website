import axios from "axios";

export const getAllUserBlogs = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_BASE_URL}/posts?userId=${userId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
