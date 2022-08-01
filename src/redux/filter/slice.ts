import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, } from './types';

const initialState: FilterSliceState = {
  searchValue: 'b',
  currentPage: 1,

};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
 
  },
});

export const {setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
