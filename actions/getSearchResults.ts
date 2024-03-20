import axios from "axios";

export const getSearchResults = async (query: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/posts?q=${encodeURI(query)}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
