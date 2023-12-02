const Dollar = (amount) => {
  
  let dollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  return dollar.format(amount);
}

const Naira = (amount) => {
  
  let naira = Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
  
  return naira.format(amount)
}

const Yen = (amount) => {
  
  let naira = Intl.NumberFormat('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY',
  });
  
  return naira.format(amount)
}

const Pounds = (amount) => {
  
  let pounds = Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  });
  
  return pounds.format(amount)
}

  
const canadianDollars = (amount) => {
  
  let cadollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  });
  
  return cadollar.format(amount)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date).replace(',', '').split(' ').join('-');
}


export const getAmountByCurrencyType = (currency, amount) => {

  if (currency !== '') {
    switch(currency) {
      case 'dollar':
        return Dollar(amount)
      case 'naira':
        return Naira(amount)
      case 'yen':
        return Yen(amount)
      case 'pounds':
        return Pounds(amount)
      case 'canadian dollar':
        return canadianDollars(amount)
      default:
        return 'Invalid currency'
    }
  } else {
    return 'No currency available'
  }
 
}

export const calculateTransactionFee  = 
(type, currency, amount) => {
  
  const fee = 0.002;
  
  if (type === 'credit') {
    return '0.00';
  } else {
    switch(currency.toLowercase()) {
      case 'dollar':
        return Dollar((amount) * fee)
      case 'naira':
        return Naira((amount) * fee)
      default:
        return '0.00'
    } 
  }
}

export const generateRandomReferenceNumber = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 22; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}