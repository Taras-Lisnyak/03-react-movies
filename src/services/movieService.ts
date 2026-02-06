import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/movie";

interface FetchMoviesParams {
  query: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(
  params: FetchMoviesParams,
  token: string
): Promise<FetchMoviesResponse> {
  const { query } = params;

  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`, // ✅ саме так
      },
    }
  );

  return response.data;
}

