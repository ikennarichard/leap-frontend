import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
// import ProfilePage from "./pages/profile_page";
import BeneficiaryPage from "./pages/beneficiaries/beneficiaries";
import Signup from "./pages/sign_up_page/signup";
import Sign_In from "./pages/sign_in/sign_in";
import Transfer from "./pages/transfer";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const router = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout/>,
    children: [
      {
        index: true,
        element: '',
      },
      {
        path: 'beneficiaries',
        element: <BeneficiaryPage />,
      },
      {
        path: 'transfers',
        element: <Transfer/>,
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
