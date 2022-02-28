const loadCoins = () =>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => displayCoins(data));
}

loadCoins();

const displayCoins = coins =>{
    console.log(coins);
    for(const coin of coins){
        const coinsDiv = document.getElementById('coins');
        const div = document.createElement('div');
        div.classList.add('coin');
        div.innerHTML = `
        <img src="${coin.image}">
        <h3>Name: ${coin.name}</h3>
        <h4>Symbol: ${coin.symbol}</h4>
        <h4>Current Price: ${coin.current_price}</h4>
        <h4>MarketCap: ${coin.market_cap}</h4>
        <h4>24h high: ${coin.high_24h}</h4>
        `;

        coinsDiv.appendChild(div);
    }
}