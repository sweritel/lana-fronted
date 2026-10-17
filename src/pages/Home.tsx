import { SidebarNav } from "../home/SidebarNav"
import { HeroBanner } from "../home/HeroBanner"
import { Discography } from "../home/Discography"
import { NewsGrid } from "../home/NewsGrid"
import { Canciones } from "../home/Songs"
import { Contact } from "../home/Contact"

export const Home = () => {
  return (
    <>
      <SidebarNav />
      <HeroBanner />
      <Discography />
      <NewsGrid />
      <Canciones />
      <Contact />
    </>
  )
}