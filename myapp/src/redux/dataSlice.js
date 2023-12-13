// slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API endpoint for illustration
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchDataAsync = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export { fetchDataAsync };
// export { selectAllData, selectDataById };
export default dataSlice.reducer;
