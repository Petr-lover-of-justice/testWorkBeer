import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './';


export const Header: React.FC = () => {

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={"https://cdn-icons-png.flaticon.com/512/1249/1249597.png?w=900&t=st=1659357068~exp=1659357668~hmac=89d0cf828df1c785442c554e60fc043cee9f5a28dd15000b616ad32313f24e31"} alt="logo" />
            <div>
              <h1>Beer</h1>
            </div>
          </div>
        </Link>
         <Search />
  
      </div>
    </div>
  );
};
