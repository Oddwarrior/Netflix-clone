import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./componenets/layout";
import Browse from "./pages/browse";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<h1>Default view</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/browse" element={<Layout />}>
          <Route index element={<Browse />}></Route>
        </Route>
        <Route path="/latest" element={<Layout />}>
          <Route index element={<h1>latest</h1>}></Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default function App() {
  return <AppRouter />;
}
