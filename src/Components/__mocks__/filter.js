const coins = [
  { name: 'bitcoin', value: 2000 },
  { name: 'usd', value: 5000 },
  { name: 'ase', value: 8000 },
];

export const filter = (coinName) => {
  const searchData = coins.filter((item) =>
    item.name.toLowerCase().includes(coinName.toLowerCase())
  );
  return searchData[0].value;
};
