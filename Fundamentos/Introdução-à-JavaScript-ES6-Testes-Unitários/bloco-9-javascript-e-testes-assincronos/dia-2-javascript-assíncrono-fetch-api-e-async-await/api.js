// api.js
const lu = document.getElementById('coins-list');


const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const response = await fetch (url);
  const {data} = await response.json()
    data.filter(({ rank }) => rank <= 10).map(({ name, priceUsd, symbol}) => {
      const newLi = document.getElementById('li');
      newLi.innerText = `${ name } (${ symbol }): $${ priceUsd }`;
      lu.appendChild(newLi);
  
  });
}
window.onload = () => fetchCoins();