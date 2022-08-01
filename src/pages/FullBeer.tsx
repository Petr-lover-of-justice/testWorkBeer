import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullBeer: React.FC = () => {
  const [beer, setBeer] = React.useState<{
    id: number;
    image_url: string;
    name: string;
    tagline: string;
    description: string;
    abv: number;
    food_pairing: any;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchBeer() {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers/' + id);
        setBeer(data.find(({ id }: any) => id));
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchBeer();
  }, []);


  if (!beer) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <div className="full-Beer">
        <div>
          <img src={beer.image_url} alt="sorry not beer" />
        </div>
        <div className="full-Beer__description">
          <h4><span>Tagline: </span>{beer.tagline}</h4>
          <p><span>Description: </span>{beer.description}</p>
          <p><span>Alcohol by volume: </span> {beer.abv}</p>
          <p><span>Food combination: </span> {beer.food_pairing}</p>
          <Link to="/">
            <button className="button button--outline button--add">
              <span>Назад</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullBeer;


