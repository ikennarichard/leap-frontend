import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import BaseLayout from "./components/BaseLayout";
// import ProfilePage from "./pages/profile_page";
import BeneficiaryPage from "./pages/beneficiaries";
import Signup from "./pages/signup";
import Transfer from "./pages/transfer";

const router = createBrowserRouter([
  {
    path: '',
    element: <BeneficiaryPage/>,
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
    path: 'signup',
    element: <Signup />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
