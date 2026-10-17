import { Outlet, ScrollRestoration } from "react-router"
import { MainHeader } from "./MainHeader"
import { MainFooter } from "./MainFooter"

export const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
      <ScrollRestoration />
    </>
  )
}