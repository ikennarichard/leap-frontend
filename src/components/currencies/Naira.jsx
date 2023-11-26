

const Naira = ({ amount, className }) => {
  
  let naira = Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
  
  return (
    <span className={className}>
      {`${naira.format(amount)}`}
    </span>
  )
}

export default Naira;