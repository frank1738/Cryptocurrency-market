import React from 'react';

const Coin = ({
  marketRank,
  coinSymbol,
  currentPrice,
  priceChange,
  totalVolume,
  marketCap,
  imageUrl,
  coinName,
}) => {
  return (
    <div className="heading coins">
      <p className="first">{marketRank}</p>
      <div className="width my-coin">
        <div className="symbol">
          <img src={imageUrl} alt={coinName} className="img" />
          <p>{coinSymbol.toUpperCase()}</p>
        </div>
        <div className="next">
          <p className="coin-name">{coinName}</p>
          <i className="uil uil-arrow-circle-right next-btn"></i>
        </div>
      </div>
      <p className="width">${currentPrice.toLocaleString()}</p>
      <p className="width">{priceChange.toFixed(2)}%</p>
      <p className="hide-mobile width">${totalVolume.toLocaleString()}</p>
      <p className="hide-mobile width">${marketCap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
