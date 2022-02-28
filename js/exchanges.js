const loadExchanges = () =>{
    fetch('https://api.coingecko.com/api/v3/exchanges')
    .then(res => res.json())
    .then(data => displayExchanges(data));
}

loadExchanges();

const displayExchanges = exchanges =>{
    for(const exchange of exchanges){
        const exchangeDiv = document.getElementById('exchanges');
        const div = document.createElement('div');
        div.classList.add('exchange');
        div.innerHTML = `
        <img src="${exchange.image}">
        <h3>Name: ${exchange.name}</h3>
        <h4>Website: <a target="_blank" href="${exchange.url}">Visit Website</a></h4>
        <h4>Rank: ${exchange.trust_score_rank}</h4>
        <h4>Trust Score: ${exchange.trust_score}</h4>
        <h4>Trade Volume 24h BTC: ${exchange.trade_volume_24h_btc}</h4>
        `;
        exchangeDiv.appendChild(div);
    }
}