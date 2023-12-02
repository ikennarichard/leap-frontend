import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import ProfilePage from "./pages/profile_page/profile_page";
import Beneficiaries from "./pages/beneficiaries/beneficiaries";
import Signup from "./pages/sign_up_page/signup";
import Sign_In from "./pages/sign_in/sign_in";
import Accounts from "./pages/accounts/accounts";
// import ExchangeRates from "./pages/exchange_rates/exchange";
import Transfer from "./pages/transfer/transfer";
import Transactions from "./components/transactions/Transactions";
import TransactionsList from "./components/transactions/TransactionsList";
import TransactionTracker from "./components/transactions/TransactionTracker";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const router = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout/>,
    children: [
      {
        index: true,
        element: <ProfilePage/>,
      },

      {
        path: 'transactions',
        element: <Transactions />,
        children: [
          {
            index: true,
            element: <TransactionsList/>
          },

          {
            path: ':id',
            element: <TransactionTracker/>
          }
        ]
      },

      {
        path: 'accounts',
        element: <Accounts />
      },

      {
        path: 'beneficiaries',
        element: <Beneficiaries />,
      },

      {
        path: 'transfer',
        element: <Transfer />,
      },
    ],
  },

  {
    path: 'sign_up',
    element: <Signup />
  },

  {
    path: 'sign_in',
    element: <Sign_In />
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
