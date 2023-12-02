import PageHeading from '../PageHeading.jsx/PageHeading';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Transactions = () => {

  const { pathname } = useLocation();
  
  return (
    <div style={{padding: '2em 1em'}}>
      <div>
        <PageHeading 
          heading='Transactions'
          link={pathname === '/transactions' ? '/' : ''}
        />
      </div>

      <Outlet/>
    </div>
  )
}

export default Transactions;