import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrencies } from '../Redux/Currencies/currencies';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Coin from './Coin';
import Search from './Search';

const Home = ({ page, set }) => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <div className="container">
      <Search />
      <div>
        <div className="heading">
          <p className="first title">#</p>
          <p className="width title">Coin</p>
          <p className="width title">Price</p>
          <p className="width title">24h</p>
          <p className="hide-mobile width title">Volume</p>
          <p className="hide-mobile width title">Mkt Cap</p>
        </div>
        {data.length > 0 ? (
          data.map((item) => (
            <NavLink
              to={`/coin/${item.id}`}
              className="link"
              key={item.id}
              onClick={() => set('coins')}
            >
              <Coin
                id={item.id}
                marketRank={item.market_cap_rank}
                image={item.image}
                coinSymbol={item.symbol}
                currentPrice={item.current_price}
                priceChange={item.price_change_percentage_24h}
                totalVolume={item.total_volume}
                marketCap={item.market_cap}
                imageUrl={item.image}
                coinName={item.name}
              />
            </NavLink>
          ))
        ) : (
          <div className="warning">
            <i className="uil uil-exclamation-triangle warn-icon"></i>
            <h1>Coin Not Available</h1>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
