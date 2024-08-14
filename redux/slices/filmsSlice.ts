import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAllMovies } from "@/utils/api";
interface Film {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
}

interface FilmsState {
  films: Film[];
  loading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

export const fetchAllMovies = createAsyncThunk(
  "films/fetchAllMovies",
  async (nub: Number) => {
    const response = await getAllMovies(nub);
    return response.results as Film[];
  }
);

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.films = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch films";
      });
  },
});

export const selectFilms = (state: RootState) => state.films;
export default filmsSlice.reducer;
