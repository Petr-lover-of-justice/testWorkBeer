import { RootState } from '../store';

export const selectBeerData = (state: RootState) => state.beer;
