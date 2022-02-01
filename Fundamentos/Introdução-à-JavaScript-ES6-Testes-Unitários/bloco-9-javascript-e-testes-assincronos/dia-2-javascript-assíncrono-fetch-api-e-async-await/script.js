const btcCripto = async () => {
    const API_URL = `https://api.coincap.io/v2/assets`;
    const API_BRL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`
    
    const responseBRL = await fetch(API_BRL);
    const dataBrl = await responseBRL.json();
    const brl = dataBrl.usd.brl;

    const response = await fetch(API_URL)
    const {data} = await response.json()
    data.filter(({elementoRank}) => elementoRank <= 10)
    .map(({id, priceUsd, symbol}) => {
        const newlist = document.createElement('li');
        newlist.className = 'item'
        const ul = document.getElementById('listPlata');
        newlist.innerText = `${id} (${symbol}): ${priceUsd * brl}.`;
        ul.appendChild(newlist);
    });
}
console.log(btcCripto());
