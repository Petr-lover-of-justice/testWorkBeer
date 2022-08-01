import React from 'react';

import {
  Pagination
} from "@mui/material/";


type PaginationProps = {
  value: number;
  onchecked: (_: any, num: number) => void; //first props no need

};

export const Paginations: React.FC<PaginationProps> = ({ value, onchecked }) => {

  return (
    <div>
      <Pagination count={5} page={value} onChange={(_, num) => onchecked(_, num)} />
    </div>
  )
}

