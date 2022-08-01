import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BeerBlock, Skeleton, Paginations } from '../components';


import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectBeerData } from '../redux/beer/selectors';
import { setCurrentPage } from '../redux/filter/slice';
import { fetchBeers } from '../redux/beer/asyncActions';


const Home: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectBeerData);
  const { currentPage, searchValue } = useSelector(selectFilter);

 

  const onChangePage = (_:any, page: number) => {
    dispatch(setCurrentPage(page));
  };
 
  const getBeers = async () => {
    const search = searchValue;
    dispatch(
      fetchBeers({
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    getBeers();
  }, [ searchValue, currentPage]);

  const beers = items.map((obj: any) => <BeerBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
 
  return (
    <div className="container">
        <Paginations value={currentPage} onchecked={onChangePage}/>
      <div className="content__top">
      </div>
      <h2 className="content__title">Пиво на любой вкус</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка </h2>
          <p>К сожалению, не удалось получить пивко. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : beers}</div>
      )}
    </div>
  );
};

export default Home;
