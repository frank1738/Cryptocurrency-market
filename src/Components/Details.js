import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../Redux/Category/categories';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import DOMPurify from 'dompurify';

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.coinId;
  const details = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCategory(id));
  }, [dispatch]);
  return (
    <div>
      <div className="detail-container">
        <div className="content">
          <h1 className="detail-name">{details.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {details.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="detail-heading">
              {details.image ? (
                <img
                  src={details.image.small}
                  alt="coin"
                  className="detail-img"
                />
              ) : null}

              {details.name ? <p className="det-name">{details.name}</p> : null}
              {details.symbol ? <p>{details.symbol.toUpperCase()}</p> : null}
            </div>
            <div className="detail-price">
              {details.market_data ? (
                <h1>
                  ${details.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {details.market_data?.price_change_percentage_1h_in_currency
                    ? details.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
                <td>
                  {details.market_data?.price_change_percentage_24h_in_currency
                    ? details.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
                <td>
                  {details.market_data?.price_change_percentage_7d_in_currency
                    ? details.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
                <td>
                  {details.market_data?.price_change_percentage_14d_in_currency
                    ? details.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
                <td>
                  {details.market_data?.price_change_percentage_30d_in_currency
                    ? details.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
                <td>
                  {details.market_data?.price_change_percentage_1y_in_currency
                    ? details.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )
                    : null}
                  %
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row first-row">
                <h4>24 Hour Low</h4>
                {details.market_data?.low_24h ? (
                  <p className="data">
                    ${details.market_data.low_24h.usd.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div className="row ">
                <h4>24 Hour High</h4>
                {details.market_data?.high_24h ? (
                  <p className="data">
                    ${details.market_data.high_24h.usd.toLocaleString()}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {details.market_data?.market_cap ? (
                  <p className="data">
                    ${details.market_data.market_cap.usd.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {details.market_data?.circulating_supply ? (
                  <p className="data">
                    ${details.market_data.circulating_supply.toLocaleString()}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3 className="about-header">About</h3>
            <p
              className="about-description"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  details.description ? details.description.en : ''
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
