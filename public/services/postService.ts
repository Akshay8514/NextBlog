import axios from "axios";
import { Post } from "../types/post";

const API_URL = "http://localhost:3001/api/blogs";

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(API_URL);
    return response.data
}

export const getPostById = async (id: number): Promise<Post[]> => {
    const response = await axios.get<Post>(`${API_URL}/${id}`);
    return response.data
}