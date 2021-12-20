import axios from 'axios';

const CryptoPrices = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=2&page=1&sparkline=false&price_change_percentage=7d',
    );
    const data = response.data;
    return data;
  } catch (error) {
  }
};

export default CryptoPrices;
