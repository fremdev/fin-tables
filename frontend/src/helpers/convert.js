export default {
  getRate(currency, rates) {
    return rates.find(entry => entry.symbol === currency).rate;
  },
  convertTo(data, rates, currency) {
    const rateFrom = this.getRate(data.currency, rates);
    const rateTo = this.getRate(currency, rates);
    return (data.value / rateFrom) * rateTo;
  },
};
