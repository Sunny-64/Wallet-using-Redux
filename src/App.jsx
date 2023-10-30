import React from 'react'
import Dashboard from './components/Dashboard'
import CreateAccount from './components/CreateAccount'
import LoginWithSeedPhrase from './components/LoginWithSeedPhrase';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  console.log("app : ",JSON.parse(localStorage.getItem("account")))
  const account = JSON.parse(localStorage.getItem("account"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: !account?.publicKey ? <CreateAccount /> : <Dashboard />,
    },
    {
      path: "/login",
      element: !account?.publicKey ? <LoginWithSeedPhrase /> : <Dashboard />,
    },
  ]);

 
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="main-card bg-secondary h-[500px] w-[500px] rounded-lg px-4 py-8 shadow-lg overflow-y-auto hide-scrollbar">
        <RouterProvider router={router} />
      </div>
    </main>
  )
}

export default App

