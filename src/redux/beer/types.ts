export type Beer = {
  id:number;
  image_url: string;
  name:string;
  tagline:string;
  description:string;
  abv:number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchBeerParams = {
  search: string;
  currentPage: string;
};

export interface BeerSliceState {
  items: Beer[];
  status: Status;
}
