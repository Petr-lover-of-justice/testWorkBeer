import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Beer, SearchBeerParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchBeers = createAsyncThunk<Beer[], SearchBeerParams>(
  'pizza/fetchBeersStatus',
  async (params) => {
    const { search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=30&beer_name=${search}`);
    return data;
  },
);
