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

export const getCurrencySymbol = (currency) => {
  let locale;
  if (locale !== null) {
    switch(currency) {
    case 'CAD', 'USD':
      locale = 'en-US'
      break
    case 'GBP':
      locale = 'en-UK'
      break
    case 'CNY':
      locale = 'zh-Hans-CN'
      break
    case 'NGN':
      locale = 'en-NG'
      break
    default:
      locale = null
    }
  }
  if (locale !== null) {
    return (0).toLocaleString(locale, { style: 'currency', currency, 
  minimumFractionDigits: 0, maximumFractionDigits: 0 }).
  replace(/\d/g, '').trim()
  } else {
    return null;
  }
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
        return 0
    }
  } else {
    return 0
  }
 
}

export const calculateTransactionFee  = 
(currency, amount) => {
  
  const fee = 0.002;

  switch(currency) {
    case 'dollar':
      return Dollar((amount) * fee)
    case 'naira':
      return Naira((amount) * fee)
    case 'yen':
      return Yen((amount) * fee)
    case 'pounds':
      return Pounds((amount) * fee)
    case 'canadian dollar':
      return canadianDollars((amount) * fee)
    default:
      return 0
  } 
}

export const generateReferenceNumber = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  let result = '';

  for (let i = 0; i < 22; i++) {
    result += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }

  return result;
}

export const getCurrentDate = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return currentDate;
}