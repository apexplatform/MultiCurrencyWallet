import ethToken from './ethToken'



export default (currency) => {

  let key = currency.toLowerCase()
  switch (currency) {
    case 'currency':
    case 'btc (sms-protected)':
    case 'btc (multisig)':
      key = 'btc'
      break;
    case 'eth':
      key = 'eth'
      break;
  }

  if (ethToken.isEthToken({ name: key })) key = 'eth'

  return key
}