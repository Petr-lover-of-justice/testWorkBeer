import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type BeerBlockProps = {
  id:number;
  image_url: string;
  name:string;
  tagline:string;
  description:string;
  abv:number;
  food_pairing:any;
};

export const BeerBlock: React.FC<BeerBlockProps> = ({
  id,
  image_url,
  name,
  tagline,
  description,
  abv,
  food_pairing,
}) => {
  const dispatch = useDispatch();
 
  return (
    <div className="beer-block-wrapper">
      <div className="beer-block">
        <Link key={id} to={`/beer/${id}`}>
          <img className="beer-block__image" src={image_url} alt="Beer" />
          <h4 className="beer-block__title">{name}</h4>
        </Link>

        <div className="beer-block__bottom">
          <div className="beer-block__price"> {tagline} </div>
        </div>
        <div className="beer-block__description">
          {abv}
          {food_pairing}
          {description}
        </div>
      </div>
      
    </div>
  );
};
